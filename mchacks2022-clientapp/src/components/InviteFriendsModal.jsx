import React, {Fragment, useContext, useEffect, useState} from 'react';
import {Label, Modal, TextInput} from "flowbite-react";
import PrimaryButton from "./PrimaryButton";
import axios from "axios";
import {UserContext} from "../App";
import {Icon} from "@iconify/react";

function InviteFriendsModal({show, setShow}) {
  const [friendIdsInvitationSent, setFriendIdsInvitationSent] = useState([]);
  const [friends, setFriends] = useState([]);
  const {user} = useContext(UserContext);

  console.log("friendIdsInvitationSent : ", friendIdsInvitationSent)
  useEffect(() => {
    (async () => {
      if (!friendIdsInvitationSent) return;
      try {
        const res = await axios.get(`/friends/${user.pk_id}`);
        setFriends(res.data)
      } catch (ex) {
        console.error(ex);
      }
    })();
  }, [show]);

  const handleInvitationSent = async (friendId) => {
    if (friendIdsInvitationSent.includes(friendId)) return;
    try {
      setFriendIdsInvitationSent([...friendIdsInvitationSent, friendId]);
    } catch (ex) {
      console.error(ex);
    }
  }

  return (
    <>
      <Modal
        show={show && friends.length > 0}
        onClose={() => {
          setShow(false);
        }}
      >
        <Modal.Header>Invite friends</Modal.Header>
        <Modal.Body>
          <div style={{marginLeft: "200px", marginRight: "200px"}}>
            {friends.map((friend) => (
              <div
                className={`flex justify-between self-center text-lg ${friendIdsInvitationSent.includes(friend.pk_id) ? "text-gray-500 cursor-not-allowed" : ""}`}>
                <span className="">{friend.username}</span>
                <button onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleInvitationSent(friend.pk_id)
                }}
                        className={`${friendIdsInvitationSent.includes(friend.pk_id) ? "text-gray-500 cursor-default" : "text-primary"}`}>
                  <Icon
                    icon="material-symbols:outgoing-mail-outline" width="24px"/></button>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default InviteFriendsModal;