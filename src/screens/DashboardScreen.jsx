import React, { useState } from "react";
import TopBrandBar from "../components/TopBrandBar";
import Card from "../components/Card";
import NavBar from "../components/NavBar";

export default function DashboardScreen({ go, COLORS }) {
  const [period, setPeriod] = useState("Daily");
  const [mode, setMode] = useState("Income");

  return (
    <div className="px-6 pb-24">
      <TopBrandBar />

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">September 2025</p>
          <h1 className="text-2xl font-semibold">Hi Deborah!</h1>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <Card>
          <p className="text-xs uppercase text-slate-500">Total</p>
          <p className="text-xl font-bold">₵ 4,250</p>
        </Card>
        <Card>
          <p className="text-xs uppercase text-slate-500">Balance</p>
          <p className="text-xl font-bold">₵ 2,120</p>
        </Card>
      </div>

      <div className="mt-6">
        <Card>
          <p className="text-sm font-medium">Analytics</p>
          <div className="mt-4 h-28 w-full rounded-xl border border-dashed border-slate-200 grid place-items-center text-xs text-slate-500">
            Chart placeholder
          </div>
        </Card>
      </div>

      <NavBar active="dashboard" go={go} />
    </div>
  );
}
