export function LivingDiagram() {
  return (
    <div aria-hidden="true" className="hero-living-mark">
      <svg id="living-svg" viewBox="0 0 440 176">
        <ellipse
          className="living-outline"
          cx="220"
          cy="77"
          rx="152"
          ry="49"
        ></ellipse>
        <g id="living-wires">
          <path className="living-wire"></path>
          <path className="living-wire"></path>
          <path className="living-wire"></path>
        </g>
        <g
          className="living-node"
          id="living-people"
          transform="translate(77 80)"
        >
          <circle fill="#e6e9dd" r="19" stroke="#b3beb0"></circle>
          <g fill="none" stroke="#495849" strokeWidth="1.5">
            <circle cy="-4" r="4"></circle>
            <path d="M-7 8C-7-1 7-1 7 8"></path>
          </g>
          <text className="living-small" textAnchor="middle" y="36">
            {"people"}
          </text>
        </g>
        <g
          className="living-node"
          id="living-context"
          transform="translate(325 40)"
        >
          <rect
            fill="#e8e7e2"
            height="34"
            rx="7"
            stroke="#a7b3b5"
            width="34"
            x="-17"
            y="-17"
          ></rect>
          <g stroke="#647577" strokeWidth="1.2">
            <path d="M-8-8H8V8H-8Z M0-8V8 M-8 0H8" fill="none"></path>
          </g>
          <text className="living-small" textAnchor="middle" y="35">
            {"systems"}
          </text>
        </g>
        <g
          className="living-node"
          id="living-possibility"
          transform="translate(320 112)"
        >
          <path
            d="M0-17L17 0 0 17-17 0Z"
            fill="#eee1b7"
            stroke="#b8a96e"
          ></path>
          <circle fill="#9a8246" r="4"></circle>
          <text className="living-small" textAnchor="middle" y="35">
            {"possibilities"}
          </text>
        </g>
        <g id="living-center" transform="translate(220 77)">
          <g
            id="living-asterisk"
            stroke="#bb5138"
            strokeLinecap="round"
            strokeWidth="5"
          >
            <path d="M0-18V18M-18 0H18M-13-13L13 13M13-13L-13 13"></path>
          </g>
          <circle fill="#faf9f6" r="6"></circle>
        </g>
        <circle fill="#bd553d" id="living-packet" r="3"></circle>
      </svg>
    </div>
  );
}
