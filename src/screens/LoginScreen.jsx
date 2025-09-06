import React from "react";
import TopBrandBar from "../components/TopBrandBar";
import Input from "../components/Input";
import { PrimaryButton } from "../components/Buttons";

export default function LoginScreen({ go, COLORS }) {
  return (
    <div className="px-6 pb-8">
      <TopBrandBar />
      <h1 className="mb-6 text-2xl font-semibold">Sign In</h1>
      <div className="grid gap-4">
        <Input label="Email" placeholder="you@example.com" type="email" />
        <Input label="Password" type="password" placeholder="••••••••" />
        <PrimaryButton
          style={{ background: COLORS.blue }}
          onClick={() => go("dashboard")}
        >
          Continue
        </PrimaryButton>
        <button
          onClick={() => go("register")}
          className="text-sm text-slate-600 underline"
        >
          New here? Create an account
        </button>
      </div>
    </div>
  );
}
