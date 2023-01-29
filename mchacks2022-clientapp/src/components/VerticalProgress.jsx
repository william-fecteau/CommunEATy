import React from 'react';
import EventCardProgressBar from "./progressBar/EventCardProgressBar";

function VerticalProgress({event}) {
    return (
        <div className="rotate-270 flex items-center bg-gray-100 rounded-3xl" style={{height: '175px'}}>
            <EventCardProgressBar event={event} rotated={true}/>
        </div>
    );
}

export default VerticalProgress;
