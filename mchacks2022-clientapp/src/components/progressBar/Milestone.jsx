import React from 'react';

function Milestone({leftOffset, width, colorClass}) {
  return <div
    style={{
      position: "absolute",
      top: "0",
      left: `${leftOffset}px`,
      bottom: "0",
      height: "10px",
      width: `${width}px`,
      backgroundColor: colorClass
    }}
    className="rounded-full"/>;
}

export default Milestone;