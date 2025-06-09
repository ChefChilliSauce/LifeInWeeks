import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

function SpecialDatesPopUp(props) {
  const [week, setWeek] = useState("");
  const [message, setMessage] = useState("");
  const [weekError, setWeekError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const currentUser = props.data;

  if (!currentUser || !currentUser.username) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    if (!week.trim()) {
      setWeekError(true);
      hasError = true;
    } else {
      setWeekError(false);
    }

    if (!message.trim()) {
      setMessageError(true);
      hasError = true;
    } else {
      setMessageError(false);
    }

    if (hasError) return;
    else if (!hasError) {
      axios
        .post("http://localhost:3000/AddSpecialMilestone", {
          username: currentUser.username,
          week: Number(week - 1),
          message: message,
        })
        .then(function (response) {
          if (response.data.user) {
            props.newValue(response.data.user);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    setWeek("");
    setMessage("");
    props.close();
  };

  const handleCancel = () => {
    setWeek("");
    setMessage("");
    setWeekError(false);
    setMessageError(false);
    props.close();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        slotProps={{
          paper: {
            component: "form",
            onSubmit: handleSubmit,
          },
        }}
      >
        <DialogTitle className="select-none">Special Milestones</DialogTitle>
        <DialogContent>
          <DialogContentText className="select-none">
            Pick a week number (hover over any grid square to see its week
            number), then write a short message to mark a meaningful moment from
            that week. Note: You can only add one milestone per week—make it
            count! Your milestone will be highlighted on your timeline for easy
            reflection.
          </DialogContentText>
          <TextField
            error={weekError ? true : null}
            helperText={weekError ? "This field can't be empty" : ""}
            autoFocus
            id="week"
            name="week"
            margin="dense"
            label="Week number"
            type="number"
            fullWidth
            variant="outlined"
            value={week}
            onChange={(e) => setWeek(e.target.value)}
          />
          <TextField
            error={messageError}
            helperText={messageError ? "This field can't be empty" : ""}
            id="message"
            name="message"
            margin="dense"
            label="Message"
            type="text"
            fullWidth
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default SpecialDatesPopUp;
