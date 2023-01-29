import React from 'react';
import Milestone from "./Milestone";
import CurrentProgress from "./CurrentProgress";
import milestone from "./Milestone";

function EventCardProgressBar({event}) {
  const progressBarTotalWidth = 150;
  const milestoneWidth = 10;
  const firstMilestoneOffset = 50;
  const secondMilestoneOffset = 100;
  const possibleProgresses = [25, firstMilestoneOffset, 75, secondMilestoneOffset, 100, 150];

  const [firstMilestoneAcheived, secondMilestoneAcheived, progressWidth] = (function () {
    if (!event) return 0;
    const {curUsers, maxUsers} = event;
    console.log("curUsers", curUsers)
    console.log("maxUsers", maxUsers)
    console.log(event.milestones.length)
    console.log(event.milestones)
    console.log(event.milestones[event.milestones.length - 1].minNbUsers)

    if (curUsers === 0) return [false, false, 0];
    if (curUsers < event.milestones[0].minNbUsers) return [false, false, 25];
    if (curUsers === event.milestones[0].minNbUsers) return [true, false, firstMilestoneOffset + milestoneWidth];
    if (curUsers === event.milestones[event.milestones.length - 1].minNbUsers) return [true, true, secondMilestoneOffset + milestoneWidth];
    if (curUsers === maxUsers) return [true, true, progressBarTotalWidth];
    return [true, false, 75];

  }());

  console.log("progressWidth : ", progressWidth)
  console.log("event", event)
  console.log("event.curUsers", event.curUsers)
  console.log("event.maxUsers", event.maxUsers)

  return (
    <div style={{width: `${progressBarTotalWidth}px`, height: "10px"}}
         className="relative bg-gray-200 ml-auto mr-auto rounded-full">
      <CurrentProgress currentUsers={event.curUsers} maxUsers={event.maxUsers}
                       progressWidth={progressWidth}/>
      <Milestone width={milestoneWidth} leftOffset={50}
                 colorClass={firstMilestoneAcheived ? "bg-lime-500" : "bg-gray-400"}/>
      <Milestone width={milestoneWidth} leftOffset={100}
                 colorClass={secondMilestoneAcheived ? "bg-lime-500" : "bg-gray-400"}/>
    </div>
  );
}

export default EventCardProgressBar;