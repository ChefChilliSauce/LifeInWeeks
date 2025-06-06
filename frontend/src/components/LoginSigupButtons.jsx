import React from "react";
import Button from "@mui/material/Button";

function LoginSignupButtons(props) {
  return (
    <Button
      onClick={() => {
        props.HandleLoginClick();
      }}
      variant="contained"
      sx={{
        borderRadius: 30,
        minWidth: 200,
        textTransform: "none",
        backgroundColor: "#0066DE",
        "&:hover": {
          backgroundColor: "#003f7a",
        },
      }}
    >
      {props.textLabel}
    </Button>
  );
}

export default LoginSignupButtons;
