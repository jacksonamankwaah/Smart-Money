import React from "react";

export default function Card({ children, color = "white", textColor = "black" }) {
  return (
    <div
      className="rounded-2xl p-4 shadow-sm"
      style={{ backgroundColor: color, color: textColor }}
    >
      {children}
    </div>
  );
}
