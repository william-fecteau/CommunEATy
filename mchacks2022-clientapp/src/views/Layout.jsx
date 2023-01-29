import React from "react";
import AppHeader from "../components/AppHeader";

function Layout({ children }) {
  return (
    <div className="flex flex-col h-full">
      <AppHeader />
      <div className="min-h-full px-2 max-w-6xl self-center">{children}</div>
    </div>
  );
}

export default Layout;
