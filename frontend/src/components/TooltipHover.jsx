import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

function TooltipHover(props) {
  const specialDates = [
    {
      week: 0,
      message: "Muggle-born? Pure-blood? Who cares, magic begins now!",
    },
    {
      week: 260,
      message: "Five years in—still waiting for my Hogwarts letter!",
    },
    {
      week: 521,
      message: "A decade of magic—ten years old, awaiting my first wand!",
    },
    {
      week: 782,
      message: "Fifteen candles on the cake—time to learn advanced spells.",
    },
    {
      week: 805,
      message:
        "Completed my OWLs (Class 10 boards)—Ministry of Magic approves!",
    },
    {
      week: 820,
      message: "Earned the Governor's Award—like winning the Triwizard Cup!",
    },
    {
      week: 871,
      message: "Nominated for the President's Award—Order of Merlin, maybe?",
    },
    {
      week: 908,
      message:
        "Completed my NEWTs (Class 12 boards)—gap year in the Room of Requirement.",
    },
    {
      week: 939,
      message:
        "Finally eighteen! Can apparate (and maybe drive a Muggle car) now.",
    },
    {
      week: 952,
      message:
        "Passed my Muggle driving test—got my full license, Knight Bus not required.",
    },
    {
      week: 960,
      message: "The world paused—COVID-19 Lockdown: felt like Azkaban.",
    },
    {
      week: 978,
      message: "Enrolled at my own Hogwarts: Bachelors in Computer Science!",
    },
    {
      week: 1043,
      message: "Turned twenty! Two decades of magical mischief.",
    },
    {
      week: 1095,
      message: "Can legally get married now... but this isn't the Yule Ball.",
    },
    {
      week: 1127,
      message:
        "Met someone magical—like finding a unicorn in the Forbidden Forest.",
    },
    {
      week: 1154,
      message: "Went on a journey with my own Order of the Phoenix.",
    },
    {
      week: 1180,
      message: "Leveled up: Graduated as an Engineer—Accio, new adventures!",
    },
    {
      week: 1199,
      message:
        "Started building Savry—my own Room of Requirement for kitchens!",
    },
  ];

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
