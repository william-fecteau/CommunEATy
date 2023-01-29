import { TextInput } from "flowbite-react";

export default function Login() {
  return (
    <TextInput
      id="email1"
      type="email"
      placeholder="name@flowbite.com"
      required={true}
    />
  );
}
