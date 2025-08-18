import { BaseEdge, getSmoothStepPath, Position } from "@xyflow/react";

export const DisabledEdge = ({
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
    <BaseEdge
      id={id}
      path={edgePath}
      style={{
        // stroke: "var(--p-color-border-magic-secondary)",
        stroke: "var(--p-color-border-tertiary)",
        strokeWidth: 2,
      }}
    />
  );
};
