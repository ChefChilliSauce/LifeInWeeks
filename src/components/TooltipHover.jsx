import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

function TooltipHover(props) {
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

  return (
    <>
      {gridValue >= props.index ? (
        <Tooltip
          title={
            <div>
              <div>Week number: {props.index + 1}</div>
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
            className="w-[15px] h-[15px] bg-green-400 border"
          ></div>
        </Tooltip>
      ) : (
        <div
          key={props.index}
          className="w-[15px] h-[15px] bg-gray-200 border"
        ></div>
      )}
    </>
  );
}

export default TooltipHover;
