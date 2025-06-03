import React, { useState } from "react";
import TooltipHover from "./TooltipHover";

function Grid(props) {
  const arrLength = 4680;
  const arr = Array.from({ length: arrLength });
  const dob = props.userDateOfBirth;
  const gridValue = props.gridColor;

  return (
    <div className="flex justify-center">
      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(52, 15px)",
          gap: "3px",
        }}
      >
        {arr.map((_, index) => (
          <TooltipHover
            key={index}
            gridValue={gridValue}
            dateOfBirth={dob}
            index={index}
          ></TooltipHover>
        ))}
      </div>
    </div>
  );
}
export default Grid;
