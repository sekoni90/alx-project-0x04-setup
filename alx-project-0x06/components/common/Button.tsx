// components/common/Button.tsx
import React from "react";

type Color = "red" | "blue" | "green" | "gray";

interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor?: Color | string;
  onClick?: () => void;
  className?: string;
}

const colorClasses: Record<Color, string> = {
  red: "bg-red-500 hover:bg-red-600",
  blue: "bg-blue-500 hover:bg-blue-600",
  green: "bg-green-500 hover:bg-green-600",
  gray: "bg-gray-500 hover:bg-gray-600",
};

const Button: React.FC<ButtonProps> = ({
  buttonLabel,
  buttonBackgroundColor = "gray",
  onClick,
  className = "",
}) => {
  const baseClass =
    typeof buttonBackgroundColor === "string" &&
    (["red", "blue", "green", "gray"] as Color[]).includes(
      buttonBackgroundColor as Color
    )
      ? colorClasses[buttonBackgroundColor as Color]
      : `bg-[${buttonBackgroundColor}] hover:brightness-90`;

  return (
    <button
      onClick={onClick}
      className={`${baseClass} text-white font-semibold py-2 px-4 rounded ${className}`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;