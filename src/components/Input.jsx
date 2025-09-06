import React from "react";

export default function Input({ label, ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      <input
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-slate-300"
        {...props}
      />
    </label>
  );
}
