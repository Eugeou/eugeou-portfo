import { Handle, NodeProps, Position } from "@xyflow/react";
import {
  DEFAULT_HANDLE_STYLE,
  EducationType,
  ENodeType,
  ImageItemType,
  NodeDataType,
} from "@/types";
import styles from "./image-node.module.css";
import { dataEdges } from "../../../data/edge";
import { ImageEmpty } from "./image-empty";
import Image from "next/image";
import { LockIcon } from "./lock-icon";
import { EducationNode } from "../data-nodes/education-node";
import { useState } from "react";
type Props = NodeProps & {
  data: NodeDataType;
};

export default function ImageNode({
  id,
  data,
  isConnectable,
  selected,
}: Props) {
  const hasRightEdge = dataEdges.some((edge) => edge.source === id);
  const hasLeftEdge = dataEdges.some((edge) => edge.target === id);
  const [showToolbar, setShowToolbar] = useState(false);
  const handleClick = () => {
    setShowToolbar(!showToolbar);
  };

  const renderImageContent = () => {
    if (data.value && data.type !== ENodeType.CARD_DATA) {
      return (
        <div className={styles.ImageNodeImgContainer}>
          <Image
            src={data.value.startsWith("/") ? data.value : `/${data.value}`}
            width={data.size?.width || 160}
            height={data.size?.height || 160}
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>
      );
    }
    if (data.type === ENodeType.CARD_DATA) {
      return (
        <div className={styles.ImageNodeImgContainer}>
          {data.user_data && (
            <EducationNode data={data.user_data.education as EducationType} />
          )}
        </div>
      );
    }
    return <ImageEmpty data={data as unknown as ImageItemType} />;
  };

  return (
    <div
      className={`nopan h-[${data.size?.height}px] w-[${data.size?.width}px]  ${
        styles.ImageNodeContainer
      } ${
        data.value || data.loading || data.is_error
          ? styles.ImageNodeLoading
          : ""
      } ${selected ? styles.ImageNodeSelected : ""}`}
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
      onClick={handleClick}
    >
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        style={{
          ...DEFAULT_HANDLE_STYLE,
          borderColor: "var(--p-color-border-magic-secondary)",
          opacity: !hasLeftEdge ? 0 : 1,
        }}
      />
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        style={{
          ...DEFAULT_HANDLE_STYLE,
          borderColor: "var(--p-color-border-magic-secondary)",
          opacity: !hasRightEdge ? 0 : 1,
        }}
      />
      {/* {data.value && data.type === ENodeType.CARD_PARENTS && showToolbar && (
        <ToolBar data={data as NodeDataType} />
      )} */}
      {data.title && (
        <div className={styles.ImageNodeHeader}>
          {data.loading ? (
            <div
              className={`${styles.ImageNodeLoadingMessage} ${styles.ImageNodeLoadingMessageOverlap}`}
            ></div>
          ) : (
            <span className={styles.ImageNodeTitle}>{data.title}</span>
          )}

          {/* {data.type !== ENodeType.CARD_ROOT && ( */}
          <LockIcon data={data} />
          {/* )} */}
        </div>
      )}
      <div className={styles.ImageNodeContent}>{renderImageContent()}</div>
    </div>
  );
}
