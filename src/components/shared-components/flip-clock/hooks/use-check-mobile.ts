import { useEffect, useState } from "react";

interface ScreenSize {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export const useCheckMobile = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setScreenSize({
        isMobile: width < 640, // sm breakpoint
        isTablet: width >= 640 && width < 1024, // md breakpoint
        isDesktop: width >= 1024, // lg breakpoint
      });
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return screenSize;
};