import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

function SpecialDatesRemovePopUp(props) {
  const [week, setWeek] = useState("");
  const [weekError, setWeekError] = useState(false);
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

    if (hasError) return;
    else if (!hasError) {
      axios
        .post("http://localhost:3000/RemoveSpecialMilestone", {
          username: currentUser.username,
          week: Number(week - 1),
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
    props.close();
  };

  const handleCancel = () => {
    setWeek("");
    setWeekError(false);
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
        <DialogTitle className="select-none">Remove a Milestone</DialogTitle>
        <DialogContent>
          <DialogContentText className="select-none">
            Enter the week number of the milestone you want to remove (you can
            hover over any grid square to see its week number). Once removed,
            that milestone will disappear from your timeline.
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button type="submit">Remove</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default SpecialDatesRemovePopUp;
