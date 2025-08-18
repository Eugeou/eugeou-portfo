import { BaseEdge, getSmoothStepPath, Position } from "@xyflow/react";

export const AnimateEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
}: {
  id: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
}) => {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition: Position.Right,
    targetX,
    targetY,
    targetPosition: Position.Left,
    borderRadius: 10,
  });

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        style={{
          stroke: "rgba(148, 116, 255, 0.2)",
          strokeWidth: 2,
        }}
      />
      <defs>
        <radialGradient
          id="data-transfer-gradient"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" stopColor="white"></stop>
          <stop offset="40%" stopColor="white"></stop>
          <stop offset="100%" stopColor="rgba(255,255,255,0.25)"></stop>
        </radialGradient>
        <mask id={`data-transfer-mask-xy-edge__${id}`}>
          <circle r="50" fill="url(#data-transfer-gradient)">
            <animateMotion
              dur="833ms"
              repeatCount="indefinite"
              path={edgePath}
            ></animateMotion>
          </circle>
        </mask>
      </defs>
      <BaseEdge
        id={id}
        path={edgePath}
        mask={`url(#data-transfer-mask-xy-edge__${id})`}
        style={{
          stroke: "var(--p-color-border-magic-secondary)",
          strokeWidth: 2,
        }}
      />
    </>
  );
};
