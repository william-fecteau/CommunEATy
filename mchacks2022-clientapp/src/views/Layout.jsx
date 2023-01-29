import React from "react";
import { Icon } from "@iconify/react";
import AppHeader from "../components/AppHeader";

function Layout({ children }) {
  return (
    <div className="flex-row h-full">
      <AppHeader />
      <div className="min-h-full">{children}</div>
    </div>
  );
}

export default Layout;
