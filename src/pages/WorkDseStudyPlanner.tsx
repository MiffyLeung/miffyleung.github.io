export function WorkDseStudyPlanner() {
  return (
    <main className="study-main tool-study" id="main-content">
      <a className="back-to-work" href="/#work">
        {"← All work"}
      </a>
      <div className="study-intro" data-reveal="">
        <p className="study-label">
          {"TOLEARNER / STUDENT COMMUNITY "}
          <span className="study-separator">{"/"}</span>
          {" PLANNING CHATBOT"}
        </p>
        <p className="study-project-name">{"DSE Study Planner · Poe"}</p>
        <h1>
          {"Study planning,"}
          <br />
          <em>{"as a conversation."}</em>
        </h1>
        <p className="study-deck">
          {
            "A time-planning chatbot I created on Poe, within ToLearner—the student-support community I co-founded."
          }
        </p>
      </div>
      <dl className="study-facts" data-reveal="">
        <div>
          <dt>{"My contribution"}</dt>
          <dd>{"Created the Poe time-planning chatbot."}</dd>
        </div>
        <div>
          <dt>{"Medium"}</dt>
          <dd>{"Conversational AI · Poe"}</dd>
        </div>
        <div>
          <dt>{"Context"}</dt>
          <dd>{"ToLearner student-support community"}</dd>
        </div>
        <div>
          <dt>{"Project scope"}</dt>
          <dd>{"One standalone chatbot; separate from the Notion planner."}</dd>
        </div>
      </dl>
      <aside aria-label="Project takeaway" className="study-takeaway">
        <p className="study-label">{"What I take forward"}</p>
        <p>
          {
            "A community can support many needs. Each tool still needs a clear job to do."
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
          href="https://www.instagram.com/tolearner_hk/"
          rel="noopener noreferrer"
          target="_blank"
        >
          {"ToLearner community ↗"}
        </a>
      </div>
      <div className="study-cover" data-reveal="">
        <div className="artifact-art single-tool-art poe-tool-art">
          <div className="art-eyebrow">
            <span>{"TOLEARNER / POE CHATBOT"}</span>
            <span>{"CONVERSATION DESIGN"}</span>
          </div>
          <div className="tool-cover-title">
            {"Plan it."}
            <br />
            <em>{"Talk it through."}</em>
          </div>
          <div aria-hidden="true" className="chat-composition">
            <div className="tool-chat tool-chat-question">
              <span className="chat-avatar">{"?"}</span>
              <span className="chat-strokes">
                <i></i>
                <i></i>
              </span>
            </div>
            <div className="tool-chat tool-chat-response">
              <span className="chat-answer-mark">{"↳"}</span>
              <span className="chat-strokes">
                <i></i>
                <i></i>
                <i></i>
              </span>
              <span className="chat-dots">
                <i></i>
                <i></i>
                <i></i>
              </span>
            </div>
          </div>
          <span className="art-disclosure">
            {"Conversation illustration · not a bot transcript"}
          </span>
        </div>
      </div>
      <div className="study-layout">
        <nav aria-label="On this page" className="study-toc">
          <span className="study-label">{"IN THIS PROJECT"}</span>
          <a data-chapter="artifact" href="#artifact">
            {"What I made"}
          </a>
          <a data-chapter="context" href="#context">
            {"Community context"}
          </a>
          <a data-chapter="reflection" href="#reflection">
            {"What I take forward"}
          </a>
          <a data-chapter="scope" href="#scope">
            {"Scope & next questions"}
          </a>
        </nav>
        <div className="study-body">
          <section className="study-section" id="artifact">
            <p className="study-label">{"01 / THE ARTIFACT"}</p>
            <h2>
              {"Planning support,"}
              <br />
              <em>{"in conversation."}</em>
            </h2>
            <p>
              {
                "DSE Study Planner is a chatbot I made on Poe to support time planning. It gives ToLearner’s wider student-support mission one specific form: a conversational tool."
              }
            </p>
            <p>
              {
                "The artifact here is the bot itself. The Notion planner is a different project, with a different medium and its own place in the gallery."
              }
            </p>
            <a
              className="artifact-link"
              href="https://poe.com/DseStudyPlanner"
              rel="noopener noreferrer"
              target="_blank"
            >
              {"Explore the Poe chatbot "}
              <span aria-hidden="true">{"↗"}</span>
            </a>
          </section>
          <section className="study-section" id="context">
            <p className="study-label">{"02 / COMMUNITY CONTEXT"}</p>
            <h2>
              {"A tool within a community."}
              <br />
              {"Not the whole community."}
            </h2>
            <p>
              {
                "I co-founded ToLearner in my first year at university, drawing on my own experience of an under-resourced background. I wanted students with similar experiences to have better support."
              }
            </p>
            <p>
              {
                "The community included bilingual content, student communication and digital tools. This project focuses on one of those tools—not every part of that broader work."
              }
            </p>
            <a className="secondary-link" href="/work/tolearner/">
              {"Read the ToLearner community story "}
              <span aria-hidden="true">{"→"}</span>
            </a>
          </section>
          <section className="study-section" id="reflection">
            <p className="study-label">{"03 / WHAT I TAKE FORWARD"}</p>
            <h2>
              {"One tool."}
              <br />
              <em>{"A clearer job to do."}</em>
            </h2>
            <p>
              {
                "My early ambition for ToLearner covered many needs in students’ personal development. I now see a sharper problem definition as a way to make each tool more useful, rather than trying to put the whole mission into one product."
              }
            </p>
            <div className="study-insight">
              <span aria-hidden="true" className="insight-mark">
                {"↳"}
              </span>
              <p>
                {
                  "For a planning conversation, I would first ask what the student needs to decide next—before adding more advice."
                }
              </p>
            </div>
            <p className="source-note">
              {
                "This is my current reflection and evaluation direction, not a claim that this specific change was already tested."
              }
            </p>
          </section>
          <section className="study-section" id="scope">
            <p className="study-label">{"04 / SCOPE & NEXT QUESTIONS"}</p>
            <h2>
              {"Keep the tool’s evidence"}
              <br />
              {"separate from the initiative’s."}
            </h2>
            <p>
              {
                "The linked artifact is the Poe time-planning chatbot I created. ToLearner’s overall platform reach is not used as a usage figure for this bot."
              }
            </p>
            <div className="decision-block">
              <p className="study-label">{"NEXT QUESTION"}</p>
              <h3>
                {"Does the conversation help someone choose a next step?"}
              </h3>
              <p>
                {
                  "I would examine where a planning conversation becomes useful, where it becomes too much, and what students actually choose to do afterwards."
                }
              </p>
            </div>
            <div className="tool-related">
              <span className="study-label">
                {"A DIFFERENT TOLEARNER PROJECT"}
              </span>
              <a href="/work/notion-dse-planner/">
                <strong>{"Notion DSE Planner"}</strong>
                <span>
                  {"A reusable template, with its own project story. →"}
                </span>
              </a>
            </div>
          </section>
        </div>
      </div>
      <footer className="study-end">
        <div>
          <span className="study-label">{"MORE WORK"}</span>
          <a className="next-case" href="/work/notion-dse-planner/">
            {"Notion DSE Planner "}
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
