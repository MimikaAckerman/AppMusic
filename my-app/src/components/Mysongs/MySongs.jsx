import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetchApi from "../../API/useFetchApi";
import { useAddPlaylistContext } from "../../context/AddPlaylistContext";

import { addTrackInPlaylist } from "../../utils/addTrackInPlaylist";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";



const MySongs = () => {
  const { tracks } = useFetchApi();
  console.log(tracks);

  //por medio del context muevo la lista de playlist asi me aparecen al hacer click
  const { playlist } = useAddPlaylistContext();
  //nos importamos el auth0 para identificar el usuario
  const { user } = useAuth0();
  /*  console.log(user); */
  //una vez importado el context hago un filtro del usuario que las ha creado
  const showAllPlaylist = playlist.filter((pl) => pl.emailUser === user.email);

  /*  const listPlaylist = showAllPlaylist.map((lp,i) =>(
    <li key={"lp_" +i}>{lp}</li>
   ))*/

  /*  console.log(showAllPlaylist)  */
  const ReloadAdd = (e, track) => {
    e.preventDefault();
    console.log(track);
    addTrackInPlaylist(track);
  };
 
  



  return (
    <>
      {/*devuelveme la lista de los tracks */}
      <h1>name tracks</h1>
      {tracks?.map((track) => (
        <div key={track._id}>
          <Link to={`/TracksPage/${track.name}`}>
            <h2>{track.name}</h2>
          </Link>
          <h3>Artists : {track.artist}</h3>
          <img src={tracks.playlists} alt="" />
          
          {/*devuelveme la lista de playlist */}
          <h1>name playlist</h1>
          <form action="#">
            <select name="" id="">
              {showAllPlaylist.map((lp) => (
             
                <option value={lp.name}>{lp.name}</option>
              ))}
            </select>
            
           
            <button onClick={(e) => ReloadAdd(e, track)}>add</button>
          </form>

          {/* 
         /> */}

         
        </div>

      ))}



    </>
  );
};

export default MySongs;
