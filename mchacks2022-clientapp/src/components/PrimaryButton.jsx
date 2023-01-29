import { Button } from "flowbite-react";

export default function PrimaryDefault({ onClick, children, className }) {
  return (
    <button
      className={
        "mt-12 center bg-primary hover:bg-green-400 hover:shadow p-2 w-32 rounded font-semibold " +
        className
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
