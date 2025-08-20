import styles from "./image-node.module.css";

export const ImageError = ({ error }: { error: boolean }) => {
  return <div className={styles.ImageNodeError}>
  <div className="flex flex-col items-center justify-center gap-2">
    <div>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.9998 9.5998C16.6626 9.59982 17.1998 10.1371 17.1998 10.7998L17.1997 16.3998C17.1997 17.0626 16.6624 17.5998 15.9997 17.5998C15.337 17.5998 14.7997 17.0625 14.7997 16.3998L14.7998 10.7998C14.7998 10.137 15.3371 9.59979 15.9998 9.5998Z"
          fill="#EF4D2F"
        />
        <path
          d="M17.5998 20.7998C17.5998 21.6835 16.8835 22.3998 15.9998 22.3998C15.1161 22.3998 14.3998 21.6835 14.3998 20.7998C14.3998 19.9162 15.1161 19.1998 15.9998 19.1998C16.8835 19.1998 17.5998 19.9162 17.5998 20.7998Z"
          fill="#EF4D2F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.1998 15.9998C27.1998 22.1854 22.1854 27.1998 15.9998 27.1998C9.81422 27.1998 4.7998 22.1854 4.7998 15.9998C4.7998 9.81422 9.81422 4.7998 15.9998 4.7998C22.1854 4.7998 27.1998 9.81422 27.1998 15.9998ZM24.7998 15.9998C24.7998 20.8599 20.8599 24.7998 15.9998 24.7998C11.1397 24.7998 7.1998 20.8599 7.1998 15.9998C7.1998 11.1397 11.1397 7.1998 15.9998 7.1998C20.8599 7.1998 24.7998 11.1397 24.7998 15.9998Z"
          fill="#EF4D2F"
        />
      </svg>
    </div>
    <span className="text-sm text-gray-700">
      {error ? "No image available" : "Ad image generation failed"}
    </span>
  </div>
</div>
};