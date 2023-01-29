import {TextInput, Modal, Label} from "flowbite-react";
import {Fragment, useContext, useState, useEffect} from "react";
import PrimaryButton from "./PrimaryButton";
import {UserContext} from "../App";
import axios from "axios";

export default function FriendModal({show, setShow}) {
  const [friendName, setFriendName] = useState("");

  const {user, setUser} = useContext(UserContext);

  return (
    <Fragment>
      <Modal
        show={show}
        onClose={() => {
          setShow(false);
        }}
      >
        <Modal.Header>Account</Modal.Header>
        <Modal.Body>
          <h2 className="text-2xl">Add a friend</h2>
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="username" value="Friend's username"/>
            </div>
            <TextInput
              id="friendName"
              type="text"
              value={friendName}
              onChange={(e) => setFriendName(e.target.value)}
            />
          </div>

          <PrimaryButton
            onClick={async () => {
              setShow(false);
              axios
                .get(`/friends/${user.pk_id}/${friendName}`)
                .then((res) => {
                });
            }}
          >
            Add friend
          </PrimaryButton>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}
