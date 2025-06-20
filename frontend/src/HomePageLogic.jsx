import React, { useState } from "react";
import Grid from "./components/Grid";
import LoginSignup from "./components/LoginSignup";
import ProgressBar from "./components/ProgressBar";
import Intro from "./components/Intro";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SpecialDatesPopUp from "./components/SpecialDatesPopUp";
import SpecialDatesRemovePopUp from "./components/SpecialDatesRemovePopUp";

function HomePageLogic() {
  const [dateToday, setDateToday] = useState(null);
  const [dateBirth, setDateBirth] = useState(null);
  const [difference, setDifference] = useState(null);
  const [differenceNoFloor, setDifferenceNoFloor] = useState(null);
  const [gridDisplay, setGridDisplay] = useState(false);
  const [homepage, setHomepage] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [visibleDate, setVisibleDate] = useState(0);
  const [addOpen, setAddOpen] = useState(false);
  const [removeOpen, setRemoveOpen] = useState(false);

  function Logout() {
    setHomepage(false);
    setCurrentUser({});
    setGridDisplay(false);
  }

  function OpenSetMilestone() {
    setAddOpen(true);
  }

  function CloseSetMilestone() {
    setAddOpen(false);
  }

  function OpenRemoveMilestone() {
    setRemoveOpen(true);
  }

  function CloseRemoveMilestone() {
    setRemoveOpen(false);
  }

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
    const formatted = birth.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    setVisibleDate(formatted);
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
        <div>
          <Header
            clickAddMilestone={OpenSetMilestone}
            clickLogout={Logout}
            clickRemoveMilestone={OpenRemoveMilestone}
          />
          <SpecialDatesPopUp
            open={addOpen}
            close={CloseSetMilestone}
            data={currentUser}
            newValue={LogCurrentUser}
          />
          <SpecialDatesRemovePopUp
            open={removeOpen}
            close={CloseRemoveMilestone}
            data={currentUser}
            newValue={LogCurrentUser}
          />
          <Intro date={visibleDate} />
          <ProgressBar difference={differenceNoFloor} />
          <Grid
            gridColor={difference}
            userDateOfBirth={dateBirth}
            data={currentUser}
          />
          <Footer />
        </div>
      ) : null}
    </>
  );
}

export default HomePageLogic;
