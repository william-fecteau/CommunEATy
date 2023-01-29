import React, {useContext} from 'react';
import PrimaryButton from "./PrimaryButton";
import axios from "axios";
import {UserContext} from "../App";

function JoinedButton({event}) {
    const { user } = useContext(UserContext);

    return (
        <>
            { event.hasJoined ?
                <PrimaryButton>Joined</PrimaryButton>
                :
                <PrimaryButton
                    onClick={async () => {
                        if (user.username === "") return;

                        try {
                            const { data: response } = await axios.post("/joinEvent", {
                                user_id: user.pk_id,
                                event_id: event.pk_id
                            });

                            console.log(response);

                        } catch (e) {
                            console.log('error when joining the event');
                            console.log(e);
                        }
                    }}
                >Join</PrimaryButton>
            }
        </>
    );
}

export default JoinedButton;
