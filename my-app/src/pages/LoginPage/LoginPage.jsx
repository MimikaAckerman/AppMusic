import React from "react";
import cover from '../../assets/img/background.mp4'

import "./LoginPage.css";

const LoginPage = () => {
  return (
    <>
     <video autoPlay loop muted playsInline  className="background-video">
      <source src={cover} type='video/mp4' />
     </video>
    </>
  );
};

export default LoginPage;
