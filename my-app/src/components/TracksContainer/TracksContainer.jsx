import React, { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import useFetchApi from "../../API/useFetchApi";

import "./TracksContainer.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const TracksContainer = () => {
  const { tracks } = useFetchApi();

  const [currentTrack, setTrackIndex] = useState(0);
  console.log(currentTrack);
  // Wasn't working until i put optional chaining operator "?" before url in playlist
  const playlist = tracks[currentTrack]?.url;
  const thumbnail = tracks[currentTrack]?.thumbnail;
  const name = tracks[currentTrack]?.name;

  const artist = tracks[currentTrack]?.artist;

  const genre = tracks[currentTrack]?.genre;
  const liked = tracks[currentTrack]?.liked;

  console.log(playlist);

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < tracks.length - 1 ? currentTrack + 1 : 0
    );
  };

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < tracks.length - 1 ? currentTrack - 1 : 0
    );
  };

  const handleEnd = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < tracks.length - 1 ? currentTrack + 2 : 0
    );
  };

  return (
    <>
    
    <div className="img-alet-desing">
      {tracks
          .sort(() => Math.random() - 0.5)
          .slice(1, 4)
          .map((track) => (
            <div key={track.id}>
          
                <img src={track.thumbnail} alt={track.name} className='img-alet' />
               
            </div>
          ))}
   
   </div>

   



      
    

      {/*   listen music--------------------------------------------------------------------------------  */}
      <div className="containerBody">
            <img className="imgTrack" src={thumbnail} alt="" />

       <div className="img-details">
            <p >{name}</p>
            <p >{artist}</p>
            <p >{genre}</p>
            <p >{{ liked } === false ? "❤" : "💘"}</p>
            </div>

<div className="player">
            <AudioPlayer
              // autoPlay
              src={playlist}
              onPlay={(e) => console.log("onPlay")}
              // other props here
              showSkipControls={true}
              showJumpControls={true}
              onClickNext={handleClickNext}
              onClickPrevious={handleClickPrevious}
              onEnded={handleEnd}
            />
            </div>
          
       
      </div>
    </>
  );
};

export default TracksContainer;
