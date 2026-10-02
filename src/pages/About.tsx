import { WorkingModel } from "../components/WorkingModel";

export function About() {
  return (
    <main id="main-content">
      <div className="wrap route-breadcrumb">
        <a href="/">{"← Portfolio"}</a>
        <span>{"My story"}</span>
      </div>
      <section
        aria-labelledby="about-heading"
        className="wrap about"
        id="about"
      >
        <div className="about-intro">
          <div>
            <span className="mono muted">
              {"The person behind the questions / 2023 → now"}
            </span>
            <h1 id="about-heading">
              {"My starting point."}
              <br />
              <em>{"What I carry forward."}</em>
            </h1>
          </div>
          <p>
            {
              "I’m studying Learning Design and Technology at CUHK, with a minor in Artificial Intelligence & Computer Science. Education is where I started understanding people and systems."
            }
            <br />
            <br />
            {
              " I want to carry that way of seeing into unfamiliar industries: complex services, established products and experiences that connect communities."
            }
          </p>
        </div>
        <div className="journey-layout" id="working-model">
          <aside className="journey-atlas">
            <div className="atlas-header mono">
              <span>{"How the picture grew"}</span>
              <span id="atlas-count">{"01 / 05"}</span>
            </div>
            <WorkingModel />
            <p className="atlas-current" id="atlas-current">
              {"ToLearner"}
            </p>
            <p className="atlas-footnote">
              {"More context. A model I’m willing to redraw."}
            </p>
          </aside>
          <div className="journey-list">
            <article
              aria-labelledby="entry-title-0"
              className="journey-entry is-current"
              data-journey-step="0"
              id="journey-entry-0"
            >
              <div className="entry-meta">
                <span className="mono">{"01 / Dec 2023 – Apr 2026"}</span>
              </div>
              <h3 id="entry-title-0">{"ToLearner"}</h3>
              <p className="entry-role">
                {"Student-support community · Co-founder"}
              </p>
              <div className="thought-label">{"What I used to think"}</div>
              <p className="thought-old">
                {"A good product should solve "}
                <del>{"every pain point."}</del>
              </p>
              <p className="thought-new">
                {"A better starting point is a sharper problem."}
              </p>
              <p className="thought-note">
                {
                  "I co-founded ToLearner as a student-support community because I recognised the experience of students with fewer resources. Building its platform and planning tools made me see why a broad community mission still needs focused products and a sustainable delivery model."
                }
              </p>
              <p className="journey-caption">
                {"What I take forward: care deeply; choose deliberately."}
              </p>
              <a className="journey-proof" href="/work/tolearner/">
                {"The ToLearner community story "}
                <span aria-hidden="true">{"↗"}</span>
              </a>
            </article>
            <article
              aria-labelledby="entry-title-1"
              className="journey-entry"
              data-journey-step="1"
              id="journey-entry-1"
            >
              <div className="entry-meta">
                <span className="mono">{"02 / Jan – May 2025"}</span>
              </div>
              <h3 id="entry-title-1">{"Color Identity"}</h3>
              <p className="entry-role">
                {"Course project · Vision & language AI"}
              </p>
              <div className="thought-label">{"The question I explored"}</div>
              <p className="thought-old">
                {"How can AI help people express themselves?"}
              </p>
              <p className="thought-new">
                {"Offer possibilities. Let the person decide."}
              </p>
              <p className="thought-note">
                {
                  "Color Identity explored AI-assisted personal-colour analysis. Looking back at its recommendations, I now ask more explicitly what should remain for the person to interpret, reject or change."
                }
              </p>
              <p className="journey-caption">
                {"Keep the person in charge of the interpretation."}
              </p>
              <a className="journey-proof" href="/work/color-identity/">
                {"Full project story "}
                <span aria-hidden="true">{"↗"}</span>
              </a>
            </article>
            <article
              aria-labelledby="entry-title-2"
              className="journey-entry"
              data-journey-step="2"
              id="journey-entry-2"
            >
              <div className="entry-meta">
                <span className="mono">
                  {"03 / Jan – Jul 2025 / Feb – May 2025"}
                </span>
              </div>
              <h3 id="entry-title-2">{"Inno / ProConnect"}</h3>
              <p className="entry-role">
                {"Business & service model exploration"}
              </p>
              <div className="thought-label">
                {"The next layer of the problem"}
              </div>
              <p className="thought-old">
                {"An interesting experience is only part of the idea."}
              </p>
              <p className="thought-new">
                {"How does the service sustain itself?"}
              </p>
              <p className="thought-note">
                {
                  "Working on career exploration and access to work exposure pushed me to consider business models, service delivery and scalability alongside the interface. Judge and reviewer feedback helped me refine the concepts and scope."
                }
              </p>
              <p className="journey-caption">
                {"Service concepts, prototypes and feedback-driven revisions."}
              </p>
              <a className="journey-proof" href="/work/business/">
                {"Explore the two concepts "}
                <span aria-hidden="true">{"↗"}</span>
              </a>
            </article>
            <article
              aria-labelledby="entry-title-3"
              className="journey-entry"
              data-journey-step="3"
              id="journey-entry-3"
            >
              <div className="entry-meta">
                <span className="mono">{"04 / Nov 2025 – Present"}</span>
              </div>
              <h3 id="entry-title-3">{"CantoMore"}</h3>
              <p className="entry-role">
                {"Co-founder & Tech Lead · Curriculum & product planning"}
              </p>
              <div className="thought-label">{"The starting frame"}</div>
              <p className="thought-old">
                {"A Cantonese-learning initiative."}
              </p>
              <p className="thought-new">
                {"A way into culture and participation."}
              </p>
              <p className="thought-note">
                {
                  "CantoMore grew from language learning toward cultural connection and participation in Hong Kong. I am now its Co-founder & Tech Lead. I designed and developed the entire NRBQ game and its learning journey, while teammates contributed QA, marketing and cultural innovation ideas. I also lead curriculum design and contribute to wider product planning."
                }
              </p>
              <p className="journey-caption">
                {
                  "For NRBQ, I focused the MVP on transit and redesigned input after keyboard feedback."
                }
              </p>
              <a className="journey-proof" href="/work/cantomore/">
                {"Full project story "}
                <span aria-hidden="true">{"↗"}</span>
              </a>
            </article>
            <article
              aria-labelledby="entry-title-4"
              className="journey-entry"
              data-journey-step="4"
              id="journey-entry-4"
            >
              <div className="entry-meta">
                <span className="mono">{"05 / Apr – Aug 2026"}</span>
              </div>
              <h3 id="entry-title-4">{"EdCity"}</h3>
              <p className="entry-role">
                {"Hong Kong Education City · Product Innovation Intern"}
              </p>
              <div className="thought-label">
                {"What professional work added"}
              </div>
              <p className="thought-old">
                {"Start with real stakeholder needs."}
              </p>
              <p className="thought-new">
                {"Understand the reality around those needs, too."}
              </p>
              <p className="thought-note">
                {
                  "EdCity deepened my attention to real stakeholder needs. Working in an established organisation added stakeholder conflict, organisational constraints and product repositioning to how I evaluate an idea."
                }
              </p>
              <p className="journey-caption">
                {
                  "Product innovation experience in an established organisation."
                }
              </p>
              <p className="confidential-note">
                <span aria-hidden="true">{"↳"}</span>
                {" Professional learning only. Project details stay private."}
              </p>
            </article>
          </div>
        </div>
        <div className="supporting-work">
          <div>
            <span className="mono">{"How I work with a team"}</span>
            <strong>{"Connect the experience to its delivery."}</strong>
            <p>
              {
                "In ProConnect, I coordinated a cross-disciplinary team to map journeys, develop business and service models, and turn reviewer feedback into revised product documentation."
              }
            </p>
          </div>
          <div>
            <span className="mono">{"A question I’m keeping open"}</span>
            <strong>{"When is it useful to be an outsider?"}</strong>
            <p>
              {
                "A fresh perspective can reveal assumptions. It can also miss context. I want to keep learning when to question the model — and when to learn more from the people already inside it."
              }
            </p>
          </div>
        </div>
        <div className="next-context">
          <div>
            <p className="mono muted">{"The next context"}</p>
            <h3>
              {"Same curiosity."}
              <br />
              <em>{"New kinds of complexity."}</em>
            </h3>
          </div>
          <div>
            <p>
              {
                "I’m exploring early-career innovation and experience design roles, with a longer-term interest in product strategy. I’m drawn to complex services, mature digital products, and cultural or community experiences."
              }
            </p>
            <p>
              {
                "I bring experience building planning tools, prototyping AI interactions and shaping community services. In a new domain, I start by listening to its users and the people who know it best."
              }
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
