import React from "react";
import styled from "styled-components";
import cover from "../../assets/img/background.mp4";

import { LoginButton } from "../../components/Form/Login/Login";

const LoginPage = () => {
  return (
    <>
      <BackgroundVideo autoPlay loop muted playsInline>
        <source src={cover} type="video/mp4" />
      </BackgroundVideo>
      <ButtonLogin>
        <LoginButton />
      </ButtonLogin>
    </>
  );
};

export default LoginPage;

const ButtonLogin = styled.div`
  position: absolute;
  margin-top: 40rem;
  margin-left: 10rem;
`;

const BackgroundVideo = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: 45rem;
`;
