import React from "react";

interface ButtonMediumProps {
  label: string;
  bgColor: string;
}

export const ButtonMedium: React.FC<ButtonMediumProps> = ({
  label,
  bgColor,
}) => {
  const cssClass = `px-4 py-2 rounded-md text-sm mr-2 ${bgColor} hover:bg-blue-800`;
  return <button className={cssClass}>{label}</button>;
};


