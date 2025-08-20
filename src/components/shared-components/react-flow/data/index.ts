import { ENodeType, ERatio, NodeDataType } from "@/types";
import type { Node } from "@xyflow/react";
import { dataEdges } from "./edge";
import {
  aboutMeEducationChildrenNode,
  aboutMeEducationParentsNode,
} from "./education-node";

export const aboutMeRootNode: Node<NodeDataType> = {
  id: "about-me-root-node",
  type: ENodeType.CARD_PARENTS,
  position: { x: 100, y: 300 },
  data: {
    title: "Eugeous",
    type: ENodeType.CARD_ROOT,
    value: "/assets/avatar-pixel.png",
    image_id: "",
    ratio: ERatio.SQUARE,
    origin_mask_url: "https://example.com/mask-001.png",
    tags: "snowboard, purple, hydrogen",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:30:00Z",
    disabled: false,
    size: { width: 160, height: 160 },
  },
  selected: true,
};

export const aboutMeRootNode2: Node<NodeDataType> = {
  id: "about-me-root-node-2",
  type: ENodeType.CARD_PARENTS,
  position: { x: 400, y: 100 },
  data: {
    title: "Firegroup Technology",
    type: ENodeType.CARD_PARENTS,
    value: "/assets/company/firegroup.png",
    image_id: "",
    ratio: ERatio.SQUARE,
    origin_mask_url: "https://example.com/mask-001.png",
    tags: "firegroup, technology, company",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:30:00Z",
    disabled: false,
    size: { width: 160, height: 160 },
  },
  selected: false,
};

export const dataNodes: Node<NodeDataType>[] = [
  aboutMeRootNode,
  //aboutMeRootNode2,
  aboutMeEducationParentsNode,
  aboutMeEducationChildrenNode,
];

export const mockData = {
  nodes: dataNodes,
  edges: dataEdges,
};
