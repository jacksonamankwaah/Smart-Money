import React from "react";
import TopBrandBar from "../components/TopBrandBar";
import { PrimaryButton, OutlineButton } from "../components/Buttons";

export default function WelcomeScreen({ go, COLORS }) {
  return (
    <div className="px-6 pb-8">
      <TopBrandBar />
      <div className="mt-4 rounded-3xl bg-gradient-to-br from-white to-slate-50 p-6 border border-slate-100">
        <div
          className="mb-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold"
          style={{ background: `${COLORS.teal}22`, border: `1px solid ${COLORS.teal}` }}
        >
          Welcome
        </div>
        <h1 className="text-3xl font-bold leading-tight text-slate-900">
          Welcome to <span style={{ color: COLORS.blue }}>Smart Money</span>
        </h1>
        <p className="mt-3 text-slate-600">
          Track your spending, manage your budget, and save like never before ➜
        </p>
        <div className="mt-8 grid gap-3">
          <PrimaryButton
            style={{ background: COLORS.blue, color: "#0b1324" }}
            onClick={() => go("register")}
          >
            Create an account
          </PrimaryButton>
          <OutlineButton onClick={() => go("login")}>Sign In</OutlineButton>
        </div>
      </div>
    </div>
  );
}
