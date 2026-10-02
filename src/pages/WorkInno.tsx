export function WorkInno() {
  return (
    <main className="study-main inno-case" id="main-content">
      <a className="back-to-work" href="/#work">
        {"← All work"}
      </a>
      <div className="study-intro" data-reveal="">
        <p className="study-label">
          {"YDC Dare To Change / Career guidance & talent matching"}
        </p>
        <p className="study-project-name">
          {"Inno "}
          <span lang="zh-Hant">{"· 鷹路"}</span>
        </p>
        <h1>
          {"Discover a direction."}
          <br />
          <em>{"Connect with what comes next."}</em>
        </h1>
        <p className="study-deck">
          {
            "An AI-assisted career-exploration prototype within a wider service concept: personalised insights, human industry mentors and employer matching. Designed for university students finding their direction and employers looking for suitable talent."
          }
        </p>
      </div>
      <dl className="study-facts" data-reveal="">
        <div>
          <dt>{"My contribution"}</dt>
          <dd>
            {
              "Career-exploration prototype, matching-concept and scope refinement"
            }
          </dd>
        </div>
        <div>
          <dt>{"When"}</dt>
          <dd>{"Jan–Jul 2025"}</dd>
        </div>
        <div>
          <dt>{"Context"}</dt>
          <dd>
            {"YDC Dare To Change"}
            <br />
            {"Business Pitch Competition 2024–25"}
          </dd>
        </div>
        <div>
          <dt>{"Stage"}</dt>
          <dd>
            {"Interface prototype"}
            <br />
            {"Proposed service & business model"}
          </dd>
        </div>
      </dl>
      <aside
        aria-label="The question behind the work"
        className="study-takeaway"
      >
        <p className="study-label">{"The question behind it"}</p>
        <p>
          {
            "What connects a better understanding of yourself to useful guidance—and an opportunity to act on it?"
          }
        </p>
      </aside>
      <div className="study-layout">
        <nav aria-label="On this page" className="study-toc">
          <span className="study-label">{"IN THIS PROJECT"}</span>
          <a data-chapter="inno-interface" href="#inno-interface">
            {"Prototype"}
          </a>
          <a data-chapter="inno-context" href="#inno-context">
            {"The problem"}
          </a>
          <a data-chapter="inno-concept" href="#inno-concept">
            {"The service concept"}
          </a>
          <a data-chapter="inno-business" href="#inno-business">
            {"Business model"}
          </a>
          <a data-chapter="inno-contribution" href="#inno-contribution">
            {"My contribution"}
          </a>
          <a data-chapter="inno-reflection" href="#inno-reflection">
            {"What I take forward"}
          </a>
        </nav>
        <div className="study-body">
          <section className="study-section" id="inno-interface">
            <p className="study-label">{"01 / THE PROTOTYPE"}</p>
            <h2>
              {"Start with yourself."}
              <br />
              <em>{"Then explore the possibilities."}</em>
            </h2>
            <p>
              {
                "The homepage shown in the pitch makes two entry points visible: "
              }
              <strong>{"“Take the Aptitude Test”"}</strong>
              {" and "}
              <strong>{"“Explore Mentors”"}</strong>
              {
                ". Assessment is the starting point of the proposal, not its only service."
              }
            </p>
            <figure className="study-figure inno-source-figure">
              <img
                alt="Original Inno pitch slide 8. The prototype homepage shows Discover Your Ideal Career Path, Take the Aptitude Test and Explore Mentors. The slide lists assessment, career reports, human mentors and talent matching."
                decoding="async"
                height="810"
                loading="lazy"
                src="/assets/2f5a6de82f54939b.webp"
                width="1440"
              />
              <figcaption>
                <span className="inno-source-tag">
                  {"Original project artifact"}
                </span>
                {
                  " Pitch deck, p. 8. Original prototype interface; the broader assessment and recruitment services were presented as proposed capabilities."
                }
              </figcaption>
            </figure>
          </section>
          <section className="study-section" id="inno-context">
            <p className="study-label">{"02 / THE PROBLEM"}</p>
            <h2>
              {"Career direction is more"}
              <br />
              {"than finding a vacancy."}
            </h2>
            <p>
              {
                "The pitch identifies four connected concerns: limited self-understanding among young people, gaps in career planning, difficulty accessing industry mentors, and employers’ talent-matching problems."
              }
            </p>
            <div className="inno-audiences">
              <div>
                <span className="study-label">{"UNIVERSITY STUDENTS"}</span>
                <h3>{"Where could I fit?"}</h3>
                <p>
                  {
                    "Explore career direction and development potential while looking for suitable work."
                  }
                </p>
              </div>
              <div>
                <span className="study-label">{"EMPLOYERS"}</span>
                <h3>{"Who could fit here?"}</h3>
                <p>
                  {
                    "Find suitable talent, particularly where employers are willing to attract and develop younger candidates."
                  }
                </p>
              </div>
            </div>
            <p className="source-note">
              {
                "Problem framing and target audiences from the team’s pitch deck, pp. 4–5."
              }
            </p>
          </section>
          <section className="study-section" id="inno-concept">
            <p className="study-label">{"03 / THE SERVICE CONCEPT"}</p>
            <h2>
              {"Four parts of"}
              <br />
              <em>{"a wider service."}</em>
            </h2>
            <p>
              {
                "The pitch connects AI-assisted exploration with human guidance and employer access. Each part serves a different need."
              }
            </p>
            <ol
              aria-label="The four proposed services"
              className="inno-services"
            >
              <li>
                <span className="inno-service-index">{"01"}</span>
                <div>
                  <h3>{"Open-ended scenario assessment"}</h3>
                  <p>
                    {
                      "Voice-based responses to scenarios, rather than only multiple-choice questions, as inputs to the proposed analysis of personality, abilities and interests."
                    }
                  </p>
                </div>
              </li>
              <li>
                <span className="inno-service-index">{"02"}</span>
                <div>
                  <h3>{"Personalised career report"}</h3>
                  <p>
                    {
                      "Combine assessment results with an uploaded CV to suggest industries and work opportunities, and explore potential."
                    }
                  </p>
                </div>
              </li>
              <li>
                <span className="inno-service-index">{"03"}</span>
                <div>
                  <h3>{"Human industry mentors"}</h3>
                  <p>
                    {
                      "Connect people with practitioners who can offer targeted guidance and support for career development."
                    }
                  </p>
                </div>
              </li>
              <li>
                <span className="inno-service-index">{"04"}</span>
                <div>
                  <h3>{"Employer talent matching"}</h3>
                  <p>
                    {
                      "Let employers review candidate analysis and proposed percentage-based fit scores to support shortlisting, including for niche industries."
                    }
                  </p>
                </div>
              </li>
            </ol>
            <p className="source-note">
              {
                "Proposed product scope, pitch deck pp. 7–10. Assessment accuracy and hiring outcomes would require separate validation."
              }
            </p>
          </section>
          <section className="study-section" id="inno-business">
            <p className="study-label">{"04 / THE BUSINESS MODEL"}</p>
            <h2>
              {"Free exploration."}
              <br />
              <em>{"A model for ongoing support."}</em>
            </h2>
            <p>
              {
                "The proposal uses a free entry point to attract users, with paid mentor matching for job seekers and subscription access for employers."
              }
            </p>
            <div
              aria-label="Proposed pricing, not realised revenue"
              className="inno-pricing"
            >
              <div>
                <span className="study-label">{"GET STARTED"}</span>
                <strong>{"Free"}</strong>
                <p>
                  {
                    "Aptitude assessment, an AI analysis report and career-planning suggestions."
                  }
                </p>
              </div>
              <div>
                <span className="study-label">{"MENTOR MATCHING"}</span>
                <strong>
                  {"HK$200"}
                  <small>{"per use"}</small>
                </strong>
                <p>
                  {"A proposed fee for personalised industry-mentor matching."}
                </p>
              </div>
              <div>
                <span className="study-label">{"EMPLOYER ACCESS"}</span>
                <strong>
                  {"HK$3,600"}
                  <small>{"per month"}</small>
                </strong>
                <p>
                  {
                    "A proposed subscription to a dashboard for viewing candidate analysis reports."
                  }
                </p>
              </div>
            </div>
            <figure className="study-figure inno-source-figure">
              <img
                alt="Original business-model slide from the Inno pitch deck: a free aptitude test, AI report and career advice, with proposed HK$200 mentor matching and HK$3,600 monthly employer subscriptions."
                decoding="async"
                height="810"
                loading="lazy"
                src="/assets/0655b2a8dfd3cb1e.webp"
                width="1440"
              />
              <figcaption>
                <span className="inno-source-tag">
                  {"Original project artifact"}
                </span>
                {
                  " Pitch deck, p. 11. Proposed pricing—not actual revenue or validated willingness to pay."
                }
              </figcaption>
            </figure>
          </section>
          <section className="study-section" id="inno-contribution">
            <p className="study-label">{"05 / MY CONTRIBUTION"}</p>
            <h2>
              {"Make the idea concrete."}
              <br />
              <em>{"Then revisit the scope."}</em>
            </h2>
            <p>
              {
                "I designed an AI-assisted career-exploration prototype and refined the candidate–industry matching concept and product scope in response to judges’ feedback."
              }
            </p>
            <p>
              {
                "This project helped me connect interface prototyping with questions about the service model, the business model and scalability."
              }
            </p>
            <p className="source-note">
              {
                "The pitch deck represents the team’s proposal. My individual contribution was prototype design and refinement of the matching concept and scope."
              }
            </p>
          </section>
          <section className="study-section" id="inno-reflection">
            <p className="study-label">{"06 / WHAT I TAKE FORWARD"}</p>
            <h2>
              {"Design the experience."}
              <br />
              <em>{"Ask what sustains it."}</em>
            </h2>
            <p>
              {
                "A useful interface is only one part of the system. Inno expanded my attention to who delivers the support, who pays for it, and what the product needs to focus on before it can scale."
              }
            </p>
            <div className="study-insight">
              <span aria-hidden="true" className="insight-mark">
                {"↳"}
              </span>
              <p>
                {
                  "A clear proposition is a starting point for testing—not proof that the service will work."
                }
              </p>
            </div>
            <div className="inno-next-questions">
              <p className="study-label">{"QUESTIONS FOR A NEXT ITERATION"}</p>
              <p>
                <strong>{"What does a fit score actually mean?"}</strong>
                {
                  " The pitch proposes percentage-based matching. The next design question is how people could understand, question and retain agency over those suggestions."
                }
              </p>
              <p>
                <strong>{"Who would pay, and for which value?"}</strong>
                {
                  " Proposed prices need testing with students and employers, alongside the practical delivery of mentor support."
                }
              </p>
              <p className="source-note">
                {
                  "Forward-looking design questions, not tests already conducted or documented findings from the pitch."
                }
              </p>
            </div>
          </section>
        </div>
      </div>
      <footer className="study-end">
        <a className="secondary-link" href="/#work">
          {"← Back to all work"}
        </a>
        <a className="next-case" href="/work/proconnect/">
          {"ProConnect "}
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
