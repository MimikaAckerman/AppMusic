import React, { useState } from "react";
import { useAuthContext } from "../../context/LoginContext";
import './AccountPage.css'

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
    
    <div className="div-model">
        {/* contenedor */}
        <div>
        </div>
        <div className="card-profile">
          <div className='card-backgroud'>

          </div>
          {/* card */}
      <div className="our-team">
        <div className="picture">
          {/* aqui va la FUNCION DE IMAGEN DE USUARIO */}
        {myPlaylist.map((playlist) => {

          return <img src={playlist.thumbnail} alt="" />
          
        })}
        </div>
        <div className="team-content">


    <div className="setting">
      
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.95263 16.9123L8.59323 18.3608L2.03082 12.2016L8.18994 5.63922L9.64826 7.00791L4.85783 12.112L9.95212 16.8932L9.95263 16.9123Z" fill="currentColor" /><path d="M14.0474 16.9123L15.4068 18.3608L21.9692 12.2016L15.8101 5.63922L14.3517 7.00791L19.1422 12.112L14.0479 16.8932L14.0474 16.9123Z" fill="currentColor" /></svg>
    </div>

      <div className="bag">
        
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z" fill="currentColor" /></svg>
      </div>

          <h3 className="name">Michele Miller</h3>
          <h4 className="title">Web Developer</h4>

        </div>
      
      </div>
    </div>
    </div>
    <button className="ButtonBackProfile">Logout</button>
    </>
  );
};

export default AccountPage;
