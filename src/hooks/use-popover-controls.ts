import { useCallback, useRef } from "react";

export const usePopoverControls = () => {
  const popoverControlsRef = useRef<Record<string, () => void>>({});

  const registerPopoverControl = useCallback(
    (nodeId: string, callback: () => void) => {
      popoverControlsRef.current[nodeId] = callback;
    },
    [],
  );

  const updatePopoverControls = useCallback(
    (id: string, callback: () => void) => {
      popoverControlsRef.current[id] = callback;
    },
    [],
  );

  const triggerPopoverControl = useCallback((nodeId: string) => {
    popoverControlsRef.current[nodeId]?.();
  }, []);

  const triggerAllPopoverControls = useCallback(() => {
    Object.values(popoverControlsRef.current).forEach((callback) => callback());
  }, []);

  return {
    registerPopoverControl,
    updatePopoverControls,
    triggerPopoverControl,
    triggerAllPopoverControls,
  };
};
