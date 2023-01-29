import React from 'react';

function Milestone({leftOffset, width, colorClass, rotated = false, milestone}) {
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
    className="rounded-full">
      {rotated &&
          <h1 className="rotate-90 pl-4 text-sm text-red-500">-{(milestone.priceDiscount).toLocaleString('en-US', {
              minimumFractionDigits: 2
          })}</h1>
      }
  </div>;
}

export default Milestone;
