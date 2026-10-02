export type Navigation = "work" | "thinking" | "about" | "resume";
export function Header({ active }: { active: Navigation }) {
  return (
    <header className="site-header" id="site-header">
      <div className="wrap nav-row">
        <a aria-label="Miffy Leung — home" className="brand" href="/">
          <span aria-hidden="true" className="brand-mark">
            <svg fill="none" viewBox="0 0 36 36">
              <path
                d="M18 3V33M3 18H33M7.5 7.5L28.5 28.5M7.5 28.5L28.5 7.5"
                stroke="currentColor"
                strokeWidth="2.4"
              ></path>
              <circle
                cx="18"
                cy="18"
                fill="#f8f8f4"
                r="6"
                stroke="currentColor"
                strokeWidth="2.2"
              ></circle>
            </svg>
          </span>
          <span data-name="">{"Miffy Leung"}</span>
        </a>
        <nav aria-label="Main navigation" className="nav-links">
          <a
            data-nav="work"
            href="/#work"
            className={"" + (active === "work" ? " active" : "")}
            aria-current={active === "work" ? "page" : undefined}
          >
            {"Work"}
          </a>
          <a
            data-nav="playground"
            href="/thinking/"
            className={"" + (active === "thinking" ? " active" : "")}
            aria-current={active === "thinking" ? "page" : undefined}
          >
            {"Thinking"}
          </a>
          <a
            data-nav="about"
            href="/about/"
            className={"" + (active === "about" ? " active" : "")}
            aria-current={active === "about" ? "page" : undefined}
          >
            {"My story"}
          </a>
          <a className="nav-resume" href="/resume/">
            {"Résumé "}
            <span aria-hidden="true" className="resume-arrow">
              {"↗"}
            </span>
          </a>
          <a
            aria-label="Email Miffy"
            className="nav-contact"
            href="mailto:miffyleung2020@gmail.com"
          >
            {"Contact ↗"}
          </a>
        </nav>
        <button
          aria-label="Turn decorative motion off"
          aria-pressed="true"
          className="motion-switch"
          id="motion-toggle"
        >
          <span className="motion-light"></span>
          <span id="motion-label">{"Motion on"}</span>
        </button>
      </div>
    </header>
  );
}
