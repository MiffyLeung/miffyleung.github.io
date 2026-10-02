export function WorkColorIdentity() {
  return (
    <main className="study-main" id="main-content">
      <a className="back-to-work" href="/#work">
        {"← Selected work"}
      </a>
      <div className="study-intro" data-reveal="">
        <p className="study-label">
          {"AI in Action / CUHK "}
          <span className="study-separator">{"/"}</span>
          {" Course project · Interface prototype"}
        </p>
        <p className="study-project-name">{"Color Identity"}</p>
        <h1>
          {"A palette to explore."}
          <br />
          {" Not a verdict on "}
          <em>{"you."}</em>
        </h1>
        <p className="study-deck">
          {
            "A course project exploring personal colour through a photo, stated preferences, and vision and language AI. It also became a question about the role technology should have in self-expression."
          }
        </p>
      </div>
      <dl className="study-facts" data-reveal="">
        <div>
          <dt>{"My contribution"}</dt>
          <dd>
            {
              "Python image-to-embedding work; interface and instructions refined using pilot feedback."
            }
          </dd>
        </div>
        <div>
          <dt>{"Course period"}</dt>
          <dd>{"Jan–May 2025 · CUHK team project"}</dd>
        </div>
        <div>
          <dt>{"Prototype"}</dt>
          <dd>
            {
              "Photo → preferences → palette. The public UI uses sample results."
            }
          </dd>
        </div>
        <div>
          <dt>{"Scope"}</dt>
          <dd>
            {"The Python work and the public frontend are separate artifacts."}
          </dd>
        </div>
      </dl>
      <aside aria-label="Key takeaway" className="study-takeaway">
        <p className="study-label">{"What I would design differently now"}</p>
        <p>
          {
            "Make a recommendation something the person can interpret, reject or change—not an assessment of who they are."
          }
        </p>
      </aside>
      <div className="study-quick-links">
        <a
          href="https://github.com/MiffyLeung/color-identity-muse"
          rel="noopener noreferrer"
          target="_blank"
        >
          {"Explore the public code ↗"}
        </a>
      </div>
      <div className="study-cover" data-reveal="">
        <div className="artifact-art color-art">
          <div className="art-eyebrow">
            <span>{"COLOR IDENTITY / COURSE PROTOTYPE"}</span>
            <span>{"2025"}</span>
          </div>
          <div className="color-caption">
            {"A photo. Your preferences."}
            <br />
            <em>{"A palette to explore."}</em>
          </div>
          <div className="color-screenshot">
            <img
              alt="Original Colorful Identity interface shown on slide 16: Start Analysis, Take Questionnaire, and three feature descriptions."
              height="788"
              loading="lazy"
              src="/assets/03ef9f4b3c2c7094.webp"
              width="1400"
            />
          </div>
          <span className="art-disclosure">
            {"Original interface shown in the course deck · slide 16"}
          </span>
        </div>
      </div>
      <div className="study-layout">
        <nav aria-label="On this page" className="study-toc">
          <span className="study-label">{"IN THIS CASE"}</span>
          <a data-chapter="artifact" href="#artifact">
            {"The original artifact"}
          </a>
          <a data-chapter="flow" href="#flow">
            {"The experience"}
          </a>
          <a data-chapter="scope" href="#scope">
            {"Prototype scope"}
          </a>
          <a data-chapter="reflection" href="#reflection">
            {"What I see differently"}
          </a>
        </nav>
        <div className="study-body">
          <section className="study-section" id="artifact">
            <p className="study-label">{"01 / THE ORIGINAL ARTIFACT"}</p>
            <h2>{"The original experience."}</h2>
            <p>
              {
                "We explored personal-colour analysis through a photo, a questionnaire and palette recommendations. The course deck calls this “Colourful Identity.” Looking back at that experience now, I also question how the interface could give people more ownership of what the result means."
              }
            </p>
            <div className="artifact-actions">
              <a
                className="artifact-link"
                href="https://github.com/MiffyLeung/color-identity-muse"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"Explore the public repository "}
                <span aria-hidden="true">{"↗"}</span>
              </a>
            </div>
            <p className="source-note">
              {"Original interface from the course presentation, slide 16."}
            </p>
          </section>
          <section className="study-section" id="flow">
            <p className="study-label">{"02 / THE EXPERIENCE"}</p>
            <h2>{"Photo → preferences → palette."}</h2>
            <p>
              {
                "The public interface makes room for both an image and the user’s own account. Its questionnaire asks about style, occasion, personality words, preferred colours and colours to avoid."
              }
            </p>
            <div className="flow-strip">
              <div>
                <span>{"01"}</span>
                <strong>{"A photo"}</strong>
                <small>{"Upload or capture"}</small>
              </div>
              <div>
                <span>{"02"}</span>
                <strong>{"Your preferences"}</strong>
                <small>{"Style, context, likes & dislikes"}</small>
              </div>
              <div>
                <span>{"03"}</span>
                <strong>{"A palette"}</strong>
                <small>{"Example recommendations"}</small>
              </div>
            </div>
            <figure className="study-figure">
              <img
                alt="Course presentation slide 12: team-described workflow from selfie and questionnaire to face parsing, segmentation, season prediction and language output."
                height="810"
                loading="lazy"
                src="/assets/5b62ebcf5f734b92.webp"
                width="1440"
              />
              <figcaption>
                {
                  "Team-described architecture from the course deck, slide 12. This diagram is not evidence that the public frontend executes the complete pipeline."
                }
              </figcaption>
            </figure>
            <p className="source-note">
              {"Interface sequence: "}
              <a
                className="source-link"
                href="https://github.com/MiffyLeung/color-identity-muse/blob/main/src/pages/AnalyzePage.tsx"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"AnalyzePage.tsx "}
                <span aria-hidden="true">{"↗"}</span>
              </a>
              {". Input fields: "}
              <a
                className="source-link"
                href="https://github.com/MiffyLeung/color-identity-muse/blob/main/src/components/QuestionnaireForm.tsx"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"QuestionnaireForm.tsx "}
                <span aria-hidden="true">{"↗"}</span>
              </a>
              {"."}
            </p>
          </section>
          <section className="study-section" id="scope">
            <p className="study-label">{"03 / PROTOTYPE SCOPE"}</p>
            <h2>
              {"Different artifacts."}
              <br />
              {" Different things to test."}
            </h2>
            <p>
              {
                "I implemented a Python image-to-embedding pipeline and iterated the interface and instructional content using pilot feedback."
              }
            </p>
            <p>
              {
                "The course deck describes the team’s AI architecture. The public frontend demonstrates the photo → questionnaire → palette interaction with sample results. In this snapshot, the analysis page uses a simulated delay, fixed palettes and a fixed personality description; it is an interface prototype rather than an end-to-end demonstration of the AI pipeline."
              }
            </p>
            <div className="study-insight">
              <span aria-hidden="true" className="insight-mark">
                {"↳"}
              </span>
              <p>
                {
                  "A workable interaction flow and a meaningful AI recommendation are different things to evaluate. This prototype does not establish personality validity or measured gains in self-understanding."
                }
              </p>
            </div>
            <p className="source-note">
              {"Implementation boundary checked against "}
              <a
                className="source-link"
                href="https://github.com/MiffyLeung/color-identity-muse/blob/main/src/pages/AnalyzePage.tsx"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"the public analysis-page source "}
                <span aria-hidden="true">{"↗"}</span>
              </a>
              {"."}
            </p>
          </section>
          <section className="study-section" id="reflection">
            <p className="study-label">{"04 / WHAT I SEE DIFFERENTLY NOW"}</p>
            <h2>
              {"The most important output"}
              <br />
              {" isn’t the machine’s opinion."}
            </h2>
            <p>
              {
                "This was my first project using vision and language AI to help people express themselves. The harder question stayed with me: how should someone relate to an AI’s suggestion about who they are?"
              }
            </p>
            <p>
              {
                "The original concept included personal-colour and personality language. Today, I would make the distinction between a suggestion and an assessment much more explicit, and give people a clear way to disagree, adjust and make the palette their own. These are proposed changes for a future iteration."
              }
            </p>
            <div className="study-insight">
              <span aria-hidden="true" className="insight-mark">
                {"↳"}
              </span>
              <p>
                {
                  "Technology can open up ways to express yourself. The person should keep the final interpretation."
                }
              </p>
            </div>
          </section>
        </div>
      </div>
      <footer className="study-end">
        <div>
          <span className="study-label">{"MORE WORK"}</span>
          <a className="next-case" href="/work/no-rush-be-quick/">
            {"No Rush Be Quick "}
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
