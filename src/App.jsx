import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import AppShell from "./components/AppShell";
import WelcomeScreen from "./screens/WelcomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import CategoriesScreen from "./screens/CategoriesScreen";

export const COLORS = {
  blue: "#5CD3FA",
  green: "#A1DC4D",
  orange: "#EB7E1F",
  teal: "#93E4E3",
  dark: "#0B1324",
};

export default function App() {
  const [screen, setScreen] = useState("welcome");
  const go = (name) => setScreen(name);

  return (
    <AppShell>
      <AnimatePresence mode="wait">
        {screen === "welcome" && (
          <motion.div key="welcome" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <WelcomeScreen go={go} COLORS={COLORS} />
          </motion.div>
        )}
        {screen === "register" && <RegisterScreen go={go} COLORS={COLORS} />}
        {screen === "login" && <LoginScreen go={go} COLORS={COLORS} />}
        {screen === "dashboard" && <DashboardScreen go={go} COLORS={COLORS} />}
        {screen === "categories" && <CategoriesScreen go={go} COLORS={COLORS} />}
      </AnimatePresence>
    </AppShell>
  );
}
