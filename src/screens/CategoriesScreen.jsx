import React, { useState } from "react";
import TopBrandBar from "../components/TopBrandBar";
import Card from "../components/Card";
import NavBar from "../components/NavBar";

export default function CategoriesScreen({ go, COLORS }) {
  const [tab, setTab] = useState("Expense");
  const categories =
    tab === "Expense"
      ? ["Subscription", "Health", "Transport", "Home", "Clothes", "School"]
      : ["Salary", "Investment", "Gifts", "Others"];

  return (
    <div className="px-6 pb-24">
      <TopBrandBar />
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Categories</h1>
        <button
          className="rounded-full bg-slate-100 px-3 py-1 text-sm"
          onClick={() => setTab(tab === "Expense" ? "Income" : "Expense")}
        >
          {tab}
        </button>
      </div>

      <div className="grid gap-3">
        {categories.map((c) => (
          <Card key={c}>
            <div className="flex items-center justify-between">
              <p className="font-medium">{c}</p>
              <div className="flex gap-2">
                <button className="rounded-xl border px-3 py-1 text-xs">Edit</button>
                <button className="rounded-xl border px-3 py-1 text-xs">Delete</button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <NavBar active="categories" go={go} />
    </div>
  );
}
