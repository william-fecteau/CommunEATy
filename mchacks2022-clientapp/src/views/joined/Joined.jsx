import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "../../App";
import axios from "axios";
import EventCard from "../../components/EventCard";

function Joined() {
    const [events, setEvents] = useState([]);
    const { user } = useContext(UserContext);

    //On mount
    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get("/events/" + user.pk_id + "/joined");
                setEvents(res.data);
            } catch (ex) {
                console.error(ex);
            }
        })();
    }, []);


    return (
        <div className="flex flex-col px-8 my-8">
            <div className="flex mb-8 ml-4">
                <div className="text-3xl mr-8">Joined Events</div>
            </div>
            <div className="flex flex-wrap max-w-6xl">
                {events.map((event) => (
                    <EventCard key={event.pk_id} event={event} />
                ))}
            </div>
        </div>
    );
}

export default Joined;
