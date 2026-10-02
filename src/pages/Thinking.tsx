import { ThinkingMap } from "../components/ThinkingMap";

export function Thinking() {
  return (
    <main id="main-content">
      <div className="wrap route-breadcrumb">
        <a href="/">{"← Portfolio"}</a>
        <span>{"Thinking"}</span>
      </div>
      <section
        aria-labelledby="play-heading"
        className="playground thinking-story"
        id="playground"
      >
        <div className="wrap story-intro">
          <div>
            <p className="mono">
              {"BEFORE UNIVERSITY / THE QUESTION THAT STARTED IT"}
            </p>
            <h1 id="play-heading">
              {"Everything exists"}
              <br />
              {"for a "}
              <em>{"reason."}</em>
            </h1>
          </div>
          <div className="motto-now">
            <p className="motto-label">{"WHAT I BELIEVE NOW"}</p>
            <blockquote>
              {"“Everything exists for a reason."}
              <br />
              <em>{"I just don’t assume I already know what it is."}</em>
              {"”"}
            </blockquote>
            <p>
              {
                "Science made me curious about why systems work. Education taught me to keep asking people questions—and explore how things could work differently."
              }
            </p>
            <p className="motto-shift">
              {"From asking "}
              <em>{"why"}</em>
              {" to exploring "}
              <em>{"how"}</em>
              {"."}
            </p>
          </div>
        </div>
        <div className="story-canvas">
          <div className="story-topline">
            <span>{"People → context → a clearer question"}</span>
            <div className="story-counter">
              <span id="story-count">{"01 / 04"}</span>
              <span className="story-progress-track">
                <span className="story-progress-fill" id="story-fill"></span>
              </span>
            </div>
          </div>
          <div className="story-art">
            <ThinkingMap />
          </div>
          <div className="story-bottomline">
            <span id="story-status">{"01 / Listen before designing"}</span>
            <span className="story-illustration-note">
              {"A working model, not a claim of causation"}
            </span>
          </div>
        </div>
        <div className="story-beats">
          <article className="story-beat is-current" data-story-step="0">
            <p className="beat-number">{"01 / Start with people"}</p>
            <h3>
              {"There’s a person"}
              <br />
              {" before there’s "}
              <em>{"a product."}</em>
            </h3>
            <p>
              {
                "I started ToLearner because I recognised the experience of students with fewer resources. That gives me a reason to care — not permission to assume everyone needs what I needed."
              }
            </p>
            <p className="beat-principle">
              {"My first question: what matters to them?"}
            </p>
          </article>
          <article className="story-beat" data-story-step="1">
            <p className="beat-number">{"02 / See the system"}</p>
            <h3>
              {"Their experience"}
              <br />
              {" doesn’t happen "}
              <em>{"alone."}</em>
            </h3>
            <p>
              {
                "I map who else shapes the journey: the people, resources, routines and constraints. Social enterprise and community work taught me to look beyond the screen."
              }
            </p>
            <p className="beat-principle">
              {"The next question: what is shaping this experience?"}
            </p>
          </article>
          <article className="story-beat" data-story-step="2">
            <p className="beat-number">{"03 / Question the picture"}</p>
            <h3>
              {"A connection isn’t"}
              <br />
              {" automatically "}
              <em>{"a fact."}</em>
            </h3>
            <p>
              {
                "I separate what we know from what we think we know, including my own assumptions. Seeing more of the system should help us choose a sharper problem, not add every possible feature."
              }
            </p>
            <p className="beat-principle">
              {"The harder question: what would change our minds?"}
            </p>
          </article>
          <article className="story-beat" data-story-step="3">
            <p className="beat-number">{"04 / Make it testable"}</p>
            <h3>
              {"Then I make"}
              <br />
              {" the question "}
              <em>{"tangible."}</em>
            </h3>
            <p>
              {
                "I ideate with others and build prototypes to face the details. Feedback becomes a reason to refine the experience — and, sometimes, to redraw the problem itself."
              }
            </p>
            <p className="beat-principle">
              {"The loop continues: build → learn → reframe."}
            </p>
          </article>
        </div>
        <div className="wrap story-outro">
          <p>
            {"The picture gets clearer."}
            <br />
            {" It never becomes unquestionable."}
          </p>
          <a href="/#work">
            {"See this thinking in my work "}
            <span aria-hidden="true">{"↓"}</span>
          </a>
        </div>
      </section>
    </main>
  );
}
