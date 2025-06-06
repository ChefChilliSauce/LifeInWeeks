import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

function InputTextField(props) {
  return (
    <div>
      {props.activeUserField == "userField" ? (
        <TextField
          error={props.isUsernameFieldErrorEmpty ? true : null}
          helperText={
            props.isUsernameFieldErrorEmpty ? "Username cant be empty" : null
          }
          disabled={!props.isUsernameField ? true : null}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {!props.isUsernameField ? (
                  <a
                    className="text-[#0066DE] hover:underline"
                    onClick={() => {
                      props.HandleEditButtonClick();
                    }}
                  >
                    Edit
                  </a>
                ) : null}
              </InputAdornment>
            ),
          }}
          onChange={props.HandleUsernameFieldChange}
          sx={{
            "& fieldset.MuiOutlinedInput-notchedOutline": {
              borderRadius: "50px",
            },
          }}
          id="outlined-basic"
          label="Username"
          variant="outlined"
          value={props.username}
        />
      ) : null}
      {props.activePassField == "passField" ? (
        <TextField
          error={
            props.isPasswordStatus
              ? props.isPasswordFieldErrorEmpty
                ? true
                : null
              : true
          }
          helperText={
            props.isPasswordStatus
              ? props.isPasswordFieldErrorEmpty
                ? "Password must be atleast 8 chars"
                : null
              : "incorrect Password"
          }
          type={props.isShowPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={props.handleClickShowPasswordButton}
                  edge="end"
                >
                  {props.isShowPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={props.HandlePasswordFieldChange}
          sx={{
            "& fieldset.MuiOutlinedInput-notchedOutline": {
              borderRadius: "50px",
            },
          }}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={props.password}
        />
      ) : null}
    </div>
  );
}

export default InputTextField;
