import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import InputTextField from "./InputTextField";
import LoginSignupContinueButton from "./LoginSignupContinueButton";

function LoginSignupForm(props) {
  function handleFormSubmit(event) {
    event.preventDefault();
    props.handleFormSubmit();
  }

  return (
    <div className="select-none">
      <h1>{props.isPasswordField ? props.heading2 : props.heading1} </h1>
      <Box
        onSubmit={handleFormSubmit}
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <Stack spacing={2} direction="column">
          <InputTextField
            isUsernameFieldErrorEmpty={props.isUsernameFieldErrorEmpty}
            isUsernameField={props.isUsernameField}
            HandleEditButtonClick={props.HandleEditButtonClick}
            HandleUsernameFieldChange={props.HandleUsernameFieldChange}
            username={props.username}
            activeUserField={props.activeUserField}
          />
          {props.isPasswordField ? (
            <InputTextField
              HandleContinueButtonClick={props.HandleContinueButtonClick}
              isPasswordFieldErrorEmpty={props.isPasswordFieldErrorEmpty}
              isPasswordStatus={props.isPasswordStatus}
              isPasswordField={props.isPasswordField}
              isShowPassword={props.isShowPassword}
              handleClickShowPasswordButton={
                props.handleClickShowPasswordButton
              }
              HandlePasswordFieldChange={props.HandlePasswordFieldChange}
              password={props.password}
              activePassField={props.activePassField}
            />
          ) : null}
        </Stack>
        <Stack spacing={2} direction={{ xs: "column", sm: "row" }}>
          {props.isPasswordField ? (
            <LoginSignupContinueButton
              type="submit"
              ButtonText={props.ButtonText}
              HandleProceedButtonClick={props.HandleProceedButtonClick}
            />
          ) : (
            <LoginSignupContinueButton
              type="submit"
              ButtonText={props.ButtonText}
              HandleProceedButtonClick={props.HandleContinueButtonClick}
            />
          )}
        </Stack>
        <p>
          {props.paragraph}{" "}
          <a
            className="text-[#0066DE] hover:underline"
            onClick={props.HandleChangeButtonClick}
          >
            {props.details}
          </a>
        </p>
      </Box>
    </div>
  );
}

export default LoginSignupForm;
