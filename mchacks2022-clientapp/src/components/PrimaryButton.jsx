import { Button } from "flowbite-react";

export default function PrimaryDefault({ onClick, children }) {
  return (
    <Button
      className="bg-primary hover:bg-navGreen text-black"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
