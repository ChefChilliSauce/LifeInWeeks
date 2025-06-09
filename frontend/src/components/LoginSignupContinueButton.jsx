import React from "react";
import Button from "@mui/material/Button";

function LoginSignupContinueButton(props) {
  return (
    <Button
      type={props.type}
      fullWidth // remove if you want to control width via container
      onClick={() => {
        props.HandleProceedButtonClick();
      }}
      variant="contained"
      sx={{
        borderRadius: "9999px", // perfect pill
        height: "44px", // matches your input field height
        textTransform: "none",
        backgroundColor: "#131313",
        fontSize: "1rem",
        boxShadow: "none",
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
