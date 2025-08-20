import { useState } from "react";

export const Tooltip = ({ 
  children, 
  content, 
  width = "default" 
}: { 
  children: React.ReactNode; 
  content: string; 
  width?: "default" | "wide" 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`
          absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg
          ${width === "wide" ? "w-40" : "w-auto max-w-xs"}
          -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full
          after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2
          after:border-4 after:border-transparent after:border-t-gray-900
        `}>
          {content}
        </div>
      )}
    </div>
  );
};