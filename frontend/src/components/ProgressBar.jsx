import React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[200],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#4ade80",
    ...theme.applyStyles("dark", {
      backgroundColor: "#4ade80",
    }),
  },
}));

function ProgressBar(props) {
  const averageLifeWeeks = 3704.68;
  const difference = props.difference;
  let value = Number(((difference / averageLifeWeeks) * 100).toFixed(2));
  return (
    <div className="max-w-3xl mx-auto px-6 mb-8">
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-white text-base sm:text-lg z-10 pointer-events-none">
          {value}%<span className="hidden sm:inline"> of Life lived</span>
        </span>

        <BorderLinearProgress variant="determinate" value={value} />
      </div>
    </div>
  );
}

export default ProgressBar;
