import React, { useState } from "react";
import LoginSignupButtons from "./LoginSigupButtons";
import LoginSignupForm from "./LoginSignupForm";
import DobPopUp from "./DOBPopUp";
import HeaderAuthDark from "./HeaderAuthDark";
import HeaderAuthLight from "./HeaderAuthLight";
import FooterAuthDark from "./FooterAuthDark";
import FooterAuthLight from "./FooterAuthLight";
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
  const [dobPopUp, setDobPopUp] = useState(false);
  const [blankPage, setBlankPage] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
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
    } else {
      axios
        .post("http://localhost:3000/login", {
          username: username,
          password: password,
        })
        .then(function (response) {
          if (response.data.result) {
            if (response.data.user.DOB == null) {
              setCurrentUser(response.data.user);
              setBlankPage(true);
              setDobPopUp(true);
            } else {
              props.currentUser(response.data.user);
              props.confirm(true);
            }
          } else {
            SetIncorrectPasswordError(true);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  function HandleContinueLoginClick() {
    if (username.length < 6) {
      setUsernameFieldErrorEmpty(true);
    } else {
      axios
        .post("http://localhost:3000/checkUserName", {
          username: username,
        })
        .then(function (response) {
          if (!response.data.exists) {
            setPasswordField(true);
            setUsernameField(false);
            setUsernameFieldErrorEmpty(false);
            setPageLogin(false);
          } else if (response.data.exists) {
            setPasswordField(true);
            setUsernameField(false);
            setUsernameFieldErrorEmpty(false);
            setPageLogin(true);
          } else {
            setPasswordField(true);
            setUsernameField(false);
            setUsernameFieldErrorEmpty(false);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  function HandleProceedSignupClick() {
    if (password.length < 8) {
      setPasswordFieldErrorEmpty(true);
    } else {
      axios
        .post("http://localhost:3000/signup", {
          username: username,
          password: password,
        })
        .then(function (response) {
          if (response.data.result) {
            if (response.data.user.DOB == null) {
              setCurrentUser(response.data.user);
              setBlankPage(true);
              setDobPopUp(true);
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  function HandleContinueSignupClick() {
    if (username.length < 6) {
      setUsernameFieldErrorEmpty(true);
    } else {
      axios
        .post("http://localhost:3000/checkUserName", {
          username: username,
        })
        .then(function (response) {
          if (response.data.exists) {
            setPasswordField(true);
            setUsernameField(false);
            setUsernameFieldErrorEmpty(false);
            setPageLogin(true);
          } else if (!response.data.exists) {
            setPasswordField(true);
            setUsernameField(false);
            setUsernameFieldErrorEmpty(false);
            setPageLogin(false);
          } else {
            setPasswordField(true);
            setUsernameField(false);
            setUsernameFieldErrorEmpty(false);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  function HandleDobChange(value) {
    props.currentUser(value);
    props.confirm(true);
  }

  return (
    <>
      {!blankPage ? (
        homepage ? (
          <div className="min-h-screen flex flex-col bg-black">
            <HeaderAuthDark />
            <main className="flex-grow flex items-center justify-center px-4">
              <div className="w-full max-w-md">
                <h1 className="text-white text-3xl text-center mb-8">
                  Get started
                </h1>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
                  <LoginSignupButtons
                    HandleLoginClick={HandleLoginClick}
                    textLabel="Log in"
                  />
                  <LoginSignupButtons
                    HandleLoginClick={HandleSignupClick}
                    textLabel="Sign up"
                  />
                </div>
              </div>
            </main>
            <FooterAuthDark />
          </div>
        ) : (
          <div className="min-h-screen flex flex-col bg-white">
            <HeaderAuthLight />
            <main className="flex-grow flex items-center justify-center">
              {pageLogin ? (
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
              ) : (
                <LoginSignupForm
                  heading1={"Create an account"}
                  heading2={"Create a password"}
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
              )}
            </main>
            <FooterAuthLight />
          </div>
        )
      ) : (
        <div>
          {dobPopUp ? (
            <DobPopUp data={currentUser} currentUser={HandleDobChange} />
          ) : null}
        </div>
      )}
    </>
  );
}

export default LoginSignup;
