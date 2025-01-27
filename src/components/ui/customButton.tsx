import React from "react";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "reset" | "button";
  children: React.ReactNode;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  type = "button",
  onClick,
  children,
  disabled = false,
  className = "",
  ...rest
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`text-center rounded-sm ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CustomButton;