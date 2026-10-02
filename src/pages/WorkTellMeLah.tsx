export function WorkTellMeLah() {
  return (
    <main className="study-main confidential-main" id="main-content">
      <a className="back-to-work" href="/#work">
        {"← Selected work"}
      </a>
      <div className="study-intro" data-reveal="">
        <p className="study-label">{"CantoMore / CONFIDENTIAL"}</p>
        <p className="study-project-name">{"Tell Me Lah"}</p>
        <h1>
          {"An early prototype."}
          <br />
          {" A "}
          <em>{"private conversation."}</em>
        </h1>
        <p className="study-deck">
          {
            "A prototype I made within CantoMore. This public overview describes my role; product details and internal materials remain confidential."
          }
        </p>
      </div>
      <dl className="study-facts private-facts" data-reveal="">
        <div>
          <dt>{"Role"}</dt>
          <dd>{"Co-founder & Tech Lead · Prototype contribution"}</dd>
        </div>
        <div>
          <dt>{"Context"}</dt>
          <dd>{"CantoMore · ongoing"}</dd>
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
            "My current role is Co-founder & Tech Lead. My broader CantoMore work also includes curriculum design and early-stage product planning. I keep that public role description separate from the confidential details of this prototype."
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
