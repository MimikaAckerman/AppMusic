import React from "react";
import cover from "../../assets/img/background.mp4";


import { LoginButton } from "../../components/Form/Login/Login";
import "./LoginPage.css";

const LoginPage = () => {

  return (
    <>
      <div className="App">
      
          <LoginButton />
        
      </div>

      <video autoPlay loop muted playsInline className="background-video">
        <source src={cover} type="video/mp4" />
      </video>
    </>
  );
};

export default LoginPage;
