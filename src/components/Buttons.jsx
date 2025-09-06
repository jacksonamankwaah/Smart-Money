import React from "react";

export const PrimaryButton = ({ children, className = "", ...props }) => (
  <button
    className={`w-full rounded-2xl py-3 text-base font-semibold shadow-sm transition hover:opacity-95 active:scale-[.99] ${className}`}
    {...props}
  >
    {children}
  </button>
);

export const OutlineButton = ({ children, className = "", ...props }) => (
  <button
    className={`w-full rounded-2xl border py-3 text-base font-semibold shadow-sm transition hover:bg-slate-50 active:scale-[.99] ${className}`}
    {...props}
  >
    {children}
  </button>
);
