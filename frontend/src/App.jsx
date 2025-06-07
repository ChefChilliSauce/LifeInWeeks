import { useState } from "react";
import DobPopUp from "./components/DOBPopUp";
import Grid from "./components/Grid";
import LoginSignup from "./components/LoginSignup";
import Header from "./components/Header";

function App() {
  const [dateToday, setDateToday] = useState(null);
  const [dateBirth, setDateBirth] = useState(null);
  const [difference, setDifference] = useState(null);
  const [differenceNoFloor, setDifferenceNoFloor] = useState(null);
  const [gridDisplay, setGridDisplay] = useState(false);
  const [homepage, setHomepage] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  function VisibleHomePage(value) {
    setHomepage(value);
  }

  function LogCurrentUser(value) {
    setCurrentUser(value);
    SteadyDate(value);
  }

  function SteadyDate(user) {
    const date = new Date();
    const birth = new Date(user.year, user.month - 1, user.date);
    const differenceone = Math.floor((date - birth) / 1000 / 60 / 60 / 24 / 7);
    const differenceNoFloorone = Number(
      ((date - birth) / 1000 / 60 / 60 / 24 / 7).toFixed(2)
    );
    setDateToday(date);
    setDateBirth(birth);
    setDifference(differenceone);
    setDifferenceNoFloor(differenceNoFloorone);
    setGridDisplay(true);
  }
  return (
    <>
      {!homepage ? (
        <LoginSignup confirm={VisibleHomePage} currentUser={LogCurrentUser} />
      ) : null}
      {gridDisplay ? (
        <Grid gridColor={difference} userDateOfBirth={dateBirth} />
      ) : null}
    </>
  );
}

export default App;
