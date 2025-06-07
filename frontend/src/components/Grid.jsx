import React from "react";
import TooltipHover from "./TooltipHover";

function Grid(props) {
  const arrLength = 4680;
  const arr = Array.from({ length: arrLength });
  const dob = props.userDateOfBirth;
  const gridValue = props.gridColor;

  return (
    // Parent div:
    // md:flex md:justify-center => center grid on md+ screens
    // flex-row overflow-x-auto => horizontal scroll on mobile
    <div className="flex md:justify-center md:items-center flex-row overflow-x-auto mb-8 w-full">
      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(52, 15px)",
          gap: "3px",
          minWidth: "832px", // 52*16 for 15px+1px border+gap, adjust as needed
        }}
      >
        {arr.map((_, index) => (
          <TooltipHover
            key={index}
            gridValue={gridValue}
            dateOfBirth={dob}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Grid;
