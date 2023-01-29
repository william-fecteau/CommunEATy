import { TextInput, Modal, Label } from "flowbite-react";
import { Fragment, useContext, useState } from "react";
import PrimaryButton from "./PrimaryButton";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import axios from "axios";

export default function LoginModal({ show, setShow }) {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  return (
    <Fragment>
      <Modal
        show={show}
        onClose={() => {
          setShow(false);
        }}
      >
        <Modal.Header>Login</Modal.Header>
        <Modal.Body>
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="username" value="Username" />
            </div>
            <TextInput
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="w-1/2 mb-3">
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput id="password" type="password" />
          </div>
          <PrimaryButton
            onClick={() => {
              if (username === "") return;
              axios.post("/login", { username: username });
              setShow(false);
              setUser({ username: username });
              navigate("/events");
            }}
          >
            Login
          </PrimaryButton>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}
