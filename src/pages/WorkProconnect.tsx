export function WorkProconnect() {
  return (
    <main className="study-main" id="main-content">
      <a className="back-to-work" href="/#work">
        {"← All work"}
      </a>
      <div className="study-intro" data-reveal="">
        <p className="study-label">{"Impact Innovation Lab / Cohort 7"}</p>
        <p className="study-project-name">{"ProConnect"}</p>
        <h1>
          {"More access."}
          <br />
          <em>{"More possibilities."}</em>
        </h1>
        <p className="study-deck">
          {
            "A work-exposure support concept for under-networked students, explored through user journeys, business and service models, and a demonstrable interface."
          }
        </p>
      </div>
      <dl className="study-facts" data-reveal="">
        <div>
          <dt>{"My contribution"}</dt>
          <dd>
            {
              "Cross-disciplinary team coordination, service modelling and interface prototyping"
            }
          </dd>
        </div>
        <div>
          <dt>{"When"}</dt>
          <dd>{"Feb–May 2025"}</dd>
        </div>
        <div>
          <dt>{"Stage"}</dt>
          <dd>{"Service model and demonstrable interface"}</dd>
        </div>
        <div>
          <dt>{"Scope"}</dt>
          <dd>
            {"Concept-stage service modelling and interface prototyping."}
          </dd>
        </div>
      </dl>
      <aside aria-label="What I take forward" className="study-takeaway">
        <p className="study-label">{"What I take forward"}</p>
        <p>
          {
            "People, coordination and delivery shape whether a service can work. I connect these conditions with the interface."
          }
        </p>
      </aside>
      <div className="study-layout">
        <nav aria-label="On this page" className="study-toc">
          <span className="study-label">{"IN THIS PROJECT"}</span>
          <a data-chapter="context" href="#context">
            {"Context"}
          </a>
          <a data-chapter="contribution" href="#contribution">
            {"My Contribution"}
          </a>
          <a data-chapter="revision" href="#revision">
            {"Feedback & Revision"}
          </a>
        </nav>
        <div className="study-body">
          <section className="study-section" id="context">
            <p className="study-label">{"01 / CONTEXT"}</p>
            <h2>{"Work exposure beyond existing networks."}</h2>
            <p>
              {
                "ProConnect explored work-exposure support for under-networked students within Impact Innovation Lab Cohort 7."
              }
            </p>
          </section>
          <section className="study-section" id="contribution">
            <p className="study-label">{"02 / MY CONTRIBUTION"}</p>
            <h2>{"Connect the journey to the service."}</h2>
            <p>
              {
                "I coordinated a cross-disciplinary team to map user journeys and develop business and service models. I also built a demonstrable interface using AI-assisted development tools, including Cursor and Devin."
              }
            </p>
          </section>
          <section className="study-section" id="revision">
            <p className="study-label">{"03 / FEEDBACK & REVISION"}</p>
            <h2>{"Present, listen and revise."}</h2>
            <p>
              {
                "I presented the service model and incorporated reviewer feedback into revised product documentation. This work expanded my understanding of service delivery, business models and scalability."
              }
            </p>
          </section>
        </div>
      </div>
      <footer className="study-end">
        <a className="secondary-link" href="/#work">
          {"← Back to all work"}
        </a>
        <a className="next-case" href="/work/tolearner/">
          {"ToLearner "}
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
