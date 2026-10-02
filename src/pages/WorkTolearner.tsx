export function WorkTolearner() {
  return (
    <main className="study-main" id="main-content">
      <a className="back-to-work" href="/#work">
        {"← Selected work"}
      </a>
      <div className="study-intro" data-reveal="">
        <p className="study-label">
          {"Social enterprise / Student community "}
          <span className="study-separator">{"/"}</span>
          {" Community + supporting tools"}
        </p>
        <p className="study-project-name">{"ToLearner"}</p>
        <h1>
          {"A community first."}
          <br />
          <em>{"Tools in service of it."}</em>
        </h1>
        <p className="study-deck">
          {
            "A student-support community I co-founded from lived experience, with a web platform, a Poe time-planning chatbot and a reusable Notion DSE planner."
          }
        </p>
      </div>
      <dl className="study-facts" data-reveal="">
        <div>
          <dt>{"My contribution"}</dt>
          <dd>
            {
              "Co-founded the community; built the platform, chatbot and template."
            }
          </dd>
        </div>
        <div>
          <dt>{"Initiative period"}</dt>
          <dd>{"Dec 2023–Apr 2026"}</dd>
        </div>
        <div>
          <dt>{"Delivered"}</dt>
          <dd>
            {
              "Community support through a web platform, a Poe chatbot and a Notion planner."
            }
          </dd>
        </div>
        <div>
          <dt>{"Reach & scope"}</dt>
          <dd>{"1,000+ students served across the overall platform."}</dd>
        </div>
      </dl>
      <aside aria-label="Key takeaway" className="study-takeaway">
        <p className="study-label">{"What I learned"}</p>
        <p>
          {
            "A broad community mission still needs focused products. Today, I would test one planning need and a sustainable delivery model before expanding."
          }
        </p>
      </aside>
      <div className="study-quick-links">
        <a
          href="https://poe.com/DseStudyPlanner"
          rel="noopener noreferrer"
          target="_blank"
        >
          {"Open the Poe chatbot ↗"}
        </a>
        <a
          href="https://chalk-bush-65c.notion.site/ToLearner-DSE-Planner-Giveaways-103361f4743c807f81bdf652ca56c56d"
          rel="noopener noreferrer"
          target="_blank"
        >
          {"Explore the Notion planner ↗"}
        </a>
      </div>
      <div className="study-cover" data-reveal="">
        <div className="artifact-art planner-art">
          <div className="art-eyebrow">
            <span>{"TOLEARNER / STUDENT COMMUNITY"}</span>
            <span>{"TOOLS FOR SUPPORT"}</span>
          </div>
          <div className="planner-lead">
            {"A community."}
            <br />
            <em>{"Tools for support."}</em>
          </div>
          <div aria-hidden="true" className="planner-pair">
            <div className="artifact-paper paper-poe">
              <span className="paper-platform">{"POE"}</span>
              <strong>
                {"DSE Study"}
                <br />
                {" Planner"}
              </strong>
              <span className="bubble-lines">
                <i></i>
                <i></i>
                <i></i>
              </span>
              <span className="paper-foot">{"Time-planning chatbot"}</span>
            </div>
            <div className="artifact-paper paper-notion">
              <span className="paper-platform">{"NOTION"}</span>
              <strong>
                {"DSE"}
                <br />
                {" Planner"}
              </strong>
              <span className="mini-week">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </span>
              <span className="paper-foot">{"Reusable template"}</span>
            </div>
          </div>
          <span className="art-disclosure">
            {"Planning tools · Cover illustration"}
          </span>
        </div>
      </div>
      <div className="study-layout">
        <nav aria-label="On this page" className="study-toc">
          <span className="study-label">{"IN THIS CASE"}</span>
          <a data-chapter="artifacts" href="#artifacts">
            {"The artifacts"}
          </a>
          <a data-chapter="context" href="#context">
            {"Why I started"}
          </a>
          <a data-chapter="decisions" href="#decisions">
            {"The design problem"}
          </a>
          <a data-chapter="evidence" href="#evidence">
            {"Reach & next questions"}
          </a>
          <a data-chapter="reflection" href="#reflection">
            {"What changed"}
          </a>
        </nav>
        <div className="study-body">
          <section className="study-section" id="artifacts">
            <p className="study-label">{"01 / WHAT I MADE"}</p>
            <h2>
              {"A chatbot. A planner."}
              <br />
              <em>{"In service of the community."}</em>
            </h2>
            <div className="artifact-pair-detail">
              <div>
                <span className="study-label">{"POE / CONVERSATION"}</span>
                <h3>{"DSE Study Planner"}</h3>
                <a
                  className="tool-project-inline"
                  href="/work/dse-study-planner/"
                >
                  {"View the chatbot project →"}
                </a>
                <p>{"A chatbot I created on Poe to support time planning."}</p>
                <a
                  className="artifact-link"
                  href="https://poe.com/DseStudyPlanner"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {"Open the chatbot "}
                  <span aria-hidden="true">{"↗"}</span>
                </a>
              </div>
              <div>
                <span className="study-label">{"NOTION / PLANNER"}</span>
                <h3>{"ToLearner DSE Planner"}</h3>
                <a
                  className="tool-project-inline"
                  href="/work/notion-dse-planner/"
                >
                  {"View the template project →"}
                </a>
                <p>
                  {
                    "A reusable planning template shared as a giveaway. It is a separate artifact within the same initiative."
                  }
                </p>
                <a
                  className="artifact-link"
                  href="https://chalk-bush-65c.notion.site/ToLearner-DSE-Planner-Giveaways-103361f4743c807f81bdf652ca56c56d"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {"Open the Notion planner "}
                  <span aria-hidden="true">{"↗"}</span>
                </a>
              </div>
            </div>
            <p className="source-note">
              {"Two standalone planning tools within ToLearner."}
            </p>
          </section>
          <section className="study-section" id="context">
            <p className="study-label">{"02 / WHY I STARTED"}</p>
            <h2>{"I knew what fewer resources could feel like."}</h2>
            <p>
              {
                "ToLearner was my first social enterprise project. Coming from an under-resourced background, I wanted students with similar experiences to have better support. I co-founded the initiative in my first year at university."
              }
            </p>
            <p>
              {
                "That personal reason made the work matter to me. Ongoing communication and feedback helped me understand other students’ needs while building and maintaining the platform."
              }
            </p>
            <p>
              {
                "The community was the starting point. I managed Cantonese and English content, social media engagement and student feedback; the website, chatbot and planner supported that wider mission."
              }
            </p>
            <div className="study-insight">
              <span aria-hidden="true" className="insight-mark">
                {"↳"}
              </span>
              <p>
                {
                  "Lived experience gives me a reason to care. Listening helps me ask better questions."
                }
              </p>
            </div>
          </section>
          <section className="study-section" id="decisions">
            <p className="study-label">{"03 / THE DESIGN PROBLEM"}</p>
            <h2>{"What deserves to be a product?"}</h2>
            <p>
              {
                "My early ambition covered the wider personal development of secondary-school students. The chatbot and planner gave that broad ambition two specific forms: a conversation and a reusable planning structure."
              }
            </p>
            <div className="decision-block">
              <p className="study-label">{"SCOPE"}</p>
              <h3>{"Choose a focused job for each product."}</h3>
              <p>
                {
                  "Today, I would start by choosing a specific planning moment and a clear user need, before deciding what to add."
                }
              </p>
            </div>
            <div className="decision-block">
              <p className="study-label">{"INTERACTION"}</p>
              <h3>{"A useful answer has to fit the person receiving it."}</h3>
              <p>
                {
                  "In my weekly goal-setting chatbot work, I refined tone, pacing and interaction through prompt engineering and user feedback. That experience taught me to treat conversation as part of the design."
                }
              </p>
            </div>
            <div className="decision-block">
              <p className="study-label">{"SUSTAINABILITY"}</p>
              <h3>{"Support needs a way to sustain itself."}</h3>
              <p>
                {
                  "Balancing the costs of helping people raised questions about a sustainable product and delivery model. I now consider scalability while choosing which problems to address."
                }
              </p>
            </div>
          </section>
          <section className="study-section" id="evidence">
            <p className="study-label">{"04 / REACH & NEXT QUESTIONS"}</p>
            <h2>
              {"People reached."}
              <br />
              {" Questions to keep exploring."}
            </h2>
            <div className="evidence-stat">
              <strong>{"1,000+"}</strong>
              <p>
                {"Senior-secondary students served by the "}
                <b>{"overall ToLearner platform"}</b>
                {
                  ". This figure describes the overall platform; each planning tool has its own audience and usage."
                }
              </p>
            </div>
            <p>
              {
                "The initiative was a fund awardee of the CUHK I·CARE Social Enterprise Startup Scheme 2023–24. Evaluating each planning tool remains a separate task."
              }
            </p>
            <p className="source-note">
              {
                "Planning effectiveness, retention and break-even remain separate evaluation questions."
              }
            </p>
            <div className="artifact-actions">
              <a
                className="secondary-link"
                href="https://www.instagram.com/tolearner_hk/"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"Visit @tolearner_hk "}
                <span aria-hidden="true">{"↗"}</span>
              </a>
              <a
                className="artifact-link"
                href="https://www.instagram.com/tolearner_hk/"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"Visit the community "}
                <span aria-hidden="true">{"↗"}</span>
              </a>
            </div>
          </section>
          <section className="study-section" id="reflection">
            <p className="study-label">{"05 / WHAT I SEE DIFFERENTLY NOW"}</p>
            <h2>
              {"Care deeply."}
              <br />
              <em>{"Choose deliberately."}</em>
            </h2>
            <p>
              {
                "I used to think a good product should address all the pain points of its target audience. I now see sharper problem definition as part of the responsibility of building: deciding which need to serve well, and how the support can continue."
              }
            </p>
            <div className="study-insight">
              <span aria-hidden="true" className="insight-mark">
                {"↳"}
              </span>
              <p>
                {
                  "If I started again, I would test one planning problem and its delivery model together—before expanding the scope."
                }
              </p>
            </div>
          </section>
        </div>
      </div>
      <footer className="study-end">
        <div>
          <span className="study-label">{"MORE WORK"}</span>
          <a className="next-case" href="/work/color-identity/">
            {"Color Identity "}
            <span aria-hidden="true">{"↗"}</span>
          </a>
        </div>
        <a
          className="secondary-link"
          href="https://www.linkedin.com/in/miffy-leung/"
          rel="noopener noreferrer"
          target="_blank"
        >
          {"Let’s talk "}
          <span aria-hidden="true">{"↗"}</span>
        </a>
      </footer>
      <div className="case-end">
        <a href="/#work">{"← Explore all nine projects"}</a>
        <a href="/resume/">{"View résumé ↗"}</a>
      </div>
    </main>
  );
}
