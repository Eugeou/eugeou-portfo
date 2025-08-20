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
import ImageSlider from "./image-slider";
import { ToolBar } from "./toolbar";
import { LockIcon } from "./lock-icon";
import { EducationNode } from "../data-nodes/education-node";
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

  const handleClick = () => {};

  const renderImageContent = () => {
    console.log("ImageNode renderImageContent:", { data, id });

    //if (data.is_error || error) return <ImageError error={error} />;
    if (data.value && data.type !== ENodeType.CARD_DATA) {
      console.log("Rendering image with value:", data.value);
      return (
        <div className={styles.ImageNodeImgContainer}>
          <ImageSlider
            imageUrls={{
              before: data.value.startsWith("/")
                ? data.value
                : `/${data.value}`,
              after: "",
            }}
            width={data.size?.width || 160}
            height={data.size?.height || 160}
            scaleXPercent={100}
          />
        </div>
      );
    }
    if (data.type === ENodeType.CARD_DATA) {
      console.log("Rendering CARD_DATA node with user_data:", data.user_data);
      return (
        <div className={styles.ImageNodeImgContainer}>
          {data.user_data && (
            <EducationNode data={data.user_data.education as EducationType} />
          )}
        </div>
      );
    }
    console.log("Rendering ImageEmpty for data:", data);
    return <ImageEmpty data={data as unknown as ImageItemType} />;
  };

  return (
    <div
      className={`nopan h-[160px] w-[160px]  ${styles.ImageNodeContainer} ${
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
      {data.value && data.type === ENodeType.CARD_PARENTS && (
        <ToolBar data={data as NodeDataType} />
      )}
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
