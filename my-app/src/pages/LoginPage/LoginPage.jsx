import React from "react";
import cover from "../../assets/img/background.mp4";

import { LoginButton } from "../../components/Form/Login/Login";
<<<<<<< HEAD

import "./LoginPage.css";

const LoginPage = () => {
  return (
    <>
      <LoginButton />
=======
import "./LoginPage.css";

const LoginPage = () => {

  return (
    <>
      <div className="App">
      
          <LoginButton />
        
      </div>
>>>>>>> 095a43aeea083971b681f55e2a6a1e3c023c7dcf

      <video autoPlay loop muted playsInline className="background-video">
        <source src={cover} type="video/mp4" />
      </video>
    </>
  );
};

export default LoginPage;
