import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import useFetchApi from "../../API/useFetchApi";
import { useAddPlaylistContext } from "../../context/AddPlaylistContext";

const MySongs = () => {
  const { tracks } = useFetchApi();
  /*  console.log(tracks); */

  //por medio del context muevo la lista de playlist asi me aparecen al hacer click
  const { playlist, setPlaylist } = useAddPlaylistContext();
  //nos importamos el auth0 para identificar el usuario
  const { user } = useAuth0();
  /*    console.log(user); */
  //una vez importado el context hago un filtro del usuario que las ha creado
  const showAllPlaylist = playlist.filter((pl) => pl.emailUser === user.email);

  /*  const listPlaylist = showAllPlaylist.map((lp,i) =>(
    <li key={"lp_" +i}>{lp}</li>
   ))

   console.log(listPlaylist)  */

  return (
    <>
     {/*  {showAllPlaylist.map((lp, _id) => (
        <div key={lp._id}>
          <select>
            <option value="Playlist">{lp.name}</option>
          </select>
        </div>
      ))} */}

      {tracks?.map((tracks) => (
        <div key={tracks._id}>
          <h2>{tracks.name}</h2>

          {/*devuelveme la lista de playlist */}
          <select name="" id="">
          {showAllPlaylist.map((lp) =>(
            <option value={lp.name}>{lp.name}</option>
          ))}
          </select>
        </div>
      ))}
    </>
  );
};

export default MySongs;
