import React from "react";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

function Layout({ children }) {
  return (
    <div className="flex flex-col h-full justify-between">
        <div>
            <AppHeader />
            <div className="h-90 px-2 max-w-6xl">{children}</div>
        </div>
        <AppFooter/>
    </div>
  );
}

export default Layout;
