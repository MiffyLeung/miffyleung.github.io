export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-main">
          <h2>
            {"Let’s design"}
            <br />
            <em>{"what comes next."}</em>
          </h2>
          <a
            className="pill"
            href="https://www.linkedin.com/in/miffy-leung/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {"Get in touch "}
            <span aria-hidden="true" className="arrow">
              {"↗"}
            </span>
          </a>
        </div>
        <span className="draft-mark">
          {
            "MIFFY LEUNG · INNOVATION & EXPERIENCE DESIGN · EXPECTED GRADUATION JULY 2027"
          }
        </span>
        <div className="footer-bottom">
          <span>
            {"© 2026 "}
            <span data-name="">{"Miffy Leung"}</span>
          </span>
          <span>{"Still curious. Still redrawing."}</span>
        </div>
      </div>
    </footer>
  );
}
