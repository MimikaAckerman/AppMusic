import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Audio } from "react-loader-spinner";
export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  //this is information the user for example TOKEN
  /*  console.log(user); */

  if (isLoading) {
    return (
      <div>
        <Audio
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="audio-loading"
          wrapperStyle={{}}
          wrapperClass="wrapper-class"
          visible={true}
        />
      </div>
    );
  }
  return (
    isAuthenticated && (
      <div>
        <h1>Hi! {user.nickname}🎧</h1>

        {/*  <img src={user.picture} alt={user.name} /> */}
        {/*     <h2>{user.name}</h2> */}
        {/*     <p>Email: {user.email}</p> */}
      </div>
    )
  );
};
