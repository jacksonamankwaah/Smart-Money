import React from "react";

// import your icons
import HomeIcon from "../assets/icons/home.png";
import CategoryIcon from "../assets/icons/category.png";
import AddIcon from "../assets/icons/add.png";
import WalletIcon from "../assets/icons/wallet.png";
import ProfileIcon from "../assets/icons/profile.png";

const NAV_ITEMS = [
  { label: "Home", icon: HomeIcon, key: "dashboard" },
  { label: "Categories", icon: CategoryIcon, key: "categories" },
  { label: "Add", icon: AddIcon, key: "add" },
  { label: "Wallet", icon: WalletIcon, key: "wallet" },
  { label: "Profile", icon: ProfileIcon, key: "profile" },
];

export default function NavBar({ active, go }) {
  return (
    <div className="fixed inset-x-0 bottom-0 mx-auto max-w-[480px] bg-white/80 backdrop-blur border-t">
      <div className="grid grid-cols-5 gap-2 p-3">
        {NAV_ITEMS.map(({ label, icon, key }) => (
          <button
            key={key}
            onClick={() => go(key)}
            className="grid place-items-center gap-1 py-2 text-xs"
          >
            <img
              src={icon}
              alt={label}
              className={`h-6 w-6 ${active === key ? "opacity-100" : "opacity-60"}`}
            />
            <span className={`text-[10px] ${active === key ? "font-semibold" : "text-slate-500"}`}>
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
