export function ThinkingMap() {
  return (
    <svg
      aria-labelledby="world-title world-desc"
      className="world-map"
      id="world-map"
      role="img"
      viewBox="0 0 1000 660"
    >
      <title id="world-title">
        {"How I work: from a person to a testable experience"}
      </title>
      <desc id="world-desc">
        {
          "An illustrative system map grows around a person. Other people, context and resources appear; assumptions are distinguished from evidence; a prototype returns the question to the person. All four steps are written beside the illustration."
        }
      </desc>
      <defs>
        <pattern
          height="36"
          id="world-grid"
          patternUnits="userSpaceOnUse"
          width="36"
        >
          <circle cx="1" cy="1" fill="#ced9cd" r="1"></circle>
        </pattern>
      </defs>
      <rect
        className="map-grid"
        fill="url(#world-grid)"
        height="660"
        width="1000"
      ></rect>
      <g aria-hidden="true">
        <ellipse
          className="world-contour"
          cx="510"
          cy="300"
          id="world-contour"
          rx="272"
          ry="211"
        ></ellipse>
        <ellipse
          className="world-contour"
          cx="510"
          cy="300"
          rx="347"
          ry="265"
        ></ellipse>
        <g id="world-edges">
          <path className="world-edge" pathLength="1"></path>
          <path className="world-edge" pathLength="1"></path>
          <path className="world-edge" pathLength="1"></path>
          <path className="world-edge" pathLength="1"></path>
          <path className="world-edge" pathLength="1"></path>
          <path className="world-edge" pathLength="1"></path>
          <path className="world-edge" pathLength="1"></path>
          <path className="world-edge" pathLength="1"></path>
          <path className="world-edge" pathLength="1"></path>
          <path className="world-edge" pathLength="1"></path>
          <path className="world-edge" pathLength="1"></path>
        </g>
        <path
          className="world-focus"
          d="M325 202Q510 57 815 190Q928 382 615 557Q294 523 325 202Z"
          id="world-focus"
        ></path>
        <g
          className="world-node central"
          data-world-node="0"
          transform="translate(510 285)"
        >
          <circle className="node-shell" r="55"></circle>
          <g className="node-icon">
            <circle cy="-9" r="11"></circle>
            <path d="M-21 24v-7c0-20 42-20 42 0v7"></path>
          </g>
          <text className="node-name" textAnchor="middle" y="84">
            {"A person"}
          </text>
        </g>
        <g
          className="world-node"
          data-world-node="1"
          transform="translate(780 300)"
        >
          <circle className="node-shell" r="35"></circle>
          <g className="node-icon">
            <path d="M-17-17H17V8H2L-11 20V8H-17Z"></path>
            <path d="M-9-7H9M-9 0H4"></path>
          </g>
          <text className="node-name" textAnchor="middle" y="64">
            {"A need"}
          </text>
        </g>
        <g
          className="world-node"
          data-world-node="2"
          transform="translate(305 120)"
        >
          <circle className="node-shell" r="35"></circle>
          <g className="node-icon">
            <circle cx="-9" cy="-8" r="7"></circle>
            <circle cx="12" cy="-5" r="6"></circle>
            <path d="M-23 19v-5c0-15 28-15 28 0v5M9 6c12-3 19 2 19 12"></path>
          </g>
          <text className="node-name" textAnchor="middle" y="64">
            {"Other people"}
          </text>
        </g>
        <g
          className="world-node"
          data-world-node="3"
          transform="translate(235 390)"
        >
          <circle className="node-shell" r="35"></circle>
          <g className="node-icon">
            <path d="M-18-14H18V17H-18Z M-18-5H18 M-8-19V-10 M8-19V-10 M-9 4H-3 M4 4H10 M-9 10H-3"></path>
          </g>
          <text className="node-name" textAnchor="middle" y="64">
            {"Resources"}
          </text>
        </g>
        <g
          className="world-node"
          data-world-node="4"
          transform="translate(690 110)"
        >
          <circle className="node-shell" r="35"></circle>
          <g className="node-icon">
            <path d="M-20 17H20 M-17 17V-4L0-18 17-4V17 M-6 17V5H6V17"></path>
          </g>
          <text className="node-name" textAnchor="middle" y="64">
            {"Context"}
          </text>
        </g>
        <g
          className="world-node"
          data-world-node="5"
          transform="translate(730 490)"
        >
          <circle className="node-shell" r="35"></circle>
          <g className="node-icon">
            <path d="M-11-11c1-15 26-13 24 1-1 7-13 8-13 17"></path>
            <circle cy="18" r="1"></circle>
          </g>
          <text className="node-name" textAnchor="middle" y="64">
            {"An assumption"}
          </text>
        </g>
        <g
          className="world-node emphasis"
          data-world-node="6"
          transform="translate(450 510)"
        >
          <circle className="node-shell" r="35"></circle>
          <g className="node-icon">
            <path d="M-16-20H9L18-11V21H-16Z M9-20V-10H18 M-9 6L-2 13 10-1"></path>
          </g>
          <text className="node-name" textAnchor="middle" y="64">
            {"Evidence"}
          </text>
        </g>
        <g
          className="world-node emphasis"
          data-world-node="7"
          transform="translate(795 480)"
        >
          <circle className="node-shell" r="35"></circle>
          <g className="node-icon">
            <rect height="34" rx="4" width="44" x="-22" y="-17"></rect>
            <path d="M-22-6H22M-14-11H-12M-8-11H-6 M-13 2H1M-13 8H7"></path>
          </g>
          <text className="node-name" textAnchor="middle" y="64">
            {"A prototype"}
          </text>
        </g>
        <text
          className="world-annotation"
          id="world-note"
          textAnchor="middle"
          x="520"
          y="620"
        >
          {"What matters to them?"}
        </text>
      </g>
    </svg>
  );
}
