import { LivingDiagram } from "./LivingDiagram";
export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="hero identity-hero">
      <div className="hero-inner">
        <p className="identity-kicker">
          {"Innovation & Experience Design · Hong Kong"}
        </p>
        <h1 id="hero-heading">
          {"Hi! I'm "}
          <em>{"Miffy."}</em>
        </h1>
        <p className="hero-role">
          {"I like making sense of messy problems"}
          <span>{"and finding a clearer way forward."}</span>
        </p>
        <p className="hero-note">
          {
            "Usually by asking questions, connecting the dots, and making something we can try together."
          }
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="/#work">
            {"Take a look at my work "}
            <span aria-hidden="true">{"↘"}</span>
          </a>
          <a className="text-link" href="/about/">
            {"A little about me ↗"}
          </a>
        </div>
      </div>
      <figure className="perspectives">
        <LivingDiagram />
        <figcaption>
          {"People, systems, possibilities."}
          <br />
          <em>{"Always room for another perspective."}</em>
        </figcaption>
      </figure>
      <div className="hero-base">
        <div aria-label="Selected experience" className="hero-evidence">
          <p className="current-role">
            <span className="role-timing">{"CURRENTLY AT CANTOMORE"}</span>
            <strong>{"Co-founder & Tech Lead"}</strong>
            <a href="/work/no-rush-be-quick/">
              {"Building No Rush Be Quick "}
              <span aria-hidden="true">{"↗"}</span>
            </a>
          </p>
          <p>
            <span className="role-timing">{"PREVIOUSLY"}</span>
            <strong>{"Product Innovation Intern"}</strong>
            <span>{"Hong Kong Education City · 2026"}</span>
          </p>
        </div>
        <p className="hero-context">
          <strong>{"CUHK · Expected graduation July 2027"}</strong>
          <br />
          {"Exploring innovation & experience design roles"}
        </p>
      </div>
    </section>
  );
}
