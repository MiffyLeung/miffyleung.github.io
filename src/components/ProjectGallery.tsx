export function ProjectGallery() {
  return (
    <section
      aria-labelledby="work-heading"
      className="wrap work work-showcase compact-portfolio folio-gallery"
      id="work"
    >
      <div className="section-head divider work-first-head">
        <div className="gallery-heading-group">
          <h2 id="work-heading">{"Selected work"}</h2>
          <span aria-label="Nine projects" className="mono muted">
            {"01 — 09"}
          </span>
        </div>
        <p hidden={true}>
          {"Culture, community and AI."}
          <br />
          {" Different ways to build for people."}
        </p>
        <div className="showcase-toolbar" hidden={true} id="showcase-toolbar">
          <p className="showcase-hint" hidden={true} id="showcase-hint">
            {"All 9 projects. One gallery."}
          </p>
          <div
            aria-label="Project display"
            className="showcase-view"
            role="group"
          >
            <button
              aria-controls="selected-projects"
              aria-pressed="true"
              data-work-view="gallery"
              type="button"
            >
              <svg aria-hidden="true" fill="none" viewBox="0 0 16 16">
                <rect height="4" rx=".7" width="4" x="2" y="2"></rect>
                <rect height="4" rx=".7" width="4" x="10" y="2"></rect>
                <rect height="4" rx=".7" width="4" x="2" y="10"></rect>
                <rect height="4" rx=".7" width="4" x="10" y="10"></rect>
              </svg>
              {"Gallery"}
            </button>
            <button
              aria-controls="selected-projects"
              aria-pressed="false"
              data-work-view="carousel"
              type="button"
            >
              <svg aria-hidden="true" fill="none" viewBox="0 0 16 16">
                <rect height="12" rx="1" width="8" x="2" y="2"></rect>
                <path d="M13 3h2v10h-2"></path>
              </svg>
              {"Carousel"}
            </button>
          </div>
        </div>
      </div>
      <div
        aria-label="All projects"
        className="case-gallery"
        data-view="gallery"
        id="selected-projects"
        role="list"
      >
        <article
          className="gallery-case work-item"
          data-art-index="01"
          data-label="No Rush Be Quick"
          data-project="no-rush-be-quick"
          role="listitem"
        >
          <a
            aria-label="Read the No Rush Be Quick case study"
            className="gallery-primary"
            href="/work/no-rush-be-quick/"
          >
            <div
              className="artifact-art folio-art folio-no-rush-be-quick"
              data-cover="no-rush-be-quick"
            >
              <div aria-hidden="true" className="folio-scene rush-scene">
                <div className="rush-sign">
                  <span>{"唔使急"}</span>
                  <span>{"最緊要快 ↗"}</span>
                </div>
                <svg className="rush-route" fill="none" viewBox="0 0 480 340">
                  <path
                    d="M-20 282H146Q183 282 183 245V124Q183 87 222 87H360Q397 87 397 48V-20"
                    stroke="#5b746a"
                    strokeWidth="2"
                  ></path>
                  <path
                    className="rush-dash"
                    d="M-20 293H145Q194 293 194 245V126Q194 99 222 99H363Q410 99 410 48V-20"
                    stroke="#abc094"
                    strokeDasharray="4 7"
                  ></path>
                  <circle
                    cx="183"
                    cy="196"
                    fill="#25382f"
                    r="6"
                    stroke="#c9df9e"
                    strokeWidth="2"
                  ></circle>
                  <circle
                    cx="312"
                    cy="87"
                    fill="#25382f"
                    r="6"
                    stroke="#c9df9e"
                    strokeWidth="2"
                  ></circle>
                </svg>
                <div className="rush-key rush-key-main">
                  <span>{"快"}</span>
                  <small>{"ENTER ↵"}</small>
                </div>
                <div className="rush-key rush-key-nei">{"nei5"}</div>
                <div className="rush-key rush-key-hou">
                  {"hou2"}
                  <span>{"↗"}</span>
                </div>
                <div className="rush-station">
                  <i></i>
                  <span>{"JYUTPING / IN MOTION"}</span>
                </div>
              </div>
              <span aria-hidden="true" className="folio-open">
                <svg fill="none" viewBox="0 0 24 24">
                  <path
                    d="M6 18L18 6M6 6h12v12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                  ></path>
                </svg>
              </span>
              <span className="sr-only">
                {"Original portfolio artwork, not a product screenshot."}
              </span>
            </div>
            <div className="gallery-info">
              <div className="gallery-title">
                <span className="project-number">{"01"}</span>
                <h3>{"No Rush Be Quick"}</h3>
                <span aria-hidden="true" className="gallery-arrow">
                  {"→"}
                </span>
              </div>
              <p className="gallery-caption">
                <span className="gallery-caption-type">
                  {"CantoMore · Web game"}
                </span>
                <span className="folio-source">{"Concept artwork"}</span>
              </p>
            </div>
          </a>
        </article>
        <article
          className="gallery-case work-item"
          data-art-index="02"
          data-label="DSE Study Planner · Poe chatbot"
          data-project="dse-study-planner"
          role="listitem"
        >
          <a
            aria-label="View DSE Study Planner · Poe chatbot"
            className="gallery-primary"
            href="/work/dse-study-planner/"
          >
            <div
              className="artifact-art folio-art folio-dse-study-planner"
              data-cover="dse-study-planner"
            >
              <div aria-hidden="true" className="folio-scene poe-scene">
                <span className="poe-watermark">{"↳"}</span>
                <div className="poe-thread">
                  <div className="poe-question">
                    <span>{"Where do I start?"}</span>
                    <i>{"?"}</i>
                  </div>
                  <div className="poe-answer">
                    <span className="poe-spark">{"✳"}</span>
                    <div className="poe-answer-body">
                      <div className="poe-answer-lines">
                        <i></i>
                        <i></i>
                        <i></i>
                      </div>
                      <div className="poe-week">
                        <span>{"M"}</span>
                        <span>{"T"}</span>
                        <span>{"W"}</span>
                        <span>{"T"}</span>
                        <span>{"F"}</span>
                        <span>{"S"}</span>
                        <span>{"S"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="poe-reply">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                </div>
                <span className="poe-corner">{"A LITTLE CLARITY."}</span>
              </div>
              <span aria-hidden="true" className="folio-open">
                <svg fill="none" viewBox="0 0 24 24">
                  <path
                    d="M6 18L18 6M6 6h12v12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                  ></path>
                </svg>
              </span>
              <span className="sr-only">
                {"Original portfolio artwork, not a product screenshot."}
              </span>
            </div>
            <div className="gallery-info">
              <div className="gallery-title">
                <span className="project-number">{"02"}</span>
                <h3>{"DSE Study Planner"}</h3>
                <span aria-hidden="true" className="gallery-arrow">
                  {"→"}
                </span>
              </div>
              <p className="gallery-caption">
                <span className="gallery-caption-type">
                  {"ToLearner · Poe chatbot"}
                </span>
                <span className="folio-source">{"Concept artwork"}</span>
              </p>
            </div>
          </a>
        </article>
        <article
          className="gallery-case work-item"
          data-art-index="03"
          data-label="Notion DSE Planner · Template"
          data-project="notion-dse-planner"
          role="listitem"
        >
          <a
            aria-label="View Notion DSE Planner · Template"
            className="gallery-primary"
            href="/work/notion-dse-planner/"
          >
            <div
              className="artifact-art folio-art folio-notion-dse-planner"
              data-cover="notion-dse-planner"
            >
              <div aria-hidden="true" className="folio-scene notion-scene">
                <div className="notion-ruler"></div>
                <div className="notion-shadow-paper"></div>
                <div className="notion-sheet">
                  <div className="notion-sheet-top">
                    <span>{"↗"}</span>
                    <span>{"TOLEARNER"}</span>
                    <i></i>
                  </div>
                  <strong>{"DSE Planner"}</strong>
                  <div className="notion-sheet-line"></div>
                  <div className="notion-layout">
                    <div className="notion-checklist">
                      <span>
                        <b></b>
                        <i></i>
                      </span>
                      <span>
                        <b></b>
                        <i></i>
                      </span>
                      <span>
                        <b></b>
                        <i></i>
                      </span>
                    </div>
                    <div className="notion-week">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                  </div>
                  <div className="notion-sheet-bottom">
                    <span>{"A little structure."}</span>
                    <span>{"01"}</span>
                  </div>
                </div>
                <span className="notion-tab">{"PLAN / REVISIT"}</span>
              </div>
              <span aria-hidden="true" className="folio-open">
                <svg fill="none" viewBox="0 0 24 24">
                  <path
                    d="M6 18L18 6M6 6h12v12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                  ></path>
                </svg>
              </span>
              <span className="sr-only">
                {"Original portfolio artwork, not a product screenshot."}
              </span>
            </div>
            <div className="gallery-info">
              <div className="gallery-title">
                <span className="project-number">{"03"}</span>
                <h3>{"Notion DSE Planner"}</h3>
                <span aria-hidden="true" className="gallery-arrow">
                  {"→"}
                </span>
              </div>
              <p className="gallery-caption">
                <span className="gallery-caption-type">
                  {"ToLearner · Notion template"}
                </span>
                <span className="folio-source">{"Concept artwork"}</span>
              </p>
            </div>
          </a>
        </article>
        <article
          className="gallery-case work-item gallery-no-external"
          data-art-index="04"
          data-label="Small Campus"
          data-project="small-campus"
          role="listitem"
        >
          <a
            aria-label="View project overview: Small Campus — confidential"
            className="gallery-primary"
            href="/work/small-campus/"
          >
            <div
              className="artifact-art folio-art folio-small-campus"
              data-cover="small-campus"
            >
              <div aria-hidden="true" className="folio-scene campus-scene">
                <div className="campus-word">
                  {"Small"}
                  <br />
                  <em>{"Campus"}</em>
                </div>
                <svg className="campus-world" fill="none" viewBox="0 0 480 350">
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="folio-campus-top"
                      x1="130"
                      x2="370"
                      y1="100"
                      y2="320"
                    >
                      <stop stopColor="#fcf9ff"></stop>
                      <stop offset="1" stopColor="#c5b5e9"></stop>
                    </linearGradient>
                  </defs>
                  <ellipse
                    cx="292"
                    cy="288"
                    fill="#392353"
                    opacity=".23"
                    rx="137"
                    ry="28"
                  ></ellipse>
                  <g className="campus-island">
                    <path
                      d="M137 223L277 142L423 224V244L280 325L137 244Z"
                      fill="#9076ba"
                    ></path>
                    <path
                      d="M137 223L279 142L423 224L280 306Z"
                      fill="url(#folio-campus-top)"
                    ></path>
                    <path d="M280 306V325L423 244V224Z" fill="#73569b"></path>
                    <path
                      d="M178 201L321 282M222 176L365 258M267 150L411 232M183 249L325 167M230 277L372 195"
                      stroke="#b09acb"
                      strokeWidth="1"
                    ></path>
                    <g className="campus-block">
                      <path
                        d="M254 182L318 145L369 175V236L305 273L254 244Z"
                        fill="#bfabe1"
                      ></path>
                      <path
                        d="M254 182L318 145L369 175L305 212Z"
                        fill="#f3eef9"
                      ></path>
                      <path
                        d="M305 212L369 175V236L305 273Z"
                        fill="#9b81c2"
                      ></path>
                      <path
                        d="M316 220L332 211V230L316 239Z M344 204L358 196V215L344 223Z M316 247L332 238V254L316 263Z M344 230L358 223V241L344 249Z"
                        fill="#e5dafa"
                      ></path>
                      <path
                        d="M266 201L281 210V230L266 221Z"
                        fill="#655279"
                      ></path>
                    </g>
                    <g className="campus-step">
                      <path
                        d="M171 216L219 188L244 203V245L197 272L171 257Z"
                        fill="#d9ec9c"
                      ></path>
                      <path
                        d="M171 216L219 188L244 203L197 230Z"
                        fill="#f0f9c6"
                      ></path>
                      <path
                        d="M197 230L244 203V245L197 272Z"
                        fill="#aabc67"
                      ></path>
                    </g>
                    <path
                      d="M384 172V130"
                      stroke="#f9efd7"
                      strokeWidth="3"
                    ></path>
                    <path d="M384 130L408 143L384 157Z" fill="#fcb191"></path>
                  </g>
                  <circle cx="395" cy="84" fill="#dbecb3" r="13"></circle>
                  <path
                    d="M396 47V57M422 65L412 70M368 65L378 70"
                    stroke="#cfbbea"
                    strokeWidth="2"
                  ></path>
                </svg>
              </div>
              <span aria-hidden="true" className="folio-open">
                <svg fill="none" viewBox="0 0 24 24">
                  <path
                    d="M6 18L18 6M6 6h12v12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                  ></path>
                </svg>
              </span>
              <span className="sr-only">
                {"Original portfolio artwork, not a product screenshot."}
              </span>
            </div>
            <div className="gallery-info">
              <div className="gallery-title">
                <span className="project-number">{"04"}</span>
                <h3>{"Small Campus"}</h3>
                <span aria-hidden="true" className="gallery-arrow">
                  {"→"}
                </span>
              </div>
              <p className="gallery-caption">
                <span className="gallery-caption-type">
                  {"HKedCity · Redesign"}
                </span>
                <span className="gallery-caption-access">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 16 16">
                    <rect height="6.5" rx="1.5" width="9" x="3.5" y="7"></rect>
                    <path d="M5 7V4.5a3 3 0 0 1 6 0V7"></path>
                  </svg>
                  {"Confidential"}
                </span>
                <span className="folio-source">{"Concept artwork"}</span>
              </p>
            </div>
          </a>
        </article>
        <article
          className="gallery-case work-item"
          data-art-index="05"
          data-label="Color Identity"
          data-project="color-identity"
          role="listitem"
        >
          <a
            aria-label="Read the Color Identity case study"
            className="gallery-primary"
            href="/work/color-identity/"
          >
            <div
              className="artifact-art folio-art folio-color-identity"
              data-cover="color-identity"
            >
              <div className="folio-scene color-scene">
                <div aria-hidden="true" className="color-fan">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <div className="color-browser">
                  <div aria-hidden="true" className="color-browser-bar">
                    <span>
                      <i></i>
                      <i></i>
                      <i></i>
                    </span>
                    <span>{"Color Identity"}</span>
                    <span>{"↗"}</span>
                  </div>
                  <img
                    alt="Original Colorful Identity interface shown on slide 16: Start Analysis, Take Questionnaire, and three feature descriptions."
                    decoding="async"
                    loading="lazy"
                    src="/assets/03ef9f4b3c2c7094.webp"
                  />
                </div>
                <span aria-hidden="true" className="color-annotation">
                  {"More than a label."}
                </span>
              </div>
              <span aria-hidden="true" className="folio-open">
                <svg fill="none" viewBox="0 0 24 24">
                  <path
                    d="M6 18L18 6M6 6h12v12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="gallery-info">
              <div className="gallery-title">
                <span className="project-number">{"05"}</span>
                <h3>{"Color Identity"}</h3>
                <span aria-hidden="true" className="gallery-arrow">
                  {"→"}
                </span>
              </div>
              <p className="gallery-caption">
                <span className="gallery-caption-type">
                  {"Vision + Language AI · Prototype"}
                </span>
                <span className="folio-source">{"Original interface"}</span>
              </p>
            </div>
          </a>
        </article>
        <article
          className="gallery-case work-item gallery-no-external"
          data-art-index="06"
          data-label="Tell Me Lah"
          data-project="tell-me-lah"
          role="listitem"
        >
          <a
            aria-label="View project overview: Tell Me Lah — confidential"
            className="gallery-primary"
            href="/work/tell-me-lah/"
          >
            <div
              className="artifact-art folio-art folio-tell-me-lah"
              data-cover="tell-me-lah"
            >
              <div aria-hidden="true" className="folio-scene tell-scene">
                <div className="tell-orbit"></div>
                <span className="tell-star">{"✳"}</span>
                <div className="tell-bubble tell-one">
                  {"Tell me"}
                  <span>{"↗"}</span>
                </div>
                <div className="tell-bubble tell-two">{"lah."}</div>
                <div className="tell-dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <span className="tell-caption">{"CANTOMORE / CONNECTION"}</span>
              </div>
              <span aria-hidden="true" className="folio-open">
                <svg fill="none" viewBox="0 0 24 24">
                  <path
                    d="M6 18L18 6M6 6h12v12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                  ></path>
                </svg>
              </span>
              <span className="sr-only">
                {"Original portfolio artwork, not a product screenshot."}
              </span>
            </div>
            <div className="gallery-info">
              <div className="gallery-title">
                <span className="project-number">{"06"}</span>
                <h3>{"Tell Me Lah"}</h3>
                <span aria-hidden="true" className="gallery-arrow">
                  {"→"}
                </span>
              </div>
              <p className="gallery-caption">
                <span className="gallery-caption-type">
                  {"CantoMore · Prototype"}
                </span>
                <span className="gallery-caption-access">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 16 16">
                    <rect height="6.5" rx="1.5" width="9" x="3.5" y="7"></rect>
                    <path d="M5 7V4.5a3 3 0 0 1 6 0V7"></path>
                  </svg>
                  {"Confidential"}
                </span>
                <span className="folio-source">{"Concept artwork"}</span>
              </p>
            </div>
          </a>
        </article>
        <article
          className="gallery-case work-item gallery-no-external"
          data-art-index="07"
          data-label="STAR"
          data-project="star"
          role="listitem"
        >
          <a
            aria-label="View project overview: STAR — confidential"
            className="gallery-primary"
            href="/work/star/"
          >
            <div
              className="artifact-art folio-art folio-star"
              data-cover="star"
            >
              <div aria-hidden="true" className="folio-scene star-scene">
                <div className="star-contour one"></div>
                <div className="star-contour two"></div>
                <svg className="star-object" viewBox="0 0 300 300">
                  <defs>
                    <linearGradient
                      id="folio-star-light"
                      x1=".1"
                      x2=".9"
                      y1="0"
                      y2="1"
                    >
                      <stop stopColor="#d7ebff"></stop>
                      <stop offset=".48" stopColor="#98b6d4"></stop>
                      <stop offset="1" stopColor="#3b5d7a"></stop>
                    </linearGradient>
                    <linearGradient
                      id="folio-star-dark"
                      x1="0"
                      x2="1"
                      y1="0"
                      y2="1"
                    >
                      <stop stopColor="#527698"></stop>
                      <stop offset="1" stopColor="#152f4a"></stop>
                    </linearGradient>
                  </defs>
                  <g className="star-shape">
                    <path
                      d="M150 12L171 98L245 55L202 129L288 150L202 171L245 245L171 202L150 288L129 202L55 245L98 171L12 150L98 129L55 55L129 98Z"
                      fill="url(#folio-star-light)"
                    ></path>
                    <path
                      d="M150 150L150 12L171 98ZM150 150L245 55L202 129ZM150 150L288 150L202 171ZM150 150L245 245L171 202ZM150 150L150 288L129 202ZM150 150L55 245L98 171ZM150 150L12 150L98 129ZM150 150L55 55L129 98Z"
                      fill="url(#folio-star-dark)"
                    ></path>
                  </g>
                </svg>
                <span className="star-word">{"S T A R"}</span>
                <span className="star-corner">{"A NEW PERSPECTIVE ↗"}</span>
              </div>
              <span aria-hidden="true" className="folio-open">
                <svg fill="none" viewBox="0 0 24 24">
                  <path
                    d="M6 18L18 6M6 6h12v12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                  ></path>
                </svg>
              </span>
              <span className="sr-only">
                {"Original portfolio artwork, not a product screenshot."}
              </span>
            </div>
            <div className="gallery-info">
              <div className="gallery-title">
                <span className="project-number">{"07"}</span>
                <h3>{"STAR"}</h3>
                <span aria-hidden="true" className="gallery-arrow">
                  {"→"}
                </span>
              </div>
              <p className="gallery-caption">
                <span className="gallery-caption-type">
                  {"HKedCity · Redesign"}
                </span>
                <span className="gallery-caption-access">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 16 16">
                    <rect height="6.5" rx="1.5" width="9" x="3.5" y="7"></rect>
                    <path d="M5 7V4.5a3 3 0 0 1 6 0V7"></path>
                  </svg>
                  {"Confidential"}
                </span>
                <span className="folio-source">{"Concept artwork"}</span>
              </p>
            </div>
          </a>
        </article>
        <article
          className="gallery-case work-item gallery-no-external"
          data-art-index="08"
          data-label="Inno"
          data-project="inno"
          role="listitem"
        >
          <a
            aria-label="Read the Inno career-guidance case study"
            className="gallery-primary"
            href="/work/inno/"
          >
            <div
              className="artifact-art folio-art folio-inno folio-inno-deck"
              data-cover="inno"
            >
              <div aria-hidden="true" className="folio-scene inno-deck-scene">
                <div className="inno-deck-orbit"></div>
                <div className="inno-deck-word">
                  {"inno"}
                  <span lang="zh-Hant">{"鷹路"}</span>
                </div>
                <svg
                  className="inno-deck-path"
                  fill="none"
                  viewBox="0 0 480 350"
                >
                  <path
                    d="M36 244H108C147 244 146 139 188 139H278"
                    stroke="#7b551f"
                    strokeOpacity=".35"
                    strokeWidth="1.4"
                  ></path>
                  <path
                    className="inno-deck-trace"
                    d="M36 244H108C147 244 146 139 188 139H278"
                    stroke="#25294e"
                    strokeWidth="2.4"
                  ></path>
                  <circle cx="42" cy="244" fill="#25294e" r="5"></circle>
                </svg>
                <p className="inno-deck-caption">
                  {"CAREER EXPLORATION"}
                  <br />
                  {"+ HUMAN GUIDANCE"}
                </p>
                <img
                  alt=""
                  className="inno-deck-phone"
                  decoding="async"
                  height="1127"
                  loading="lazy"
                  src="/assets/ea2b11e8d341d8b8.webp"
                  width="600"
                />
              </div>
              <span aria-hidden="true" className="folio-open">
                <svg fill="none" viewBox="0 0 24 24">
                  <path
                    d="M6 18L18 6M6 6h12v12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                  ></path>
                </svg>
              </span>
              <span className="sr-only">
                {
                  "Inno prototype homepage from the supplied pitch deck, presented in a new portfolio composition."
                }
              </span>
            </div>
            <div className="gallery-info">
              <div className="gallery-title">
                <span className="project-number">{"08"}</span>
                <h3>{"Inno"}</h3>
                <span aria-hidden="true" className="gallery-arrow">
                  {"→"}
                </span>
              </div>
              <p className="gallery-caption">
                <span className="gallery-caption-type">
                  {"Career guidance & mentoring · Prototype"}
                </span>
                <span className="folio-source">
                  {"Original prototype screen"}
                </span>
              </p>
            </div>
          </a>
        </article>
        <article
          className="gallery-case work-item gallery-no-external"
          data-art-index="09"
          data-label="ProConnect"
          data-project="proconnect"
          role="listitem"
        >
          <a
            aria-label="Read project summary: ProConnect"
            className="gallery-primary"
            href="/work/proconnect/"
          >
            <div
              className="artifact-art folio-art folio-proconnect"
              data-cover="proconnect"
            >
              <div aria-hidden="true" className="folio-scene pro-scene">
                <span className="pro-word">
                  {"Closer to"}
                  <br />
                  <em>{"possibility."}</em>
                </span>
                <svg className="pro-object" fill="none" viewBox="0 0 480 340">
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="folio-pro-cream"
                      x1="107"
                      x2="230"
                      y1="107"
                      y2="284"
                    >
                      <stop stopColor="#fff9ed"></stop>
                      <stop offset="1" stopColor="#d9c6b1"></stop>
                    </linearGradient>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="folio-pro-red"
                      x1="228"
                      x2="356"
                      y1="120"
                      y2="293"
                    >
                      <stop stopColor="#c95c41"></stop>
                      <stop offset="1" stopColor="#90352c"></stop>
                    </linearGradient>
                  </defs>
                  <ellipse
                    cx="280"
                    cy="278"
                    fill="#a87e60"
                    opacity=".15"
                    rx="128"
                    ry="25"
                  ></ellipse>
                  <g className="pro-link-a" transform="rotate(-32 217 218)">
                    <rect
                      height="155"
                      rx="56"
                      stroke="#a8957e"
                      strokeWidth="32"
                      transform="translate(0 5)"
                      width="114"
                      x="151"
                      y="151"
                    ></rect>
                    <rect
                      height="155"
                      rx="56"
                      stroke="url(#folio-pro-cream)"
                      strokeWidth="32"
                      width="114"
                      x="151"
                      y="146"
                    ></rect>
                    <path
                      d="M172 164C187 150 215 150 229 164"
                      opacity=".7"
                      stroke="#fffaf0"
                      strokeLinecap="round"
                      strokeWidth="3"
                    ></path>
                  </g>
                  <g className="pro-link-b" transform="rotate(-32 326 207)">
                    <rect
                      height="155"
                      rx="55"
                      stroke="#833b2b"
                      strokeWidth="30"
                      transform="translate(0 5)"
                      width="111"
                      x="274"
                      y="114"
                    ></rect>
                    <rect
                      height="155"
                      rx="55"
                      stroke="url(#folio-pro-red)"
                      strokeWidth="30"
                      width="111"
                      x="274"
                      y="110"
                    ></rect>
                    <path
                      d="M287 150C289 115 340 106 362 133"
                      opacity=".75"
                      stroke="#f39070"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                    ></path>
                  </g>
                </svg>
                <span className="pro-corner">{"PEOPLE × OPPORTUNITY"}</span>
              </div>
              <span aria-hidden="true" className="folio-open">
                <svg fill="none" viewBox="0 0 24 24">
                  <path
                    d="M6 18L18 6M6 6h12v12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                  ></path>
                </svg>
              </span>
              <span className="sr-only">
                {"Original portfolio artwork, not a product screenshot."}
              </span>
            </div>
            <div className="gallery-info">
              <div className="gallery-title">
                <span className="project-number">{"09"}</span>
                <h3>{"ProConnect"}</h3>
                <span aria-hidden="true" className="gallery-arrow">
                  {"→"}
                </span>
              </div>
              <p className="gallery-caption">
                <span className="gallery-caption-type">
                  {"Service design · Prototype"}
                </span>
                <span className="folio-source">{"Concept artwork"}</span>
              </p>
            </div>
          </a>
        </article>
      </div>
      <div className="showcase-controls" hidden={true} id="showcase-controls">
        <div className="showcase-position">
          <span className="showcase-count" id="showcase-count">
            {"01 / 09"}
          </span>
          <span id="showcase-current">{"No Rush Be Quick"}</span>
        </div>
        <div aria-hidden="true" className="showcase-progress">
          <span></span>
        </div>
        <div className="showcase-arrows">
          <button
            aria-controls="selected-projects"
            aria-label="Previous project"
            className="showcase-prev"
            type="button"
          >
            <span aria-hidden="true">{"←"}</span>
          </button>
          <button
            aria-controls="selected-projects"
            aria-label="Next project"
            className="showcase-next"
            type="button"
          >
            <span aria-hidden="true">{"→"}</span>
          </button>
        </div>
        <p
          aria-atomic="true"
          aria-live="polite"
          className="sr-only"
          id="showcase-live"
        ></p>
      </div>
      <div className="gallery-more">
        <span>{"Initiatives & context"}</span>
        <a className="secondary-link" href="/work/cantomore/">
          {"CantoMore initiative overview ↗"}
        </a>
        <a className="secondary-link" href="/work/business/">
          {"Inno & ProConnect ↗"}
        </a>
      </div>
    </section>
  );
}
