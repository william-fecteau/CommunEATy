import React from "react";
import AppHeader from "../components/AppHeader";

function Layout({ children }) {
  return (
    <div className="flex flex-col h-full">
        <AppHeader />
        <div className="h-90 px-2 max-w-6xl">{children}</div>
    </div>
  );
}

export default Layout;
