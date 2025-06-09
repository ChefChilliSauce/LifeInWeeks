import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import InputTextField from "./InputTextField";
import LoginSignupContinueButton from "./LoginSignupContinueButton";

function LoginSignupForm(props) {
  return (
    <div className="select-none w-full flex flex-col items-center">
      <h1 className="text-3xl text-center mb-6 w-4/5 mx-auto font-normal">
        {props.isPasswordField ? props.heading2 : props.heading1}
      </h1>

      <Box
        onSubmit={(event) => event.preventDefault()}
        component="form"
        className="w-full max-w-sm mx-auto flex flex-col items-center"
        noValidate
        autoComplete="off"
      >
        <Stack spacing={2} direction="column" className="w-full">
          <InputTextField
            isUsernameFieldErrorEmpty={props.isUsernameFieldErrorEmpty}
            isUsernameField={props.isUsernameField}
            HandleEditButtonClick={props.HandleEditButtonClick}
            HandleUsernameFieldChange={props.HandleUsernameFieldChange}
            username={props.username}
            activeUserField={props.activeUserField}
            inputStyle={{ height: 44, borderRadius: 9999 }}
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
              inputStyle={{ height: 44, borderRadius: 9999 }}
            />
          ) : null}
        </Stack>
        <Stack spacing={2} direction="column" className="w-full mt-4">
          <LoginSignupContinueButton
            type="submit"
            ButtonText={props.ButtonText}
            HandleProceedButtonClick={
              props.isPasswordField
                ? props.HandleProceedButtonClick
                : props.HandleContinueButtonClick
            }
            className="w-full h-11 rounded-full bg-black text-white text-base"
          />
        </Stack>
        <p className="mt-6 text-center">
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
