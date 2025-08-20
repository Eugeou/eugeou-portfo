import { Handle, NodeProps, Position } from "@xyflow/react";
import { DEFAULT_HANDLE_STYLE, ENodeType, ImageItemType, NodeDataType } from "@/types";
import { useState } from "react";
import ButtonIcon from "../button-icon";
import styles from "./image-node.module.css";
import { dataEdges } from "../../data";
import Image from "next/image";
import { Tooltip, Button } from "@/components/shared-components/elements";
import { ImageError } from "./image-error";
import { ImageEmpty } from "./image-empty";
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
  const [error, setError] = useState(false);

  const handleClick = () => {};

  const renderImageContent = () => {
    if (data.is_error || error)
      return <ImageError error={error} />        
    if (data.value)
      return (
        <div className={styles.ImageNodeImgContainer}>
          <Image
            src={data.value.startsWith('/') ? data.value : `/${data.value}`}
            alt="Dropped image"
            width={240}
            height={240}
            className={styles.ImageNodeImg}
            onError={() => setError(true)}
          />
        </div>
      );
    return <ImageEmpty data={data as unknown as ImageItemType} />
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
        <div
          className={styles.ImageNodeActions}
        >
          <div className="rounded-lg shadow-md bg-white">
            <div className="flex gap-2">
              <Tooltip content="View full screen">
                <div className={styles.ImageNodeActionsButton}>
                  <Button variant="tertiary">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.0551 2.77783C12.5949 2.77783 12.2218 3.15093 12.2218 3.61117C12.2218 4.0714 12.5949 4.4445 13.0551 4.4445L14.3766 4.4445L10.7992 8.02191C10.4738 8.34735 10.4738 8.87498 10.7992 9.20042C11.1246 9.52586 11.6523 9.52586 11.9777 9.20042L15.5551 5.62301L15.5551 6.9445C15.5551 7.40474 15.9282 7.77783 16.3885 7.77783C16.8487 7.77783 17.2218 7.40474 17.2218 6.9445L17.2218 3.61117C17.2218 3.15093 16.8487 2.77783 16.3885 2.77783H13.0551Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6.94401 17.2223C7.40425 17.2223 7.77734 16.8492 7.77734 16.3889C7.77734 15.9287 7.40425 15.5556 6.94401 15.5556H5.62252L9.19993 11.9782C9.52537 11.6528 9.52537 11.1251 9.19993 10.7997C8.8745 10.4743 8.34686 10.4743 8.02142 10.7997L4.44401 14.3771V13.0556C4.44401 12.5954 4.07091 12.2223 3.61068 12.2223C3.15044 12.2223 2.77734 12.5954 2.77734 13.0556V16.3889C2.77734 16.8492 3.15044 17.2223 3.61068 17.2223H6.94401Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Button>
                </div>
              </Tooltip>
              <Tooltip
                content={data.bookmark ? "Unsave" : "Save"}
              >
                <div className={styles.ImageNodeActionsButton}>
                  <Button variant="tertiary">
                    {data.bookmark ? (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.6367 16.0059L15.624 16.168C15.51 16.9027 14.633 17.2581 14.04 16.8096L13.918 16.7012L10.7168 13.3926C10.3238 12.9865 9.6723 12.9865 9.2793 13.3926L6.07812 16.7012L5.95605 16.8096C5.36311 17.2581 4.48608 16.9027 4.37207 16.168L4.35938 16.0059V3.26562C4.35938 2.74795 4.75271 2.32184 5.25684 2.27051L5.35938 2.26562H14.6367L14.7393 2.27051C15.2434 2.32184 15.6367 2.74795 15.6367 3.26562V16.0059Z"
                          fill="#8051FF"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.85938 14.7686L8.20117 12.3496L8.39258 12.1709C9.31855 11.3933 10.6775 11.3933 11.6035 12.1709L11.7949 12.3496L14.1367 14.7686V3.76562H5.85938V14.7686ZM15.6367 16.0059L15.624 16.168C15.51 16.9027 14.633 17.2581 14.04 16.8096L13.918 16.7012L10.7168 13.3926C10.3238 12.9865 9.6723 12.9865 9.2793 13.3926L6.07812 16.7012L5.95605 16.8096C5.36311 17.2581 4.48608 16.9027 4.37207 16.168L4.35938 16.0059V3.26562C4.35938 2.74795 4.75271 2.32184 5.25684 2.27051L5.35938 2.26562H14.6367L14.7393 2.27051C15.2434 2.32184 15.6367 2.74795 15.6367 3.26562V16.0059Z"
                          fill="currentColor"
                        />
                      </svg>
                    )}
                  </Button>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
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
            <Tooltip
              content={
                data.type === ENodeType.CARD_PARENTS
                  ? "Image locked"
                  : "Change image"
              }
              width="default"
            >
              <ButtonIcon>
                {data.type === ENodeType.CARD_PARENTS ? (
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.6751 12.7319C10.0786 12.4985 10.3501 12.0622 10.3501 11.5625C10.3501 10.8169 9.74568 10.2125 9.0001 10.2125C8.25451 10.2125 7.6501 10.8169 7.6501 11.5625C7.6501 12.0622 7.92158 12.4985 8.3251 12.7319V13.1375C8.3251 13.5103 8.6273 13.8125 9.0001 13.8125C9.37289 13.8125 9.6751 13.5103 9.6751 13.1375V12.7319Z"
                      fill="#8A8A8A"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.6251 7.37256V7.0625C5.6251 5.19854 7.13614 3.6875 9.0001 3.6875C10.8641 3.6875 12.3751 5.19854 12.3751 7.0625V7.37256C13.5396 7.67229 14.4001 8.72941 14.4001 9.9875V13.5875C14.4001 15.0787 13.1913 16.2875 11.7001 16.2875H6.3001C4.80893 16.2875 3.6001 15.0787 3.6001 13.5875V9.9875C3.6001 8.72941 4.46057 7.67229 5.6251 7.37256ZM6.9751 7.0625C6.9751 5.94412 7.88172 5.0375 9.0001 5.0375C10.1185 5.0375 11.0251 5.94412 11.0251 7.0625V7.2875H6.9751V7.0625ZM4.9501 9.9875C4.9501 9.24192 5.55451 8.6375 6.3001 8.6375H11.7001C12.4457 8.6375 13.0501 9.24192 13.0501 9.9875V13.5875C13.0501 14.3331 12.4457 14.9375 11.7001 14.9375H6.3001C5.55451 14.9375 4.9501 14.3331 4.9501 13.5875V9.9875Z"
                      fill="#8A8A8A"
                    />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2829 5.17004C12.5465 4.90693 12.9735 4.90683 13.237 5.17004L15.029 6.96204L15.0749 7.01282C15.2909 7.27779 15.2757 7.66903 15.029 7.91614C14.7819 8.16302 14.3907 8.17809 14.1257 7.96204L14.0749 7.91614L13.4587 7.29993C13.0309 9.93447 10.7472 11.9462 7.99192 11.9464C5.94696 11.9463 4.16112 10.8379 3.20188 9.1925C3.01424 8.87056 3.12325 8.4565 3.44504 8.26868C3.76682 8.08149 4.18008 8.19044 4.36789 8.51184C5.0952 9.7595 6.44666 10.5958 7.99192 10.5958C10.0103 10.5956 11.6946 9.16881 12.0925 7.26868L11.446 7.91614C11.1825 8.17947 10.7545 8.1795 10.4909 7.91614C10.2277 7.65263 10.2278 7.22558 10.4909 6.96204L12.2829 5.17004ZM8.05442 0.553833C10.0993 0.553992 11.8853 1.66239 12.8445 3.30774C13.0318 3.62964 12.923 4.04382 12.6013 4.23157C12.2796 4.41892 11.8664 4.30963 11.6784 3.9884C10.9512 2.74082 9.59956 1.90458 8.05442 1.90442C6.07838 1.90451 4.42232 3.27205 3.9802 5.11243L4.55442 4.53918L4.6052 4.49329C4.87019 4.27733 5.26143 4.29247 5.50852 4.53918C5.75538 4.78635 5.77063 5.17847 5.55442 5.44348L5.50852 5.49426L3.71653 7.28528C3.45301 7.5486 3.02599 7.54852 2.76242 7.28528L0.970433 5.49426C0.70715 5.2307 0.707093 4.80272 0.970433 4.53918C1.23395 4.27573 1.66191 4.27587 1.92551 4.53918L2.58567 5.19934C3.01379 2.56508 5.29931 0.553926 8.05442 0.553833Z"
                      fill="#8A8A8A"
                    />
                  </svg>
                )}
              </ButtonIcon>
            </Tooltip>
          {/* )} */}
        </div>
      )}
      <div className={styles.ImageNodeContent}>
        {renderImageContent()}
      </div>
    </div>
  );
}
