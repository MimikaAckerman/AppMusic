import React, { useState } from "react"
import { useEffect } from "react";
import { useRef } from "react";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


function TracksContainer()  {
  const [song,setSong] = useState('');
  const player = useRef();
  const { tracks } = useFetchApi();
  useEffect((fetch) => {
    fetch.get('http://localhost:4000/MySongsPage').then(res=>setSong(res.data[0].track))
  },[]);

  const audiofunction = () => {
    player.current.audio.current.play();
};

return(
  <>
  <div className="app">
    
  <AudioPlayer
   preload='metadata'
    src={song}
    onPlay={e => console.log("onPlay")}
    ref={player}
  />
<button onClick={audiofunction}>play</button>
    </div>




  
  
  </>
)
}

export default TracksContainer;
