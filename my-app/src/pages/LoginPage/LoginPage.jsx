import React from "react";
import styled from "styled-components";
import cover from "../../assets/img/background.mp4";


import { LoginButton } from "../../components/Form/Login/Login";
import "./LoginPage.css";

const LoginPage = () => {

  return (
    <>
      

      <video autoPlay loop muted playsInline className="background-video">
        <source src={cover} type="video/mp4" />
       


      </video>
      <ButtonLogin>
      
      <LoginButton />
    
  </ButtonLogin>
    </>
  );
};

export default LoginPage;

const ButtonLogin = styled.div`
position: absolute ;
margin-top: 40rem ;
margin-left:10rem ;



`