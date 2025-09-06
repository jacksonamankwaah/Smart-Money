import React from "react";
import TopBrandBar from "../components/TopBrandBar";
import Input from "../components/Input";
import { PrimaryButton } from "../components/Buttons";

export default function RegisterScreen({ go, COLORS }) {
  return (
    <div className="px-6 pb-8">
      <TopBrandBar />
      <h1 className="mb-6 text-2xl font-semibold">Register</h1>
      <div className="grid gap-4">
        <Input label="Enter your full name" placeholder="Deborah Asare" />
        <Input label="Enter your email" placeholder="you@example.com" type="email" />
        <Input label="Enter password" type="password" placeholder="••••••••" />
        <Input label="Confirm password" type="password" placeholder="••••••••" />
        <PrimaryButton
          style={{ background: COLORS.green }}
          onClick={() => go("dashboard")}
        >
          Create Account
        </PrimaryButton>
        <button
          onClick={() => go("login")}
          className="text-sm text-slate-600 underline"
        >
          Already have an account? Sign In
        </button>
      </div>
    </div>
  );
}
