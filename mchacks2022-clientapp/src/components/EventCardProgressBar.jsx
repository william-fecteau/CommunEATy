import React from 'react';

function EventCardProgressBar({event}) {
  console.log("event", event)
  console.log("event.curUsers", event.curUsers)
  console.log("event.maxUsers", event.maxUsers)

  return (
    <div style={{width: "150px", height: "10px"}} className="relative bg-gray-200 ml-auto mr-auto rounded-full">
      <div style={{position: "absolute", top: "0", left: "0", bottom: "0", height: "10px", width: "100px"}}
           className="rounded-full bg-green-500"></div>
      <div style={{position: "absolute", top: "0", left: "50px", bottom: "0", height: "10px", width: "10px"}}
           className="rounded-full bg-lime-500"></div>
      <div style={{position: "absolute", top: "0", left: "100px", bottom: "0", height: "10px", width: "10px"}}
           className="rounded-full bg-gray-400"></div>
    </div>
  );
}

export default EventCardProgressBar;