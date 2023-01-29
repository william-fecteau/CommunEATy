import React from 'react';
import EventCardProgressBar from "./progressBar/EventCardProgressBar";

function EventCard({event}) {
    return (
        <div className="m-4 w-56 bg-gray-50 hover:shadow-lg cursor-pointer h-80 rounded-lg flex flex-col">
            <div
                style={{
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundImage: `url(${event.imageUrl})`
            }}
                id="headerImage" className="h-1/4 bg-transparent rounded-t-lg"/>
                <div className="text-center font-bold text-lg my-2">
                    {event.name}
                </div>
                <div className="flex flex-row-reverse justify-between my-2 mx-4">
                    <div className="flex flex-col">
                        <div className="font-bold line-through">{(event.ogPrice).toLocaleString('en-US', {
                            minimumFractionDigits: 2
                        })}</div>

                        <div className="font-bold text-red-500">{(event.curPrice).toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                        })}</div>
                    </div>

                    <div class="flex flex-row justify-between">
                        <div class="font-bold">Date</div>
                        <div class="uppercase ml-2">{event.date}</div>
                    </div>
                </div>
                <div className="mx-4">
                    <EventCardProgressBar event={event}/>
                </div>
                <div className="self-center mt-8 border-black border-2 rounded-full px-12 hover:bg-gray-200 font-bold">
                    Join
                </div>
        </div>
    );
}

export default EventCard;
