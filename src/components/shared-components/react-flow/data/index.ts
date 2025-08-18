import { EEdgeType, EMainTabId, ENodeType, ERatio, NodeDataType } from "@/types";
import type { Edge, Node } from "@xyflow/react";

export const mockProductNode: Node<NodeDataType> = {
    id: "product-node-001",
    type: ENodeType.IMAGE_PRODUCT,
    position: { x: 0, y: 0 },
    data: {
      title: "Product image",
      type: EMainTabId.Products,
      value:
        "https://cdn.shopify.com/s/files/1/0937/2745/7574/files/snowboard_purple_hydrogen.png?v=1754462244",
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

  export const mockEdges: Edge[] = [
    {
      id: "edge-001",
      source: "product-node-001",
      target: "prompting-node-001",
      type: EEdgeType.ANIMATE,
      animated: false,
      style: {
        stroke: "var(--p-color-border-magic-secondary)",
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
        stroke: "var(--p-color-border-magic-secondary)",
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
        stroke: "var(--p-color-border-magic-secondary)",
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
        stroke: "var(--p-color-border-magic-secondary)",
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

  export const mockNodes: Node<NodeDataType>[] = [
    mockProductNode,
  ];

  export const mockData = {
    nodes: mockNodes,
    edges: mockEdges,
  };