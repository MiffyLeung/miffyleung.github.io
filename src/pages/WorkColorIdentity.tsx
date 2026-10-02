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
          {" A way to express "}
          <em>{"yourself."}</em>
        </h1>
        <p className="study-deck">
          {
            "I led web application development and AI integration for a course project combining photo analysis, personal preferences and colour recommendations. Our feedback raised practical questions about context, culture and how people interpret a palette."
          }
        </p>
      </div>
      <dl className="study-facts" data-reveal="">
        <div>
          <dt>{"My contribution"}</dt>
          <dd>
            {
              "Led web development and AI integration; research planning, architecture and methodology writing."
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
            {
              "Course AI work and a public interface prototype using sample results."
            }
          </dd>
        </div>
      </dl>
      <aside aria-label="Key takeaway" className="study-takeaway">
        <p className="study-label">{"What the feedback brought into focus"}</p>
        <p>
          {
            "A palette needs context: people wanted examples they could recognise themselves in, and room to decide how to use the recommendation."
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
            {"Decisions & feedback"}
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
                "We explored how photo analysis and a person’s own preferences could help them choose colours for daily life. I led the web application and AI integration, and contributed to research planning and the report’s architecture and methodology. My teammates worked on dataset curation, market and competitor research, report drafting and presentation."
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
                  "Team architecture from the course deck, slide 12: facial analysis, seasonal classification, preference refinement and language output."
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
            <p className="study-label">03 / DESIGN DECISIONS & FEEDBACK</p>
            <h2>Make the recommendation understandable and useful.</h2>
            <p>
              Our course report describes a modular image-analysis pipeline,
              seasonal classification and rule-based preference refinement. I
              worked on the web application, AI integration and Python
              image-to-embedding work. The public frontend demonstrates the
              photo → questionnaire → palette journey with sample results.
            </p>
            <div className="decision-block">
              <p className="study-label">THE TECHNICAL TRADE-OFF</p>
              <h3>Separate the stages so we can inspect them.</h3>
              <p>
                The team chose a modular pipeline and explicit preference rules
                to keep the stages understandable and easier to debug. Limited
                subtype-labelled data shaped that choice. The report also
                records that ambiguous season predictions and neutral
                preferences could produce awkward combinations—a reason to
                explore confidence modelling in a future iteration.
              </p>
            </div>
            <div className="decision-block">
              <p className="study-label">FEEDBACK / CONTEXT</p>
              <h3>People wanted to picture themselves in the result.</h3>
              <p>
                The report records requests for more contextual examples and
                style archetypes. Participants wanted to understand how a
                palette might look on someone like them. That points towards
                visual previews and examples organised around real settings and
                preferences.
              </p>
            </div>
            <div className="decision-block">
              <p className="study-label">FEEDBACK / CULTURE</p>
              <h3>
                A seasonal label can mean different things to different people.
              </h3>
              <p>
                Some East Asian testers found palettes labelled “Spring” too
                muted. The report identifies cultural interpretation as a reason
                to explore regional calibration. A technically coherent label
                still needs to make sense to the person using it.
              </p>
            </div>
            <p className="source-note">
              Qualitative observations and design decisions from the course
              written report, sections 5–6. Further evaluation would establish
              how these changes affect recommendation quality.
            </p>
          </section>
          <section className="study-section" id="reflection">
            <p className="study-label">{"04 / WHAT I SEE DIFFERENTLY NOW"}</p>
            <h2>
              {"Give people examples"}
              <br />
              {" and room to choose."}
            </h2>
            <p>
              {
                "This was my first project using vision and language AI to help people express themselves. It taught me to consider the explanation and context around a result alongside the analysis that produces it."
              }
            </p>
            <p>
              {
                "For a next iteration, I would add contextual previews and let people adjust their preferences and palette. I would also explore regional calibration and a clearer expression of uncertainty, following the questions raised in our course report."
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
