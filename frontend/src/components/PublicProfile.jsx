import React, { useState, useEffect } from "react";
import Grid from "./Grid";
import ProgressBar from "./ProgressBar";
import PublicIntro from "./PublicIntro";
import HeaderTOSP from "./HeaderTOSP";
import FooterTOSP from "./FooterTOSP";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function PublicProfile() {
  const { username } = useParams();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [dateToday, setDateToday] = useState(null);
  const [dateBirth, setDateBirth] = useState(null);
  const [difference, setDifference] = useState(null);
  const [differenceNoFloor, setDifferenceNoFloor] = useState(null);
  const [visibleDate, setVisibleDate] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/PublicProfile/${username}`)
      .then((response) => {
        if (response.data.result && response.data.user) {
          setCurrentUser(response.data.user);
          SteadyDate(response.data.user);
        } else {
          navigate("/404");
        }
      })
      .catch((error) => {
        console.log(error);
        navigate("/404");
      });
  }, [username]);

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
  }

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HeaderTOSP />
      <PublicIntro date={visibleDate} heading={currentUser.username} />
      <ProgressBar difference={differenceNoFloor} />
      <Grid
        gridColor={difference}
        userDateOfBirth={dateBirth}
        data={currentUser}
      />
      <FooterTOSP />
    </>
  );
}

export default PublicProfile;
