import React, {useContext, useEffect, useState} from "react";
import VerticalProgress from "../../components/VerticalProgress";
import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {UserContext} from "../../App";
import PrimaryButton from "../../components/PrimaryButton";
import JoinedButton from "../../components/JoinedButton";


function EventDetails(props) {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/events/" + user.pk_id + "/" + eventId);
        setEvent(res.data);
      } catch (ex) {
        console.error(ex);
      }
    })();
  }, [eventId]);

  return (
    <div className="flex ml-32 my-16 flex-col w-full">
      {event && (
        <div className="flex self-center">
          <div className="flex flex-col h-full">
            <div
              style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url(${event.imageUrl ? event.imageUrl : 'https://cdn.discordapp.com/attachments/1040028766228971560/1069011173623738479/restaurant1.jpg'})`
              }}
              className="w-96 h-32 self-center"
            />
            <div className="flex flex-col my-4">
              <div className="font-bold">Date</div>
              <div className="uppercase">{event.date}</div>
            </div>
            <div className="flex flex-col my-2">
              <div className="font-bold">Address</div>
              <div className="uppercase">{event.address}</div>
            </div>
            <div className="flex flex-col my-2">
              <div className="font-bold">Description</div>
              <div>{event.description}</div>
            </div>

            <JoinedButton event={event}/>
          </div>
          <div className="flex flex-col w-64 ml-12 items-center justify-center">
            <h1 className="self-center uppercase font-bold text-2xl mb-16">
              {event.name}
            </h1>
            <VerticalProgress event={event} />
          </div>
        </div>
      )}
    </div>
  );
}

export default EventDetails;
