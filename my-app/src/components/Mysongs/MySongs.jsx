import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import useFetchApi from "../../API/useFetchApi";
import { useAddPlaylistContext } from "../../context/AddPlaylistContext";

import { addTrackInPlaylist } from "../../utils/addTrackInPlaylist";


const MySongs = () => {
  const { tracks } = useFetchApi();
   /* console.log(tracks);  */

  //por medio del context muevo la lista de playlist asi me aparecen al hacer click
  const { playlist} = useAddPlaylistContext();
  //nos importamos el auth0 para identificar el usuario
  const { user } = useAuth0();
  /*  console.log(user); */ 
  //una vez importado el context hago un filtro del usuario que las ha creado
  const showAllPlaylist =  playlist.filter((pl) => pl.emailUser === user.email);

  /*  const listPlaylist = showAllPlaylist.map((lp,i) =>(
    <li key={"lp_" +i}>{lp}</li>
   ))*/

  /*  console.log(showAllPlaylist)  */

  return (
    <>
      {tracks?.map((track) => (
        <div key={track._id}>
          <h2>{track.name}</h2>

          {/*devuelveme la lista de playlist */}
          <form action="#">
          <select name="" id="">
            {showAllPlaylist.map((lp) => (
            
              <option value={lp.name}>{lp.name}</option>
          
            ))}
          </select>
          <button onClick={() => addTrackInPlaylist()} >add</button>
          </form>
          
        </div>
      ))}
    </>
  );
};

export default MySongs;
