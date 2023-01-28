import React from 'react';
import {Icon} from "@iconify/react";

function Layout({children}) {
  return (
    <div className="flex-row h-full">
      <div className="">

        <div style={{fontFamily: "Poppins"}} className="inline-block mr-auto font-semibold text-2xl w-full">Commun<span
          className="text-green-400">EAT</span>y
        </div>

        <div className="inline-block">
          <button><Icon icon="bi:people-circle"/> Login</button>
          <button>Login</button>
          <button>Login</button>
        </div>


      </div>
      <div className="min-h-full">{children}</div>
    </div>
  );
}

export default Layout;