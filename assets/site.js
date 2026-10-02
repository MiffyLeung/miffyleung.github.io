'use strict';
document.documentElement.classList.add('js');
const $=(s,root=document)=>root.querySelector(s);
const $$=(s,root=document)=>Array.from(root.querySelectorAll(s));
const media=matchMedia('(prefers-reduced-motion: reduce)');
let manualMotion=false;
try{manualMotion=localStorage.getItem('portfolio-motion')==='off'}catch(_){ }
function reduced(){return manualMotion||media.matches}
function syncMotion(){
 const off=reduced();document.documentElement.dataset.motion=off?'off':'on';
 $('#route-motion').textContent=`@view-transition{navigation:${off?'none':'auto'}}`;
 $('#motion-label').textContent=off?'Motion off':'Motion on';
 $('#motion-toggle').setAttribute('aria-pressed',String(!off));
 $('#motion-toggle').setAttribute('aria-label',off?'Turn decorative motion on':'Turn decorative motion off');
 if(off){document.getAnimations().forEach(a=>a.finish())}
}
$('#motion-toggle').addEventListener('click',()=>{manualMotion=!manualMotion;try{localStorage.setItem('portfolio-motion',manualMotion?'off':'on')}catch(_){}syncMotion()});
media.addEventListener('change',syncMotion);syncMotion();
// Keep shared old links working after the move to real, reloadable routes.
if(location.pathname==='/'){
 const old=location.hash;
 const map={'#about':'/about/','#playground':'/thinking/','#resume':'/resume/','#case-color':'/work/color-identity/'};
 const path=map[old]||(old.startsWith('#project/')?'/work/'+old.slice(9)+'/':old.startsWith('#case-')?'/work/'+old.slice(6)+'/':null);
 if(path)location.replace(path);
}
$('.print-resume')?.addEventListener('click',()=>window.print());
const reveals=$$('.gallery-case,.study-cover,[data-reveal]');
if('IntersectionObserver' in window){
 const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(!entry.isIntersecting)return;
  entry.target.classList.add('is-in-view');
  if(!reduced())entry.target.animate([{opacity:.15,transform:'translateY(18px)'},{opacity:1,transform:'translateY(0)'}],{duration:600,easing:'cubic-bezier(.22,1,.36,1)'});
  reveal.unobserve(entry.target);
 }),{threshold:.08});reveals.forEach(e=>reveal.observe(e));
 new IntersectionObserver(([e])=>$('#site-header').classList.toggle('scrolled',!e.isIntersecting)).observe($('#header-sentinel'));
 const toc=$$('.study-toc a[href^="#"]');
 const chapter=new IntersectionObserver(entries=>{
  const current=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
  if(current)toc.forEach(a=>{const active=a.hash==='#'+current.target.id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')});
 },{rootMargin:'-18% 0px -50% 0px',threshold:[0,.25,.5]});
 toc.forEach(a=>{const section=document.getElementById(a.hash.slice(1));if(section)chapter.observe(section)});
}else reveals.forEach(e=>e.classList.add('is-in-view'));
// A brief opening gesture complements the original living diagram below.
if(!reduced()){
 $$('.hero-inner,.perspectives').forEach((e,i)=>e.animate([{opacity:0,transform:'translateY(20px)'},{opacity:1,transform:'none'}],{duration:850,delay:i*100,easing:'cubic-bezier(.22,1,.36,1)',fill:'backwards'}));
}
// The biography map follows the paragraph in view; reading never waits for animation.
if($('[data-atlas-node]')){
 const entries=$$('[data-journey-step]');
 let lastIndex=-1;
 const select=index=>{
  if(index===lastIndex)return;lastIndex=index;
  entries.forEach((e,i)=>e.classList.toggle('is-current',i===index));
  $$('[data-atlas-node]').forEach(e=>{const n=Number(e.dataset.atlasNode);e.classList.toggle('has-context',n<=index);e.classList.toggle('is-current',n===index)});
  $$('[data-atlas-edge]').forEach(e=>e.classList.toggle('has-context',Number(e.dataset.atlasEdge)<=index));
  $('#atlas-count').textContent=`${String(index+1).padStart(2,'0')} / 05`;
  $('#atlas-current').textContent=entries[index].querySelector('h3').textContent;
 };
 select(0);
 let atlasVisible=true,atlasScheduled=false;
 function updateAtlas(){atlasScheduled=false;if(!atlasVisible)return;let nearest=0,distance=Infinity;entries.forEach((entry,i)=>{const r=entry.getBoundingClientRect(),d=Math.abs(r.top+r.height*.4-innerHeight*.52);if(d<distance){distance=d;nearest=i}});select(nearest)}
 function scheduleAtlas(){if(atlasVisible&&!atlasScheduled){atlasScheduled=true;requestAnimationFrame(updateAtlas)}}
 if('IntersectionObserver'in window)new IntersectionObserver(([entry])=>{atlasVisible=entry.isIntersecting;if(atlasVisible){addEventListener('scroll',scheduleAtlas,{passive:true});scheduleAtlas()}else removeEventListener('scroll',scheduleAtlas)}).observe($('.journey-layout'));
 else addEventListener('scroll',scheduleAtlas,{passive:true});
 addEventListener('resize',scheduleAtlas,{passive:true});scheduleAtlas();
 $$('[data-atlas-node]').forEach(e=>e.addEventListener('click',()=>{const i=Number(e.dataset.atlasNode);select(i);entries[i].scrollIntoView({block:'center',behavior:reduced()?'instant':'smooth'})}));
}

if($('#world-map')){
const clamp = (n,a=0,b=1) => Math.max(a,Math.min(b,n));
const lerp = (a,b,t) => a+(b-a)*t;
const smooth = t => t*t*(3-2*t);
const worldStates = [
 {xy:[[485,275],[735,300],[275,125],[250,470],[730,125],[695,475],[455,480],[780,475]],opacity:[1,.85,0,0,0,.32,0,0],edges:[.8,0,0,0,.32,0,0,0,0,0,0]},
 {xy:[[510,285],[780,300],[305,120],[235,390],[690,110],[730,490],[450,510],[795,480]],opacity:[1,1,1,1,1,.75,.07,0],edges:[.7,.65,.65,.65,.5,.08,0,0,0,.3,.1]},
 {xy:[[505,265],[780,290],[305,120],[230,390],[690,110],[730,495],[455,495],[810,475]],opacity:[1,.85,.48,.5,.48,.30,1,0],edges:[.6,.28,.28,.28,.15,1,0,0,0,.15,.4]},
 {xy:[[375,265],[450,100],[225,135],[225,465],[760,130],[815,445],[520,475],[740,290]],opacity:[1,.55,.3,.3,.3,.18,1,1],edges:[.18,.14,.14,.12,.05,1,1,1,0,.12,.15]}
];
const worldPairs=[[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[6,7],[7,0],[2,4],[3,6]];
const worldNodes=$$('[data-world-node]');
const worldEdges=$$('#world-edges path');
const storyBeats=$$('[data-story-step]');
const worldNotes=['What matters to them?','Who else shapes their experience?','What do we know — and what are we assuming?','A prototype gives the question back to people.'];
const statusNotes=['Listen before designing','Understand the surrounding system','Question my own connections','Make it tangible. Keep learning.'];
let worldProgress=0;
function curvedPath(a,b,i){
 const mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2;
 const bend=i%2 ? -32:32;
 return `M${a[0].toFixed(2)} ${a[1].toFixed(2)} Q${(mx+bend).toFixed(2)} ${(my-bend).toFixed(2)} ${b[0].toFixed(2)} ${b[1].toFixed(2)}`;
}
function drawWorld(value) {
 worldProgress=clamp(value,0,3);
 const base=Math.min(2,Math.floor(worldProgress)), t=smooth(worldProgress-base);
 const a=worldStates[base],b=worldStates[base+1];
 const xy=a.xy.map((p,i)=>[lerp(p[0],b.xy[i][0],t),lerp(p[1],b.xy[i][1],t)]);
 worldNodes.forEach((el,i)=>{
  el.setAttribute('transform',`translate(${xy[i][0].toFixed(2)} ${xy[i][1].toFixed(2)})`);
  el.style.opacity=lerp(a.opacity[i],b.opacity[i],t).toFixed(3);
 });
 worldEdges.forEach((el,i)=>{
  const [u,v]=worldPairs[i];
  el.setAttribute('d',curvedPath(xy[u],xy[v],i));
  el.style.opacity=lerp(a.edges[i],b.edges[i],t).toFixed(3);
  const selected=(worldProgress>1.2&&i===5)||(worldProgress>2.15&&[6,7].includes(i));
  el.classList.toggle('is-chosen',selected);
  el.style.strokeDasharray=selected?'none':i===4?'.008 .012':'.025 .012';
 });
 const current=Math.round(worldProgress);
 $('#world-note').textContent=worldNotes[current];
 $('#story-count').textContent=String(current+1).padStart(2,'0')+' / 04';
 $('#story-status').textContent=String(current+1).padStart(2,'0')+' / '+statusNotes[current];
 $('#story-fill').style.transform=`scaleX(${(worldProgress+1)/4})`;
 $('#world-focus').style.opacity=(worldProgress<1?0:worldProgress<2?(worldProgress-1)*.22:.22*(3-worldProgress)).toFixed(3);
 $('#world-contour').style.opacity=(.15+.13*Math.sin(worldProgress/3*Math.PI)).toFixed(3);
 storyBeats.forEach((el,i)=>el.classList.toggle('is-current',i===current));
 $('#world-map').dataset.stage=String(current);
 $('#world-map').dataset.progress=worldProgress.toFixed(3);
}
function setMapState(index){drawWorld(clamp(index,0,3));}
function setLens(key){const stages={person:0,organisation:1,product:3};if(key in stages)drawWorld(stages[key]);}


 let scheduled=false,visible=true,hoverStory=null;
 const finePointer=matchMedia('(hover: hover) and (pointer: fine)');
 function renderMap(){
  scheduled=false;
  if(!visible||document.hidden)return;
  const vh=innerHeight,vw=innerWidth;
  $('#world-map').setAttribute('viewBox',vw<=700?'90 20 850 620':'0 0 1000 660');
  const line=vw<=700?Math.min(vh-100,104+310+(vh-414)*.48):80+(vh-80)*.5;
  const centers=storyBeats.map(el=>{const r=el.getBoundingClientRect();return r.top+r.height*.5});
  let progress=0;
  if(line>=centers[3])progress=3;
  else if(line>centers[0])for(let i=0;i<3;i++)if(line>=centers[i]&&line<centers[i+1]){progress=i+(line-centers[i])/(centers[i+1]-centers[i]);break}
  drawWorld(reduced()?3:hoverStory===null?progress:hoverStory);
 }
 function scheduleMap(){if(visible&&!scheduled){scheduled=true;requestAnimationFrame(renderMap)}}
 if('IntersectionObserver'in window)new IntersectionObserver(([entry])=>{
  visible=entry.isIntersecting;
  if(visible){addEventListener('scroll',scheduleMap,{passive:true});scheduleMap()}
  else removeEventListener('scroll',scheduleMap);
 }).observe($('#playground'));
 else addEventListener('scroll',scheduleMap,{passive:true});
 addEventListener('resize',scheduleMap,{passive:true});
 document.addEventListener('visibilitychange',scheduleMap);
 media.addEventListener('change',scheduleMap);$('#motion-toggle').addEventListener('click',scheduleMap);
 storyBeats.forEach((el,i)=>{el.addEventListener('pointerenter',event=>{if(finePointer.matches&&event.pointerType!=='touch'){hoverStory=i;scheduleMap()}});el.addEventListener('pointerleave',()=>{hoverStory=null;scheduleMap()})});
 drawWorld(reduced()?3:0);scheduleMap();
}

if($('#living-svg')){
const hero=$('.identity-hero');
const livingNodes=[$('#living-people'),$('#living-context'),$('#living-possibility')];
const livingWires=$$('#living-wires path');
let heroRAF=0,lastTime=null,elapsed=0;
let heroInView=true;
function drawLiving(time){
 const phase=time/1000;
 const gather=.5-.5*Math.cos(phase*Math.PI/4.8);
 const positions=[
  [70+42*gather,76+14*Math.sin(phase*.64)],
  [333-30*gather,44+13*Math.sin(phase*.72+1.5)],
  [327-20*gather,116+10*Math.sin(phase*.69+3.5)]
 ];
 livingNodes.forEach((el,i)=>el.setAttribute('transform',`translate(${positions[i][0].toFixed(2)} ${positions[i][1].toFixed(2)})`));
 livingWires.forEach((el,i)=>{
  const [x,y]=positions[i];
  el.setAttribute('d',`M220 77 Q${(220+x)/2} ${(77+y)/2+(i===0?25:-20)} ${x} ${y}`);
  el.style.opacity=(.42+.4*gather).toFixed(3);
 });
 $('#living-asterisk').setAttribute('transform',`rotate(${(phase*13)%360}) scale(${1+.05*Math.sin(phase*1.3)})`);
 const travel=(phase*.2)%1;
 const a=[220,77], b=positions[0], ctrl=[(220+b[0])/2,(77+b[1])/2+25];
 const px=(1-travel)**2*a[0]+2*(1-travel)*travel*ctrl[0]+travel**2*b[0];
 const py=(1-travel)**2*a[1]+2*(1-travel)*travel*ctrl[1]+travel**2*b[1];
 $('#living-packet').setAttribute('cx',px.toFixed(2));$('#living-packet').setAttribute('cy',py.toFixed(2));
 $('#living-svg').dataset.frame=String(Math.round(time));
}
function canPlayHero(){return !reduced()&&!document.hidden&&!document.querySelector('dialog[open]')&&heroInView;}
function tickHero(now){
 heroRAF=0;
 if(!canPlayHero()){lastTime=null;return;}
 if(lastTime!==null)elapsed+=Math.min(64,now-lastTime);
 lastTime=now;drawLiving(elapsed);
 heroRAF=requestAnimationFrame(tickHero);
}
function updateHeroState(){
 const r=hero.getBoundingClientRect();heroInView=r.bottom>80&&r.top<window.innerHeight;
 const playing=canPlayHero();document.documentElement.dataset.heroPlaying=playing?'on':'off';
 if(playing&&!heroRAF){lastTime=null;heroRAF=requestAnimationFrame(tickHero);}
 else if(!playing&&heroRAF){cancelAnimationFrame(heroRAF);heroRAF=0;lastTime=null;}
}
if('IntersectionObserver' in window){new IntersectionObserver(()=>updateHeroState(),{threshold:0}).observe(hero);}
document.addEventListener('visibilitychange',updateHeroState);
$('#motion-toggle').addEventListener('click',updateHeroState);media.addEventListener('change',updateHeroState);

 drawLiving(0);updateHeroState();
}


/* Progressive gallery: all work stays in the DOM, with no timed rotation. */
(() => {
  const track = document.getElementById('selected-projects');
  const toolbar = document.getElementById('showcase-toolbar');
  const controls = document.getElementById('showcase-controls');
  if (!track || !toolbar || !controls) return;
  const cards = Array.from(track.querySelectorAll(':scope > .gallery-case'));
  if (!cards.length) return;
  const viewButtons = Array.from(toolbar.querySelectorAll('[data-work-view]'));
  const prev = controls.querySelector('.showcase-prev');
  const next = controls.querySelector('.showcase-next');
  const count = document.getElementById('showcase-count');
  const current = document.getElementById('showcase-current');
  const live = document.getElementById('showcase-live');
  const bar = controls.querySelector('.showcase-progress span');
  const hint = document.getElementById('showcase-hint');
  const mobile = window.matchMedia('(max-width: 760px)');
  let mode = 'gallery';
  let index = 0;
  let settleTimer = 0;
  let scrollFrame = 0;
  let lastAnnounced = -1;
  const label = i => cards[i].dataset.label || `Project ${i + 1}`;
  const isReduced = () => document.documentElement.dataset.motion === 'off' || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const inset = () => parseFloat(getComputedStyle(track).paddingLeft) || 0;
  function projectPosition(i) {
    const rect = track.getBoundingClientRect();
    const card = cards[i].getBoundingClientRect();
    const max = Math.max(0, track.scrollWidth - track.clientWidth);
    return Math.max(0, Math.min(max, track.scrollLeft + card.left - rect.left - inset()));
  }
  function nearest() {
    const max = track.scrollWidth - track.clientWidth;
    if (max <= 1 || track.scrollLeft <= 2) return 0;
    if (track.scrollLeft >= max - 3) return cards.length - 1;
    let best = 0, distance = Infinity;
    cards.forEach((card, i) => {
      const d = Math.abs(projectPosition(i) - track.scrollLeft);
      if (d < distance) { distance = d; best = i; }
    });
    return best;
  }
  function update(announce = false) {
    if (mode !== 'carousel') return;
    index = nearest();
    count.textContent = `${String(index + 1).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
    current.textContent = label(index);
    bar.style.width = `${100 / cards.length}%`;
    bar.style.transform = `translateX(${index * 100}%)`;
    prev.setAttribute('aria-disabled', String(index === 0));
    next.setAttribute('aria-disabled', String(index === cards.length - 1));
    cards.forEach((card, i) => card.classList.toggle('is-current-project', i === index));
    if (announce && index !== lastAnnounced) {
      live.textContent = `${label(index)}, project ${index + 1} of ${cards.length}.`;
      lastAnnounced = index;
    }
  }
  function goTo(i, immediate = false) {
    if (mode !== 'carousel') return;
    const safe = Math.max(0, Math.min(cards.length - 1, i));
    track.scrollTo({ left: projectPosition(safe), behavior: immediate || isReduced() ? 'instant' : 'smooth' });
    clearTimeout(settleTimer);
    settleTimer = window.setTimeout(() => update(true), immediate || isReduced() ? 70 : 500);
  }
  function setView(view, user = false) {
    mode = view;
    track.dataset.view = view;
    toolbar.hidden = false;
    controls.hidden = view !== 'carousel';
    viewButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.workView === view)));
    hint.textContent = view === 'gallery' ? `All ${cards.length} projects. One gallery.` : mobile.matches ? 'Swipe to explore. Nothing auto-advances.' : 'Scroll sideways, or use the arrows.';
    track.setAttribute('role', view === 'carousel' ? 'region' : 'list');
    if (view === 'carousel') {
      track.setAttribute('aria-roledescription', 'carousel');
      track.setAttribute('aria-label', 'All projects. Swipe or use the previous and next buttons.');
    } else {
      track.removeAttribute('aria-roledescription');
      track.setAttribute('aria-label', 'All projects');
    }
    cards.forEach((card, i) => {
      card.setAttribute('role', view === 'carousel' ? 'group' : 'listitem');
      if (view === 'carousel') {
        card.setAttribute('aria-roledescription', 'slide');
        card.setAttribute('aria-label', `${i + 1} of ${cards.length}: ${label(i)}`);
      } else {
        card.removeAttribute('aria-roledescription');
        card.removeAttribute('aria-label');
      }
    });
    live.textContent = '';
    lastAnnounced = -1;
    requestAnimationFrame(() => {
      track.scrollTo({ left: 0, behavior: 'instant' });
      index = 0;
      update(false);
      if (typeof scheduleScroll === 'function') scheduleScroll();
    });
  }
  viewButtons.forEach(button => button.addEventListener('click', () => setView(button.dataset.workView, true)));
  prev.addEventListener('click', () => { if (prev.getAttribute('aria-disabled') !== 'true') goTo(index - 1); });
  next.addEventListener('click', () => { if (next.getAttribute('aria-disabled') !== 'true') goTo(index + 1); });
  track.addEventListener('scroll', () => {
    if (mode !== 'carousel') return;
    if (!scrollFrame) scrollFrame = requestAnimationFrame(() => { scrollFrame = 0; update(); });
    clearTimeout(settleTimer);
    settleTimer = window.setTimeout(() => update(true), 160);
  }, { passive: true });
  track.addEventListener('focusin', event => {
    if (mode !== 'carousel') return;
    const card = event.target.closest('.gallery-case');
    if (card && cards.includes(card)) goTo(cards.indexOf(card), true);
  });
  track.addEventListener('keydown', event => {
    if (mode !== 'carousel' || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    const active = event.target.closest('.gallery-case');
    if (!active) return;
    event.preventDefault();
    const from = cards.indexOf(active);
    const target = event.key === 'Home' ? 0 : event.key === 'End' ? cards.length - 1 : Math.max(0, Math.min(cards.length - 1, from + (event.key === 'ArrowRight' ? 1 : -1)));
    cards[target].querySelector('.gallery-primary').focus({ preventScroll: true });
    goTo(target, true);
  });
  // Resizing never switches the reader into a mode that hides other projects.
  mobile.addEventListener('change', () => {
    hint.textContent = mode === 'gallery' ? `All ${cards.length} projects. One gallery.` : mobile.matches ? 'Swipe to explore. Nothing auto-advances.' : 'Scroll sideways, or use the arrows.';
    requestAnimationFrame(() => update());
  });
  if ('ResizeObserver' in window) new ResizeObserver(() => { if (mode === 'carousel') requestAnimationFrame(() => update()); }).observe(track);
  setView('gallery');
})();
