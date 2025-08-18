import { useReactFlow, useStore } from "@xyflow/react";
import { useCallback } from "react";
import { shallow } from "zustand/shallow";

export const Controls = () => {
  const { zoomIn, zoomOut, setViewport } = useReactFlow();
  const { minZoomReached, maxZoomReached } = useStore(
    (state) => ({
      minZoomReached: state.transform[2] <= state.minZoom,
      maxZoomReached: state.transform[2] >= state.maxZoom,
    }),
    shallow,
  );

  const handleZoomOut = useCallback(() => {
    zoomOut({
      duration: 300,
    });
  }, [zoomOut]);

  const handleZoomIn = useCallback(() => {
    zoomIn({
      duration: 300,
    });
  }, [zoomIn]);

  const handleDefaultView = useCallback(() => {
    setViewport(
      {
        x: 0,
        y: 0,
        zoom: 1,
      },
      {
        duration: 300,
        interpolate: "smooth",
      },
    );
  }, [setViewport]);

  return (
    <div className="flex items-center gap-3">
      <div className="flex">
        <button
          className="px-3 py-2 border border-gray-300 rounded-l-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={minZoomReached}
          onClick={handleZoomOut}
          title="Zoom out"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 4a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V5a1 1 0 011-1z"/>
          </svg>
        </button>
        <button
          className="px-3 py-2 border border-gray-300 border-l-0 rounded-r-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={maxZoomReached}
          onClick={handleZoomIn}
          title="Zoom in"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M4 10a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"/>
          </svg>
        </button>
      </div>

      <button
        onClick={handleDefaultView}
        className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
        title="Default view"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.67568 5.24999C8.67568 4.85817 8.35804 4.54053 7.96622 4.54053C7.57439 4.54053 7.25676 4.85817 7.25676 5.24999L7.25676 5.90207L4.21112 2.85643C3.93406 2.57937 3.48486 2.57937 3.2078 2.85643C2.93073 3.1335 2.93073 3.5827 3.2078 3.85976L6.25343 6.9054L5.60135 6.9054C5.20953 6.9054 4.89189 7.22303 4.89189 7.61485C4.89189 8.00668 5.20953 8.32431 5.60135 8.32431L7.96622 8.32431C8.35804 8.32431 8.67568 8.00668 8.67568 7.61485L8.67568 5.24999Z"
            fill="currentColor"
          />
          <path
            d="M11.6757 14.3987C11.6757 14.7905 11.9933 15.1081 12.3851 15.1081C12.7769 15.1081 13.0946 14.7905 13.0946 14.3987L13.0946 13.7466L16.1402 16.7922C16.4173 17.0693 16.8665 17.0693 17.1435 16.7922C17.4206 16.5152 17.4206 16.066 17.1435 15.7889L14.0979 12.7433L14.75 12.7433C15.1418 12.7433 15.4594 12.4256 15.4594 12.0338C15.4594 11.642 15.1418 11.3243 14.75 11.3243L12.3851 11.3243C11.9933 11.3243 11.6757 11.642 11.6757 12.0338L11.6757 14.3987Z"
            fill="currentColor"
          />
          <path
            d="M5.60155 11.3243C5.20973 11.3243 4.89209 11.642 4.89209 12.0338C4.89209 12.4256 5.20973 12.7432 5.60155 12.7432L6.25363 12.7432L3.208 15.7889C2.93094 16.0659 2.93094 16.5151 3.208 16.7922C3.48506 17.0693 3.93426 17.0693 4.21132 16.7922L7.25696 13.7466L7.25696 14.3986C7.25696 14.7905 7.57459 15.1081 7.96642 15.1081C8.35824 15.1081 8.67588 14.7905 8.67588 14.3986L8.67588 12.0338C8.67588 11.642 8.35824 11.3243 7.96642 11.3243L5.60155 11.3243Z"
            fill="currentColor"
          />
          <path
            d="M14.7502 8.32434C15.1421 8.32434 15.4597 8.00671 15.4597 7.61488C15.4597 7.22306 15.1421 6.90542 14.7502 6.90542L14.0981 6.90542L17.1438 3.85979C17.4208 3.58273 17.4208 3.13352 17.1438 2.85646C16.8667 2.5794 16.4175 2.5794 16.1405 2.85646L13.0948 5.9021L13.0948 5.25002C13.0948 4.85819 12.7772 4.54056 12.3854 4.54056C11.9935 4.54056 11.6759 4.85819 11.6759 5.25002L11.6759 7.61488C11.6759 8.00671 11.9935 8.32434 12.3854 8.32434L14.7502 8.32434Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
};
