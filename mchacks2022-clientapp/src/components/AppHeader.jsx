import { Icon } from "@iconify/react";
import {Link} from "react-router-dom";

export default function AppHeader() {
  return (
    <>
      <nav
        style={{ fontFamily: "Poppins" }}
        className="font-semibold text-2xl flex justify-between align-middle p-4"
      >
        <Link className="hover:cursor-pointer" to="/">
          Commun<span className="text-primary">EAT</span>y
        </Link>
        <div
          className="text-navGreen text-base cursor-pointer hover:text-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <Icon icon="material-symbols:login" className="inline mr-1" />
          Login
        </div>
      </nav>
    </>
  );
}
