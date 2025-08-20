export const Button = ({
  children,
  variant = "primary",
  icon,
  onClick,
}: {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  icon?: React.ReactNode;
  onClick?: () => void;
}) => {
  const baseClasses =
    "inline-flex items-center justify-center px-1 py-1 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
    tertiary:
      "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};
