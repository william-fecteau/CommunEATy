import React, {useContext, useEffect, useState} from "react";
import VerticalProgress from "../../components/VerticalProgress";
import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {UserContext} from "../../App";

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
                backgroundImage: `url(${event.imageUrl})`,
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

            <button className="flex items-center w-32 mt-8 bg-primary hover:bg-green-400 pl-10 py-2 hover:shadow rounded font-semibold">
              <Icon icon={"ic:baseline-plus"} width="16px" />
              Join
            </button>
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
