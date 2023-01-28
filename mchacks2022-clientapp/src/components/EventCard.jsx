import React from 'react';

function EventCard({event}) {
    return (
        <div className="m-4 w-56 bg-gray-50 hover:opacity-90 cursor-pointer h-80 rounded-lg flex flex-col">
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
            <div className="flex flex-row-reverse">
                <div className="flex flex-col mx-4">
                    <div className="line-through">{event.ogPrice}</div>

                </div>

            </div>


        </div>
    );
}

export default EventCard;
