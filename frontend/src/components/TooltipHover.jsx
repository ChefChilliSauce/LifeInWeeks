import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

function TooltipHover(props) {
  const specialDates = [];

  const dob = props.dateOfBirth;
  const gridValue = props.gridValue;
  let startDate = 0;
  let endDate = 0;
  if (!dob || !(dob instanceof Date)) {
  } else {
    startDate = new Date(
      dob.getTime() + props.index * 7 * 24 * 60 * 60 * 1000
    ).toDateString();
    endDate = new Date(
      dob.getTime() + ((props.index + 1) * 7 - 1) * 24 * 60 * 60 * 1000
    ).toDateString();
  }

  function DaysCompleted() {
    const milestone = specialDates.find((date) => date.week === props.index);
    if (milestone != null) {
      return (
        <Tooltip
          title={
            <div>
              <div>Week: {props.index + 1}</div>
              <div>
                {startDate} - {endDate}
              </div>
              <div>{milestone.message}</div>
            </div>
          }
          arrow
          disableInteractive
        >
          <div
            key={props.index}
            className="w-[15px] h-[15px] bg-blue-400 "
            onContextMenu={(e) => e.preventDefault()}
          />
        </Tooltip>
      );
    } else {
      return (
        <Tooltip
          title={
            <div>
              <div>Week: {props.index + 1}</div>
              <div>
                {startDate} - {endDate}
              </div>
            </div>
          }
          arrow
          disableInteractive
        >
          <div
            key={props.index}
            className="w-[15px] h-[15px] bg-green-400 "
            onContextMenu={(e) => e.preventDefault()}
          />
        </Tooltip>
      );
    }
  }

  function DaysNotCompleted() {
    return (
      <div
        key={props.index}
        className="w-[15px] h-[15px] bg-gray-200 "
        onContextMenu={(e) => e.preventDefault()}
      />
    );
  }

  return <>{gridValue >= props.index ? DaysCompleted() : DaysNotCompleted()}</>;
}

export default TooltipHover;
