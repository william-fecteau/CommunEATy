import { Icon } from "@iconify/react";

export default function AppHeader() {
  return (
    <>
      <nav
        style={{ fontFamily: "Poppins" }}
        className="font-semibold text-2xl flex justify-between align-middle p-4"
      >
        <div>
          Commun<span className="text-green">EAT</span>y
        </div>
        <div
          className="text-navGreen text-base cursor-pointer hover:text-green"
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
