import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import cover from "../../assets/img/background.mp4";
import { LoginButton } from "../../components/Form/Login/Login";

import Profile from "../../components/Form/profile/Profile";
import "./LoginPage.css";

const LoginPage = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <div className="App">
        {isAuthenticated ? (
          <>
            <Profile />
          </>
        ) : (
          <LoginButton />
        )}
      </div>

      <video autoPlay loop muted playsInline className="background-video">
        <source src={cover} type="video/mp4" />
      </video>
    </>
  );
};

export default LoginPage;
