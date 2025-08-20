import { ENodeType, ERatio, NodeDataType } from "@/types";
import type { Node } from "@xyflow/react";

export const aboutMeEducationParentsNode: Node<NodeDataType> = {
    id: "about-me-education-parents-node",
    type: ENodeType.CARD_PARENTS,
    position: { x: 400, y: 0 },
    data: {
      title: "Education",
      type: ENodeType.CARD_PARENTS,
      value: "assets/education/education.png",
    //   ratio: ERatio.SQUARE,
    //   origin_mask_url: "https://example.com/mask-001.png",
    //   tags: "firegroup, technology, company",
    //   created_at: "2024-01-15T10:30:00Z",
    //   updated_at: "2024-01-15T10:30:00Z",
    //   disabled: false,
      size: { width: 100, height: 100 },
    },
    selected: false,
  };
  
  export const aboutMeEducationChildrenNode: Node<NodeDataType> = {
    id: "about-me-education-children-node",
    type: ENodeType.CARD_PARENTS,
    position: { x: 400, y: 0 },
    data: {
      title: "Education",
      type: ENodeType.CARD_DATA,
      value: "assets/education/education.png",
      size: { width: 100, height: 100 },
      user_data: {
        education: {
            university: "The University of Information Technology",
            degree: "Bachelor of Software Engineering",
            field_of_study: "Software Engineering",
            start_date: "2021-09-05",
            end_date: "2025-09-05",
            description: "I studied software engineering at the University of Information Technology. I learned about the domains of software engineering and how to build a successful software.",
            number_of_years: 4,
        }
      }
    },
    selected: false,
  };
  