import React, { useContext, useState } from "react";
import PrimaryButton from "./PrimaryButton";
import axios from "axios";
import { UserContext } from "../App";
import InviteFriendsModal from "./InviteFriendsModal";

function JoinedButton({ event }) {
  const { user } = useContext(UserContext);
  const [eventJustJoined, setEventJustJoined] = useState(false);
  const [showInviteFriendsModal, setShowInviteFriendsModal] = useState(false);

  return (
    <>
      <InviteFriendsModal
        show={showInviteFriendsModal}
        setShow={setShowInviteFriendsModal}
      />
      {event.hasJoined || eventJustJoined ? (
        <PrimaryButton
          className="bg-[#efefef] hover:bg-[#efefef] text-[#8e8e8e] hover:shadow-none cursor-not-allowed"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          Joined
        </PrimaryButton>
      ) : (
        <PrimaryButton
          onClick={async (e) => {
            e.stopPropagation();
            e.preventDefault();
            if (user.username === "") return;
            setShowInviteFriendsModal(true);
            setEventJustJoined(true);

            try {
              const { data: response } = await axios.post("/joinEvent", {
                user_id: user.pk_id,
                event_id: event.pk_id,
              });
            } catch (e) {
              console.log("error when joining the event");
              console.log(e);
            }
          }}
        >
          Join
        </PrimaryButton>
      )}
    </>
  );
}

export default JoinedButton;
