import React, { useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

function InputTextField(props) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (
      (props.activeUserField === "userField" && props.isUsernameField) ||
      (props.activePassField === "passField" && props.isPasswordField)
    ) {
      inputRef.current?.focus();
    }
  }, [
    props.activeUserField,
    props.isUsernameField,
    props.activePassField,
    props.isPasswordField,
  ]);
  return (
    <div>
      {props.activeUserField == "userField" ? (
        <TextField
          fullWidth
          inputRef={inputRef}
          error={props.isUsernameFieldErrorEmpty ? true : null}
          helperText={
            props.isUsernameFieldErrorEmpty
              ? "Username cant be less than 6 chars"
              : null
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
          id="username"
          label="Username"
          variant="outlined"
          value={props.username}
        />
      ) : null}
      {props.activePassField == "passField" ? (
        <TextField
          fullWidth
          inputRef={inputRef}
          error={props.isPasswordStatus || props.isPasswordFieldErrorEmpty}
          helperText={
            props.isPasswordFieldErrorEmpty
              ? "Password must be at least 8 chars"
              : props.isPasswordStatus
              ? "incorrect Password"
              : null
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
          id="password"
          label="Password"
          variant="outlined"
          value={props.password}
        />
      ) : null}
    </div>
  );
}

export default InputTextField;
