// Props interface for the FlipClock component
export interface FlipClockProps {
  width?: string;
  height?: string;
  padding?: string;
  borderRadius?: string;
  opacity?: number;
  colonWidth?: string;
  colonHeight?: string;
  colonFontSize?: string;
  colonDotSize?: string;
  unitWidth?: string;
  unitHeight?: string;
  unitBorderRadius?: string;
  unitMargin?: string;
  digitFontSize?: string;
}

export enum ENodeType {
  CARD_PARENTS = "CARD::PARENTS",
  CARD_CHILDREN = "CARD::CHILDREN",
  CARD_ROOT = "CARD::ROOT",
  CARD_DATA = "CARD::DATA",
}

export enum EEdgeType {
  SMOOTHSTEP = "SMOOTHSTEP",
  ANIMATE = "ANIMATE",
  DISABLED = "DISABLED",
}

export type NodeType = {
  id: string;
  title?: string;
  content?: string;
  type: ENodeType;
  position?: { x: number; y: number };
  dimensions?: { width: number; height: number };
};

export type EdgeType = {
  id: string;
  source: string;
  target: string;
};

export enum EMainTabId {
  Products = "products",
  AdInspirations = "ad-inspirations",
  AdResult = "ad-result",
  SavedLibrary = "saved-library",
  BrandKit = "brand-kit",
}

export enum ERatio {
  SQUARE = "1_1",
  PORTRAIT_9_16 = "9_16",
  LANDSCAPE_16_9 = "16_9",
  PORTRAIT_4_5 = "4_5",
}

export type EducationType = {
  university?: string;
  degree?: string;
  field_of_study?: string;
  start_date?: string;
  end_date?: string;
  description?: string;
  number_of_years?: number;
}

export type UserData = {
  name?: string;
  age?: number;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zip?: string;
  gender?: string;
  role?: string;
  occupation?: string;
  interests?: string;
  hobbies?: string;
  education?: EducationType;
  skills?: string;
  languages?: string;
  affiliations?: string;
  memberships?: string;
  company?: string;
  awards?: string;
  publications?: string;
  projects?: string;
}

export type NodeDataType = {
  image_id?: string;
  input_id?: string;
  title?: string;
  type?: ENodeType;
  value?: string;
  loading?: boolean;
  origin_mask_url?: string;
  ratio?: ERatio;
  tags?: string;
  is_error?: boolean;
  created_at?: string;
  updated_at?: string | null;
  disabled?: boolean;
  parent_node_id?: string;
  size?: { width: number; height: number };
  user_data?: UserData;
  bookmark?: boolean;
};

export const CARD_IMAGE_OFFSET_X = 40;
export const CARD_IMAGE_OFFSET_Y = 80;
export const GAP_NODE = 120;
export const CARD_PROMPTING_WIDTH = 410;
export const CARD_PROMPTING_HEIGHT = 270;
export const CARD_IMAGE_HEIGHT = 240;
export const CARD_IMAGE_WIDTH = 240;
export const CARD_IMAGE_GAP_X = 15;
export const CARD_IMAGE_GAP_Y = 60;

export const DEFAULT_HANDLE_STYLE = {
  width: 10,
  height: 10,
  border: "2px solid var(--p-color-border-magic-secondary)",
  background: "var(--p-color-input-bg-surface)",
  zIndex: 1,
};

export type ImageItemType = {
  type: ENodeType;
  data: {
    id: string;
    url: string;
    alt?: string;
    name?: string;
    intent_type?: {
      name: string;
    };
    industry?: {
      name?: string;
    };
  };
};