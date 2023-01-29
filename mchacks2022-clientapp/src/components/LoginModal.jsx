import { TextInput, Modal, Label } from "flowbite-react";
import { Fragment } from "react";
import PrimaryButton from "./PrimaryButton";
import { useNavigate } from "react-router-dom";

export default function LoginModal({ show, setShow }) {
  const navigate = useNavigate();

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
            <TextInput id="username" type="text" />
          </div>
          <div className="w-1/2 mb-3">
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput id="password" type="password" />
          </div>
          <PrimaryButton
            onClick={() => {
              setShow(false);
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
