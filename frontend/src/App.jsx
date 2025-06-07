import { useState } from "react";
import DobPopUp from "./components/DOBPopUp";
import Grid from "./components/Grid";
import LoginSignup from "./components/LoginSignup";
import Header from "./components/Header";

function App() {
  const [weeks, setWeeks] = useState(0);
  const [date, setDate] = useState(0);
  const [dateBirth, setDateBirth] = useState(0);
  const [gridDisplay, setGridDisplay] = useState(false);
  const [homepage, setHomepage] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  function VisibleHomePage(value) {
    setHomepage(value);
  }

  function LogCurrentUser(value) {
    setCurrentUser(value);
  }
  console.log(currentUser);

  function GridLoader() {
    const dateToday = new Date();
    const dateBirth = new Date(
      currentUser.year,
      currentUser.month - 1,
      currentUser.date
    );
    const difference = Math.floor(
      (dateToday - dateBirth) / 1000 / 60 / 60 / 24 / 7
    );
    setDateBirth(dateBirth);
    setDate(dateToday);
    setWeeks(difference);
    setGridDisplay(true);
  }

  return (
    <>
      {!homepage ? (
        <LoginSignup confirm={VisibleHomePage} currentUser={LogCurrentUser} />
      ) : null}
    </>
  );
}

export default App;
