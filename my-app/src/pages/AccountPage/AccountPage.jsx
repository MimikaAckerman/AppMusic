import React, { useState } from "react";
import { useAuthContext } from "../../context/LoginContext";

import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

import { useAddPlaylistContext } from "./../../context/AddPlaylistContext";
import { useAuth0 } from "@auth0/auth0-react";

const AccountPage = () => {
  //CLOUDINARY
  const [image, setImage] = useState("");
  const { playlist, setPlaylist } = useAddPlaylistContext();
  console.log(playlist);
 const { user } = useAuth0();
   console.log(user); 

  //la playlist que creo el usuario
  const myPlaylist = playlist.filter((pl) => pl.emailUser === user.email);

  console.log(myPlaylist);

  return (
    <>
      {myPlaylist.map((playlist) => {
        return <img src={playlist.thumbnail} alt="" />
        
      })}
    </>
  );
};

export default AccountPage;
