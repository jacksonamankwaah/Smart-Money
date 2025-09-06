import React from "react";

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <div className="mx-auto max-w-[480px] min-h-screen shadow-sm bg-white relative">
        {children}
      </div>
    </div>
  );
}
