import { ENodeType, ERatio, NodeDataType } from "@/types";
import type { Node } from "@xyflow/react";

export const aboutMeEducationParentsNode: Node<NodeDataType> = {
  id: "about-me-education-parents-node",
  type: ENodeType.CARD_PARENTS,
  position: { x: 400, y: 200 },
  data: {
    title: "Education",
    type: ENodeType.CARD_PARENTS,
    value: "/assets/education.png",
    ratio: ERatio.SQUARE,
    origin_mask_url: "https://example.com/mask-001.png",
    tags: "education, university, degree",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:30:00Z",
    disabled: false,
    size: { width: 160, height: 160 },
  },
  selected: false,
};

export const aboutMeEducationChildrenNode: Node<NodeDataType> = {
  id: "about-me-education-children-node",
  type: ENodeType.CARD_PARENTS,
  position: { x: 720, y: -100 },
  data: {
    title: "My Education",
    type: ENodeType.CARD_DATA,
    size: { width: 150, height: 600 },
    user_data: {
      education: {
        university: "The University of Information Technology",
        degree: "Bachelor of Software Engineering",
        field_of_study: "Software Engineering",
        start_date: "2021-09-05",
        end_date: "2025-09-05",
        description:
          "I studied software engineering at the University of Information Technology. I learned about the domains of software engineering and how to build a successful software.",
        number_of_years: 4,
      },
    },
  },
  selected: false,
};
