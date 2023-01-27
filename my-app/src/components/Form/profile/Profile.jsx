import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  //this is information the user for example TOKEN
  console.log(user);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    isAuthenticated && (
      <div>
        <h1>{user.name}</h1>

        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
      </div>
    )
  );
};
