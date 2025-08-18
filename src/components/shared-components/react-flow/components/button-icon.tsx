import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function ButtonIcon({ children, className, onClick }: Props) {
  return (
    <button
      className={`size-5 rounded-sm flex items-center justify-center text-[var(--p-color-icon-secondary)] transition-all hover:bg-gray-100 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
