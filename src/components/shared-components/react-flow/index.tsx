import {
  Background,
  BackgroundVariant,
  Panel,
  ReactFlow,
  //useReactFlow,
  Viewport,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback, useMemo } from "react";
import { EEdgeType, ENodeType } from "@/types";
import { AnimateEdge } from "./components/edge/animate-edge";
import { DisabledEdge } from "./components/edge/disabled-edge";
import { SmoothstepEdge } from "./components/edge/smoothstep-edge";
import { mockData } from "./data";
import { Controls } from "./components/controls";
import ImageNode from "./components/node/image-nodes";
import { usePopoverControls } from "@/hooks/use-popover-controls";
import { useDnD } from "./provider/dnd-provider";

export default function CustomReactFlow() {
  //const { getNodes } = useReactFlow();
  //const nodes = getNodes();
  const popoverControls = usePopoverControls();
  const [item, setItem] = useDnD();

  const edgeTypes = useMemo(() => {
    return {
      [EEdgeType.SMOOTHSTEP]: SmoothstepEdge,
      [EEdgeType.ANIMATE]: AnimateEdge,
      [EEdgeType.DISABLED]: DisabledEdge,
    };
  }, []);

  const nodeTypes = useMemo(() => {
    return {
      [ENodeType.CARD_PARENTS]: ImageNode,
    };
  }, []);

  // const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
  //   event.preventDefault();
  //   if (!item) return;
  //   handleChangeImage(item as ImageItemType);
  // };
  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    if (!item) return;
    setItem(item);
    event.dataTransfer.setData("text/plain", item.data.url);
    event.dataTransfer.effectAllowed = "move";
  };
  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onViewportChange = useCallback(
    (viewport: Viewport) => {
      popoverControls.triggerAllPopoverControls();
      console.log("viewport", viewport);
    },
    [popoverControls]
  );

  return (
    <div className="w-full h-[100svh] flex-1 flex relative bg-[var(--p-color-bg-fill-surface-active)]">
      <ReactFlow
        nodes={mockData.nodes}
        edges={mockData.edges}
        //onNodesChange={onNodesChange}
        //onEdgesChange={onEdgesChange}
        panOnScroll
        selectionOnDrag={false}
        nodesConnectable={false}
        nodesDraggable={false}
        panOnDrag={[0, 1, 2]}
        proOptions={{
          hideAttribution: true,
        }}
        edgeTypes={edgeTypes}
        nodeTypes={nodeTypes}
        minZoom={0.5}
        maxZoom={2.5}
        deleteKeyCode={[]}
        //onDrop={onDrop}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        // onWheel={onWheel}
        onViewportChange={onViewportChange}
        draggable={true}
      >
        <Background variant={BackgroundVariant.Dots} />

        <Panel
          position="bottom-left"
          style={{
            margin: 0,
            width: "100%",
            padding: "0 60px 10px 12px",
          }}
        >
          <Controls />
        </Panel>
      </ReactFlow>
    </div>
  );
}
