import { useState } from "react";
import DobPopUp from "./components/DOBPopUp";
import Grid from "./components/Grid";
import LoginSignup from "./components/LoginSignup";
import Header from "./components/Header";

function App() {
  const [weeks, setWeeks] = useState(0);
  const [date, setDate] = useState(0);
  function CompletedWeeks(value) {
    setWeeks(value);
  }

  function DateOfBirth(value) {
    setDate(value);
  }

  return (
    <>
      <LoginSignup />
      {/* <DobPopUp onConfirm={CompletedWeeks} onConfirmDate={DateOfBirth} />
      <Grid gridColor={weeks} userDateOfBirth={date} /> */}
    </>
  );
}

export default App;
