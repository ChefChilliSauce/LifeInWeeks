import React, { useState } from "react";
import LoginSignupButtons from "./LoginSigupButtons";
import LoginSignupForm from "./LoginSignupForm";
import Stack from "@mui/material/Stack";
import axios from "axios";

function LoginSignup(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [homepage, setHomepage] = useState(true);
  const [pageLogin, setPageLogin] = useState(false);
  const [passwordField, setPasswordField] = useState(false);
  const [usernameField, setUsernameField] = useState(true);
  const [usernameFieldErrorEmpty, setUsernameFieldErrorEmpty] = useState(false);
  const [passwordFieldErrorEmpty, setPasswordFieldErrorEmpty] = useState(false);
  const [incorrectPasswordError, SetIncorrectPasswordError] = useState(false);
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

  function HandleProceedLoginClick() {
    setPasswordFieldErrorEmpty(false);
    SetIncorrectPasswordError(false);

    if (password.length < 8) {
      setPasswordFieldErrorEmpty(true);
      return;
    }

    if (password === "qwerty12") {
      props.confirm(true);
      // Uncomment and use axios here for backend check
    } else {
      SetIncorrectPasswordError(true);
    }
  }
  // axios
  //   .post("http://localhost:3000/login", {
  //     username: username,
  //     password: password,
  //   })
  //   .then(function (response) {
  //     if (response) {
  //       props.confirm(true);
  //     } else {
  //       setPasswordStatus(false);
  //     }
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  function HandleContinueLoginClick() {
    if (username.length >= 0 && username.length < 6) {
      setUsernameFieldErrorEmpty(true);
    } else {
      setPasswordField(true);
      setUsernameField(false);
      setUsernameFieldErrorEmpty(false);
      setPageLogin(true);
      // axios
      //   .post("http://localhost:3000/checkUserName", {
      //     username: username,
      //   })
      //   .then(function (response) {
      //     if (!response.data.exists) {
      //       setPasswordField(true);
      //       setUsernameField(false);
      //       setUsernameFieldErrorEmpty(false);
      //       setPageLogin(false);
      //     } else if (response.data.exists) {
      //       setPasswordField(true);
      //       setUsernameField(false);
      //       setUsernameFieldErrorEmpty(false);
      //       setPageLogin(true);
      //     } else {
      //       setPasswordField(true);
      //       setUsernameField(false);
      //       setUsernameFieldErrorEmpty(false);
    }
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    // }
  }

  function HandleProceedSignupClick() {
    if (password.length >= 0 && password.length < 8) {
      setPasswordFieldErrorEmpty(true);
    } else {
      // axios
      //   .post("http://localhost:3000/signup", {
      //     username: username,
      //     password: password,
      //   })
      //   .then(function (response) {
      //     if (response.data.exists) {
      //       props.confirm(true);
      //     }
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    }
  }

  function HandleContinueSignupClick() {
    if (username.length >= 0 && username.length < 6) {
      setUsernameFieldErrorEmpty(true);
    } else {
      setPasswordField(true);
      setUsernameField(false);
      setUsernameFieldErrorEmpty(false);
      setPageLogin(false);
      // axios
      //   .post("http://localhost:3000/checkUserName", {
      //     username: username,
      //   })
      //   .then(function (response) {
      //     if (response.data.exists) {
      //       setPasswordField(true);
      //       setUsernameField(false);
      //       setUsernameFieldErrorEmpty(false);
      //       setPageLogin(true);
      //     } else if (!response.data.exists) {
      //       setPasswordField(true);
      //       setUsernameField(false);
      //       setUsernameFieldErrorEmpty(false);
      //       setPageLogin(false);
      //     } else {
      //       setPasswordField(true);
      //       setUsernameField(false);
      //       setUsernameFieldErrorEmpty(false);
      //     }
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
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
      <div className="min-h-screen flex flex-col items-center justify-center">
        {pageLogin && !homepage ? (
          <LoginSignupForm
            heading1={"Welcome back"}
            heading2={"Enter your password"}
            paragraph={"Dont have an account?"}
            details={"Sign up"}
            isUsernameFieldErrorEmpty={usernameFieldErrorEmpty}
            isPasswordFieldErrorEmpty={passwordFieldErrorEmpty}
            isPasswordStatus={incorrectPasswordError}
            isUsernameField={usernameField}
            HandleEditButtonClick={HandleLoginClick}
            HandleUsernameFieldChange={HandleUsernameChange}
            username={username}
            activeUserField={"userField"}
            activePassField={"passField"}
            ButtonText={"Continue"}
            HandleContinueButtonClick={HandleContinueLoginClick}
            HandleProceedButtonClick={HandleProceedLoginClick}
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
            heading1={"Create an account"}
            heading2={"Create an password"}
            paragraph={"Already have an account?"}
            details={"Log in"}
            isUsernameFieldErrorEmpty={usernameFieldErrorEmpty}
            isPasswordFieldErrorEmpty={passwordFieldErrorEmpty}
            isUsernameField={usernameField}
            HandleEditButtonClick={HandleSignupClick}
            HandleUsernameFieldChange={HandleUsernameChange}
            username={username}
            activeUserField={"userField"}
            activePassField={"passField"}
            ButtonText={"Continue"}
            HandleContinueButtonClick={HandleContinueSignupClick}
            HandleProceedButtonClick={HandleProceedSignupClick}
            isPasswordField={passwordField}
            isShowPassword={showPassword}
            handleClickShowPasswordButton={handleClickShowPassword}
            HandlePasswordFieldChange={HandlePasswordChange}
            password={password}
            HandleChangeButtonClick={HandleLoginClick}
          />
        ) : null}
      </div>
    </>
  );
}

export default LoginSignup;
