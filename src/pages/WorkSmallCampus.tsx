export function WorkSmallCampus() {
  return (
    <main className="study-main confidential-main" id="main-content">
      <a className="back-to-work" href="/#work">
        {"← Selected work"}
      </a>
      <div className="study-intro" data-reveal="">
        <p className="study-label">
          {"Hong Kong Education City / CONFIDENTIAL"}
        </p>
        <p className="study-project-name">{"Small Campus"}</p>
        <h1>
          {"Once a childhood player."}
          <br />
          {" Later, a "}
          <em>{"design contributor."}</em>
        </h1>
        <p className="study-deck">
          {
            "I enjoyed Small Campus when I was in primary school. Returning to it during my Product Innovation internship gave that experience a different perspective: contributing to its redesign."
          }
        </p>
      </div>
      <dl className="study-facts private-facts" data-reveal="">
        <div>
          <dt>{"Role"}</dt>
          <dd>{"Product Innovation Intern"}</dd>
        </div>
        <div>
          <dt>{"Context"}</dt>
          <dd>{"Apr–Aug 2026"}</dd>
        </div>
        <div>
          <dt>{"Access"}</dt>
          <dd>{"Public overview only"}</dd>
        </div>
      </dl>
      <div className="confidential-statement">
        <span aria-hidden="true" className="privacy-symbol">
          {"↗"}
        </span>
        <div>
          <h2>{"This project is confidential."}</h2>
          <p>
            {
              "Reach out to me directly to discuss my role and what I’m able to share."
            }
          </p>
          <a
            className="artifact-link"
            href="https://www.linkedin.com/in/miffy-leung/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {"Contact Miffy on LinkedIn "}
            <span aria-hidden="true">{"↗"}</span>
          </a>
        </div>
      </div>
      <section className="private-learning">
        <p className="study-label">{"WHAT I TAKE FORWARD"}</p>
        <p>
          {
            "The experience deepened how I think about stakeholder needs, organisational constraints and product repositioning. The public overview focuses on my professional learning."
          }
        </p>
      </section>
      <footer className="study-end">
        <a className="secondary-link" href="/#work">
          {"← Back to all work"}
        </a>
        <span className="study-label">
          {"Internal project materials remain private."}
        </span>
      </footer>
      <div className="case-end">
        <a href="/#work">{"← Explore all nine projects"}</a>
        <a href="/resume/">{"View résumé ↗"}</a>
      </div>
    </main>
  );
}
