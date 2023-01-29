import React, { useContext, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import EventCard from "../../components/EventCard";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";

function Events() {
  const [events, setEvents] = useState([]);
  const { user } = useContext(UserContext);

  //On mount
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/events/" + user.pk_id);
        setEvents(res.data);
      } catch (ex) {
        console.error(ex);
      }
    })();
  }, []);

  return (
    <div className="flex flex-col px-8 my-8">
      <div className="flex mb-8 ml-4">
        <div className="text-3xl mr-8">Nearby Events</div>
        <Link
          className="hover:cursor-pointer flex items-center bg-primary hover:bg-navGreen hover:shadow pl-2 pr-4 rounded font-semibold"
          to="/create-event"
        >
          <Icon icon="ic:baseline-plus" width="32px" />
          Event
        </Link>
      </div>
      <div className="flex flex-wrap max-w-6xl">
        {events.map((event) => (
          <EventCard key={event.pk_id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Events;
