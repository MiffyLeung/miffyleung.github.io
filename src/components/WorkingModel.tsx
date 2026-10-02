export function WorkingModel() {
  return (
    <svg
      aria-labelledby="atlas-title atlas-desc"
      className="atlas-svg"
      role="img"
      viewBox="0 0 420 420"
    >
      <title id="atlas-title">{"How the picture grew"}</title>
      <desc id="atlas-desc">
        {
          "Purpose, agency, viability, participation and organisational constraints are connected perspectives. All five experiences are written out alongside this conceptual map."
        }
      </desc>
      <path
        className="atlas-edge"
        d="M210 191 Q84 191 84 80"
        pathLength="1"
      ></path>
      <path
        className="atlas-trace"
        d="M210 191 Q84 191 84 80"
        data-atlas-edge="0"
        pathLength="1"
      ></path>
      <path
        className="atlas-edge"
        d="M210 191 Q338 191 338 80"
        pathLength="1"
      ></path>
      <path
        className="atlas-trace"
        d="M210 191 Q338 191 338 80"
        data-atlas-edge="1"
        pathLength="1"
      ></path>
      <path
        className="atlas-edge"
        d="M210 191 Q345 191 345 276"
        pathLength="1"
      ></path>
      <path
        className="atlas-trace"
        d="M210 191 Q345 191 345 276"
        data-atlas-edge="2"
        pathLength="1"
      ></path>
      <path
        className="atlas-edge"
        d="M210 191 Q210 191 210 355"
        pathLength="1"
      ></path>
      <path
        className="atlas-trace"
        d="M210 191 Q210 191 210 355"
        data-atlas-edge="3"
        pathLength="1"
      ></path>
      <path
        className="atlas-edge"
        d="M210 191 Q68 191 68 276"
        pathLength="1"
      ></path>
      <path
        className="atlas-trace"
        d="M210 191 Q68 191 68 276"
        data-atlas-edge="4"
        pathLength="1"
      ></path>
      <g
        className="atlas-node"
        data-atlas-node="0"
        transform="translate(84 80)"
      >
        <circle r="31"></circle>
        <text textAnchor="middle" y="5">
          {"01"}
        </text>
        <text className="atlas-label" textAnchor="middle" y="49">
          {"Purpose"}
        </text>
      </g>
      <g
        className="atlas-node"
        data-atlas-node="1"
        transform="translate(338 80)"
      >
        <circle r="31"></circle>
        <text textAnchor="middle" y="5">
          {"02"}
        </text>
        <text className="atlas-label" textAnchor="middle" y="49">
          {"Agency"}
        </text>
      </g>
      <g
        className="atlas-node"
        data-atlas-node="2"
        transform="translate(345 276)"
      >
        <circle r="31"></circle>
        <text textAnchor="middle" y="5">
          {"03"}
        </text>
        <text className="atlas-label" textAnchor="middle" y="49">
          {"Viability"}
        </text>
      </g>
      <g
        className="atlas-node"
        data-atlas-node="3"
        transform="translate(210 355)"
      >
        <circle r="31"></circle>
        <text textAnchor="middle" y="5">
          {"04"}
        </text>
        <text className="atlas-label" textAnchor="middle" y="49">
          {"Participation"}
        </text>
      </g>
      <g
        className="atlas-node"
        data-atlas-node="4"
        transform="translate(68 276)"
      >
        <circle r="31"></circle>
        <text textAnchor="middle" y="5">
          {"05"}
        </text>
        <text className="atlas-label" textAnchor="middle" y="49">
          {"Constraints"}
        </text>
      </g>
      <g className="atlas-center">
        <circle cx="210" cy="191" r="58"></circle>
        <text textAnchor="middle" x="210" y="186">
          {"My working"}
        </text>
        <text textAnchor="middle" x="210" y="207">
          {"model"}
        </text>
      </g>
    </svg>
  );
}
