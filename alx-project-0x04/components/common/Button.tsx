import React from "react";
import { ButtonProps } from "@/interface"; // or relative path if no alias

const colorMap: Record<string, string> = {
  red: "bg-red-500 hover:bg-red-600",
  blue: "bg-blue-500 hover:bg-blue-600",
  orange: "bg-orange-500 hover:bg-orange-600",
  green: "bg-green-500 hover:bg-green-600",
};

export default function Button({
  buttonLabel,
  buttonSize,
  buttonBackgroundColor = "blue",
  action,
}: ButtonProps) {
  const bgClasses = colorMap[buttonBackgroundColor] ?? colorMap.blue;
  const sizeClasses = buttonSize ?? "px-6 py-2";

  return (
    <button
      type="button"
      onClick={action}
      className={`${bgClasses} ${sizeClasses} text-sm font-semibold rounded-lg transition duration-200 text-white`}
    >
      {buttonLabel}
    </button>
  );
}