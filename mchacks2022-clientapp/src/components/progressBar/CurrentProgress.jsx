import React from 'react';

function CurrentProgress({currentUsers, maxUsers, progressWidth}) {

  return <div
    style={{position: "absolute", top: "0", left: "0", bottom: "0", height: "10px", width: `${progressWidth}px`}}
    className="rounded-full bg-green-500"/>;
}

export default CurrentProgress;