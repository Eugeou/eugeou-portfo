import {
  EEdgeType,
  ENodeType,
  ERatio,
  NodeDataType,
} from "@/types";
import type { Edge, Node } from "@xyflow/react";

export const aboutMeRootNode: Node<NodeDataType> = {
  id: "about-me-root-node",
  type: ENodeType.CARD_ROOT,
  position: { x: 100, y: 100 },
  data: {
    title: "Product image",
    type: ENodeType.CARD_PARENTS,
    value: "assets/antd.png",
    image_id: "",
    ratio: ERatio.SQUARE,
    origin_mask_url: "https://example.com/mask-001.png",
    tags: "snowboard, purple, hydrogen",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:30:00Z",
    disabled: false,
  },
  selected: true,
};

export const aboutMeRootNode2: Node<NodeDataType> = {
  id: "about-me-root-node-2",
  type: ENodeType.CARD_PARENTS,
  position: { x: 400, y: 0 },
  data: {
    title: "Firegroup Technology",
    type: ENodeType.CARD_PARENTS,
    value: "assets/company/firegroup.png",
    image_id: "",
    ratio: ERatio.SQUARE,
    origin_mask_url: "https://example.com/mask-001.png",
    tags: "firegroup, technology, company",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:30:00Z",
    disabled: false,
  },
  selected: false,
};

export const dataEdges: Edge[] = [
  {
    id: "edge-001",
    source: "about-me-root-node",
    target: "about-me-root-node-2",
    type: EEdgeType.ANIMATE,
    animated: true,
    style: {
      stroke: "#ccc ",
      strokeWidth: 2,
    },
  },
  {
    id: "edge-002",
    source: "asset-type-node-001",
    target: "prompting-node-001",
    type: EEdgeType.ANIMATE,
    animated: false,
    style: {
      stroke: "#ff8c00",
      strokeWidth: 2,
    },
  },
  {
    id: "edge-003",
    source: "background-node-001",
    target: "prompting-node-001",
    type: EEdgeType.SMOOTHSTEP,
    animated: false,
    style: {
      stroke: "#ff8c00",
      strokeWidth: 2,
    },
  },
  {
    id: "edge-004",
    source: "prompting-node-001",
    target: "ad-result-node-001",
    type: EEdgeType.ANIMATE,
    animated: true,
    style: {
      stroke: "var(--p-color-border-success)",
      strokeWidth: 3,
    },
  },
  {
    id: "edge-005",
    source: "brand-kit-node-001",
    target: "ad-result-node-001",
    type: EEdgeType.SMOOTHSTEP,
    animated: false,
    style: {
      stroke: "#ff8c00",
      strokeWidth: 2,
      strokeDasharray: "5,5",
    },
  },
  {
    id: "edge-006",
    source: "ad-result-node-001",
    target: "ad-inspiration-node-001",
    type: EEdgeType.DISABLED,
    animated: false,
    style: {
      stroke: "var(--p-color-border-disabled)",
      strokeWidth: 1,
      opacity: 0.5,
    },
  },
  {
    id: "edge-007",
    source: "prompting-node-001",
    target: "ad-result-node-001",
    type: EEdgeType.ANIMATE,
    animated: true,
    style: {
      stroke: "var(--p-color-border-success)",
      strokeWidth: 3,
    },
  },
  {
    id: "edge-008",
    source: "prompting-node-001",
    target: "ad-result-node-006",
    type: EEdgeType.ANIMATE,
    animated: true,
    style: {
      stroke: "var(--p-color-border-success)",
      strokeWidth: 3,
    },
  },
  {
    id: "edge-009",
    source: "prompting-node-001",
    target: "ad-result-node-008",
    type: EEdgeType.ANIMATE,
    animated: true,
    style: {
      stroke: "var(--p-color-border-success)",
      strokeWidth: 3,
    },
  },
];

export const dataNodes: Node<NodeDataType>[] = [aboutMeRootNode, aboutMeRootNode2];

export const mockData = {
  nodes: dataNodes,
  edges: dataEdges,
};
