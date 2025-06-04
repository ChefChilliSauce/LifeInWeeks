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

function DobPopUp(props) {
  const [open, setOpen] = useState(true);
  const [dob, setDob] = useState(null);
  let formattedDob = 0;

  const handleClose = () => {
    setOpen(false);
    if (dob) {
      formattedDob = dayjs(dob).format("DD/MM/YYYY");
    }
    const dateBirth = dob ? dob.startOf("day").toDate() : null;
    const dateToday = dayjs().startOf("day").toDate();
    const totalWeeks = dateBirth
      ? Math.floor((dateToday - dateBirth) / 1000 / 60 / 60 / 24 / 7)
      : 0;
    props.onConfirm(totalWeeks);
    props.onConfirmDate(dob ? dob.toDate() : null);
  };

  function HandleDate(newDate) {
    setDob(newDate);
  }
  function HandleButton(event) {
    event.preventDefault;
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
