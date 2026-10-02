export function WorkNoRushBeQuick() {
  return (
    <main className="study-main" id="main-content">
      <a className="back-to-work" href="/#work">
        ← Selected work
      </a>
      <div className="study-intro" data-reveal="">
        <p className="study-label">CantoMore / Public browser game</p>
        <p className="study-project-name">No Rush Be Quick</p>
        <h1>
          A little less studying.
          <br />A little more <em>playing.</em>
        </h1>
        <p className="study-deck">
          I designed and built a Jyutping typing game around Hong Kong transit.
          Finding its scope, and listening when the keyboard got in people’s
          way, shaped both the product and how I think about a learning journey.
        </p>
      </div>
      <dl className="study-facts" data-reveal="">
        <div>
          <dt>My responsibility</dt>
          <dd>
            Entire game design and development, learning journey and interaction
            model.
          </dd>
        </div>
        <div>
          <dt>Team contribution</dt>
          <dd>QA, marketing and cultural innovation ideas.</dd>
        </div>
        <div>
          <dt>Initiative period</dt>
          <dd>CantoMore · Nov 2025–present</dd>
        </div>
        <div>
          <dt>Delivered</dt>
          <dd>
            A public game with system, game and beginner Jyutping keyboards.
          </dd>
        </div>
      </dl>
      <aside aria-label="Key takeaway" className="study-takeaway">
        <p className="study-label">What changed the design</p>
        <p>
          Players’ frustration with input became a reason to give them a choice
          of keyboards—and to build a way for beginners to compose sounds
          directly.
        </p>
      </aside>
      <div className="study-quick-links">
        <a
          href="https://norushbequick.cantomore.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Play No Rush Be Quick ↗
        </a>
      </div>
      <div className="study-cover" data-reveal="">
        <div className="artifact-art game-art">
          <div className="art-eyebrow">
            <span>CANTOMORE / WEB GAME</span>
            <span lang="zh-HK">唔使急最緊要快</span>
          </div>
          <div className="game-type">
            No Rush.
            <br />
            <em>Be Quick.</em>
          </div>
          <div aria-hidden="true" className="game-transit">
            <span className="transit-track"></span>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <span className="transit-train"></span>
          </div>
          <div className="typing-caption">
            <span>JYUTPING, IN MOTION</span>
            <span aria-hidden="true" className="typed-word">
              nei5 hou2<span className="typed-caret">▌</span>
            </span>
          </div>
          <span className="art-disclosure">NRBQ · Editorial cover</span>
        </div>
      </div>
      <div className="study-layout">
        <nav aria-label="On this page" className="study-toc">
          <span className="study-label">IN THIS CASE</span>
          <a data-chapter="contribution" href="#contribution">
            My role & the journey
          </a>
          <a data-chapter="scope" href="#scope">
            Finding the MVP
          </a>
          <a data-chapter="feedback" href="#feedback">
            Keyboard feedback
          </a>
          <a data-chapter="keyboard" href="#keyboard">
            A keyboard for beginners
          </a>
          <a data-chapter="next" href="#next">
            What I take forward
          </a>
        </nav>
        <div className="study-body">
          <section className="study-section" id="contribution">
            <p className="study-label">01 / MY ROLE & THE LEARNING JOURNEY</p>
            <h2>I built the game, and thought through the way into it.</h2>
            <p>
              I designed and developed the whole NRBQ game. My work included the
              learning journey, the mental model behind the interactions, and
              the keyboard experience. My teammates contributed QA, marketing
              and cultural innovation ideas.
            </p>
            <p>
              I wanted Jyutping practice to connect with everyday Hong Kong
              life. Transit gave us familiar places and station names to work
              with. The learning experience lets someone listen, try a sound and
              practise, while the challenge mode gives more experienced players
              a reason to work on speed.
            </p>
            <div className="flow-strip">
              <div>
                <span>01</span>
                <strong>Listen</strong>
                <small>A familiar place and its pronunciation</small>
              </div>
              <div>
                <span>02</span>
                <strong>Try</strong>
                <small>Build or type the sound</small>
              </div>
              <div>
                <span>03</span>
                <strong>Practise</strong>
                <small>Move through station names at your pace</small>
              </div>
            </div>
            <p>
              In Learn mode, the Jyutping map highlights the sound parts to try
              and lights up completed combinations. Station progress gives the
              learner another small milestone. I wanted the map to guide the
              next attempt and make learning feel like something they could see
              growing.
            </p>
            <figure className="study-figure">
              <img
                src="/assets/nrbq-learn-game-keyboard-light.png"
                alt="Light-mode Learn screen at Shek Mun, with the game keyboard below a Jyutping map. The completed sek syllable lights up s, e and k, and progress shows one of forty combinations unlocked."
                width="639"
                height="783"
                loading="lazy"
              />
              <figcaption>
                Learn mode with the game keyboard. After completing sek, its
                sound parts light up on the map: guidance for the next attempt,
                and a visible record of a small achievement.
              </figcaption>
            </figure>
            <p>
              Challenge mode gives that practice a different rhythm. Typing
              moves the train along the route, while station prompts, speed and
              the frustration meter bring the journey into the same screen.
              The focus shifts from exploring sounds to keeping the ride moving.
            </p>
            <figure className="study-figure">
              <img
                src="/assets/nrbq-challenge-dark.png"
                alt="Dark-mode Challenge gameplay on the East Rail route, with a train travelling from Lo Wu towards Sheung Shui, a frustration meter, station prompt, typing speed and on-screen game keyboard."
                width="639"
                height="783"
                loading="lazy"
              />
              <figcaption>
                Challenge mode with the game keyboard. The route, station
                prompt and live feedback turn typing practice into a moving
                journey. Shown during a demonstration play session.
              </figcaption>
            </figure>
          </section>
          <section className="study-section" id="scope">
            <p className="study-label">02 / FINDING THE MVP</p>
            <h2>One part of Hong Kong life to begin with.</h2>
            <p>
              I struggled to frame the scope at first. There were plenty of
              cultural directions to explore, including a Hong Kong food map. I
              chose to focus the MVP on transit, so the team could build one
              coherent experience before expanding into other parts of city
              life.
            </p>
            <div className="decision-block">
              <p className="study-label">THE TRADE-OFF</p>
              <h3>Keep the wider ideas. Give the first release a clear job.</h3>
              <p>
                The first product centred on station names and Jyutping
                practice. I kept the food map as an idea for a later expansion.
                That decision gave me a clearer basis for the learning journey,
                the game mechanics and the input design.
              </p>
            </div>
          </section>
          <section className="study-section" id="feedback">
            <p className="study-label">
              03 / FEEDBACK THAT CHANGED THE KEYBOARD
            </p>
            <h2>The input needed to keep up with the player.</h2>
            <p>
              This was my first time designing a keyboard around fast user
              input. I received repeated negative comments about the game
              keyboard’s slow feedback. That friction mattered in a game where
              typing is the main interaction.
            </p>
            <p>
              I added keyboard choices, including the device’s system keyboard
              alongside the on-screen game keyboard. Players could use an input
              method that suited them, while I continued to work on the
              experience for people learning Jyutping.
            </p>
          </section>
          <section className="study-section" id="keyboard">
            <p className="study-label">04 / A KEYBOARD FOR BEGINNERS</p>
            <h2>Let the structure of a sound become the interface.</h2>
            <p>
              Other feedback pointed to a different barrier: Jyutping still felt
              difficult to learn from reference tables. A faster input option
              addressed only part of that problem. Beginners needed a way to
              understand what they were composing.
            </p>
            <p>
              I designed a Jyutping keyboard around onset, nucleus and coda—the
              sound parts shown as 聲、韻、尾. A learner can assemble a syllable
              with up to three sound selections, then submit it. The nucleus is
              required; onset and coda can remain empty when the sound calls for
              it.
            </p>
            <figure className="study-figure">
              <img
                src="/assets/nrbq-jyutping-keyboard-light.png"
                alt="Light-mode Jyutping keyboard grouped into onset, nucleus and coda, with d, u and ng selected to compose dung before submitting."
                width="639"
                height="280"
                loading="lazy"
              />
              <figcaption>
                A closer look at the beginner keyboard: d + u + ng forms dung
                in three sound selections, then SPACE submits it. Available in
                Learn mode, including its survival challenge.
              </figcaption>
            </figure>
            <div className="study-insight">
              <span aria-hidden="true" className="insight-mark">
                ↳
              </span>
              <p>
                The keyboard became part of the learning journey: its layout
                makes the sound structure available at the moment someone needs
                to use it.
              </p>
            </div>
          </section>
          <section className="study-section" id="next">
            <p className="study-label">05 / WHAT I TAKE FORWARD</p>
            <h2>Feedback can change the way into a product.</h2>
            <p>
              I began by thinking about speed, then found that input also shaped
              whether a beginner could start. The released product now offers
              keyboard choice and a sound-based route into Jyutping.
            </p>
            <p>
              My next evaluation would observe a newcomer’s first successful
              syllable, where they need help and how keyboard choice affects
              practice. That would help me decide what to simplify next and
              assess learning over time.
            </p>
            <div className="artifact-actions">
              <a
                className="artifact-link"
                href="https://norushbequick.cantomore.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Try the game <span aria-hidden="true">↗</span>
              </a>
            </div>
          </section>
        </div>
      </div>
      <footer className="study-end">
        <div>
          <span className="study-label">MORE WORK</span>
          <a className="next-case" href="/work/dse-study-planner/">
            DSE Study Planner · Poe <span aria-hidden="true">↗</span>
          </a>
        </div>
        <a className="secondary-link" href="mailto:miffyleung2020@gmail.com">
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </footer>
      <div className="case-end">
        <a href="/#work">← Explore all nine projects</a>
        <a href="/resume/">View résumé ↗</a>
      </div>
    </main>
  );
}
