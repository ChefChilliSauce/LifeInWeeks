import React from "react";
import Button from "@mui/material/Button";

function LoginSignupContinueButton(props) {
  return (
    <Button
      type={props.type}
      onClick={() => {
        {
          props.HandleProceedButtonClick();
        }
      }}
      variant="contained"
      sx={{
        borderRadius: 30,
        minWidth: 200,
        textTransform: "none",
        backgroundColor: "#131313",
        "&:hover": {
          backgroundColor: "#333333",
        },
      }}
    >
      {props.ButtonText}
    </Button>
  );
}

export default LoginSignupContinueButton;
