import React, { useState } from "react";
import LoginSignupButtons from "./LoginSigupButtons";
import LoginSignupForm from "./LoginSignupForm";
import Stack from "@mui/material/Stack";

function LoginSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const [homepage, setHomepage] = useState(true);
  const [pageLogin, setPageLogin] = useState(false);
  const [passwordField, setPasswordField] = useState(false);
  const [usernameField, setUsernameField] = useState(true);
  const [usernameFieldErrorEmpty, setUsernameFieldErrorEmpty] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleClickShowPassword() {
    setShowPassword((show) => !show);
  }

  function HandlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function HandleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function HandleLoginClick() {
    setPageLogin(true);
    setHomepage(false);
    setPasswordField(false);
    setUsernameField(true);
    setUsername("");
    setPassword("");
  }

  function HandleSignupClick() {
    setPageLogin(false);
    setHomepage(false);
    setPasswordField(false);
    setUsernameField(true);
    setUsername("");
    setPassword("");
  }

  function HandleContinueClick() {
    if (username.length == 0) {
      setUsernameFieldErrorEmpty(true);
    } else {
      setPasswordField(true);
      setUsernameField(false);
      setUsernameFieldErrorEmpty(false);
    }
  }

  return (
    <>
      {homepage ? (
        <div className="min-h-screen flex items-center justify-center bg-black">
          <Stack spacing={2} direction="column">
            <h1 className="text-white text-3xl text-center">Get started</h1>
            <Stack spacing={2} direction={{ xs: "column", sm: "row" }}>
              <LoginSignupButtons
                HandleLoginClick={HandleLoginClick}
                textLabel="Log in"
              />
              <LoginSignupButtons
                HandleLoginClick={HandleSignupClick}
                textLabel="Sign up"
              />
            </Stack>
          </Stack>
        </div>
      ) : null}
      {pageLogin && !homepage ? (
        <LoginSignupForm
          heading={"Welcome back"}
          paragraph={"Dont have an account?"}
          details={"Sign up"}
          isUsernameFieldErrorEmpty={usernameFieldErrorEmpty}
          isUsernameField={usernameField}
          HandleEditButtonClick={HandleLoginClick}
          HandleUsernameFieldChange={HandleUsernameChange}
          username={username}
          activeUserField={"userField"}
          activePassField={"passField"}
          ButtonText={"Continue"}
          HandleContinueButtonClick={HandleContinueClick}
          isPasswordField={passwordField}
          isShowPassword={showPassword}
          handleClickShowPasswordButton={handleClickShowPassword}
          HandlePasswordFieldChange={HandlePasswordChange}
          password={password}
          HandleChangeButtonClick={HandleSignupClick}
        />
      ) : null}
      {!pageLogin && !homepage ? (
        <LoginSignupForm
          heading={"Create an account"}
          paragraph={"Already have an account?"}
          details={"Log in"}
          isUsernameFieldErrorEmpty={usernameFieldErrorEmpty}
          isUsernameField={usernameField}
          HandleEditButtonClick={HandleSignupClick}
          HandleUsernameFieldChange={HandleUsernameChange}
          username={username}
          activeUserField={"userField"}
          activePassField={"passField"}
          ButtonText={"Continue"}
          HandleContinueButtonClick={HandleContinueClick}
          isPasswordField={passwordField}
          isShowPassword={showPassword}
          handleClickShowPasswordButton={handleClickShowPassword}
          HandlePasswordFieldChange={HandlePasswordChange}
          password={password}
          HandleChangeButtonClick={HandleLoginClick}
        />
      ) : null}
    </>
  );
}

export default LoginSignup;
