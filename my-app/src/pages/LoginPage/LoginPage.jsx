import React from "react";
import styled from "styled-components";
import cover from "../../assets/img/background.mp4";


import { LoginButton } from "../../components/Form/Login/Login";
import "./LoginPage.css";

const LoginPage = () => {

  return (
    <>
      <ButtonLogin>
      
          <LoginButton />
        
      </ButtonLogin>

      <video autoPlay loop muted playsInline className="background-video">
        <source src={cover} type="video/mp4" />
      </video>
    </>
  );
};

export default LoginPage;

const ButtonLogin = styled.div`
position: absolute ;
margin-left:5rem ;


`