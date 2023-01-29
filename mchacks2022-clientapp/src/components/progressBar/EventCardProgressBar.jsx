import React from 'react';
import Milestone from "./Milestone";
import CurrentProgress from "./CurrentProgress";

function EventCardProgressBar({event}) {
  const progressBarTotalWidth = 150;
  const milestoneWidth = 10;
  const firstMilestoneOffset = 50;
  const secondMilestoneOffset = 100;
  const acheivedMilestoneColor = "#69FF43";
  const notAcheivedMilestoneColor = "#9CA3AF";

  const [firstMilestoneAcheived, secondMilestoneAcheived, progressWidth] = (function () {
    if (!event) return 0;
    const {curUsers, maxUsers} = event;

    if (curUsers === 0) return [false, false, 0];
    if (curUsers < event.milestones[0].minNbUsers) return [false, false, 25];
    if (curUsers === event.milestones[0].minNbUsers) return [true, false, firstMilestoneOffset + milestoneWidth];
    if (curUsers === event.milestones[event.milestones.length - 1].minNbUsers) return [true, true, secondMilestoneOffset + milestoneWidth];
    if (curUsers === maxUsers) return [true, true, progressBarTotalWidth];
    if (curUsers > event.milestones[event.milestones.length - 1].minNbUsers) return [true, true, 125];
    return [true, false, 75];

  }());

  return (
    <div style={{width: `${progressBarTotalWidth}px`, height: "10px"}}
         className="relative bg-gray-200 ml-auto mr-auto rounded-full">
      <CurrentProgress progressWidth={progressWidth}/>
      <Milestone width={milestoneWidth} leftOffset={50}
                 colorClass={firstMilestoneAcheived ? acheivedMilestoneColor : notAcheivedMilestoneColor}/>
      <Milestone width={milestoneWidth} leftOffset={100}
                 colorClass={secondMilestoneAcheived ? acheivedMilestoneColor : notAcheivedMilestoneColor}/>
    </div>
  );
}

export default EventCardProgressBar;