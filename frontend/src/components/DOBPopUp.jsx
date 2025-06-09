import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import axios from "axios";

function DobPopUp(props) {
  const [open, setOpen] = useState(true);
  const [dob, setDob] = useState(null);
  const [dobError, setDobError] = useState(false); // <-- ADD ERROR STATE
  const currentUser = props.data;

  const handleClose = () => {
    setOpen(false);
    if (dob) {
      const formattedDob = dayjs(dob).format("YYYY-MM-DD");
      const year = dayjs(dob).year();
      const month = dayjs(dob).month() + 1;
      const day = dayjs(dob).date();
      axios
        .post("http://localhost:3000/setDOB", {
          username: currentUser.username,
          dob: formattedDob,
          year: year,
          month: month,
          day: day,
        })
        .then(function (response) {
          props.currentUser(response.data.user);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  function HandleDate(newDate) {
    setDob(newDate);
    if (dobError) setDobError(false);
  }

  function HandleButton(event) {
    event.preventDefault();
    if (!dob) {
      setDobError(true);
      return;
    }
    handleClose();
  }

  return (
    <React.Fragment>
      <Dialog open={open}>
        <DialogTitle>Your Life, Visualized</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let’s build your story. Enter your date of birth below to begin.
          </DialogContentText>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="flex justify-center mt-4">
              <DatePicker
                onChange={HandleDate}
                label="Date of Birth"
                value={dob}
                slotProps={{
                  textField: {
                    error: dobError,
                    helperText: dobError ? "Date of Birth is required" : "",
                  },
                }}
              />
            </div>
          </LocalizationProvider>
        </DialogContent>

        <DialogActions>
          <Button onClick={HandleButton}>Enter</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export default DobPopUp;
