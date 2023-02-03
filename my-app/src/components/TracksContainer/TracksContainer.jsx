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
import styled,{createGlobalStyle} from "styled-components";

const TracksContainer = () => {
  const { tracks } = useFetchApi();

  const [currentTrack, setTrackIndex] = useState(0);
  // Wasn't working until i put optional chaining operator "?" before url in playlist
  const playlist = tracks[currentTrack]?.url;
  console.log(playlist);



  const name = tracks[currentTrack]?.name;

  const artist = tracks[currentTrack]?.artist;

  const genre = tracks[currentTrack]?.genre;
 



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
  
        <GlobalStyle/>
       <DivTracks>

          <div className="containerTrack">
            <h1>nametrack</h1>
            <p className="nameTracks">{name}</p>
            <h2>trackartist</h2>
            <p className="trackartist">{artist}</p>
            <h2>genretrack</h2>
            <p className="genreTrack">{genre}</p>
            

            <AudioPlayer
              // autoPlay
              src={playlist}
              onPlay={(e) => console.log("onPlay") }
              // other props here
              showSkipControls={true}
              showJumpControls={true}
              onClickNext={handleClickNext}
              onClickPrevious={handleClickPrevious}
              onEnded={handleEnd}
            />


          </div>
      </DivTracks>


    </>
  );
};

export default TracksContainer;


const GlobalStyle = createGlobalStyle`
body{
  color: ${(props) => (props.blackColor ? "black" : "black")};
   background-color: #F1ECE7;
   color: #2f3132;
    font-size: 18px ;
    font-weight: 1000 ;
    font-family: 'Rokkitt', serif;
  }
`;

const DivTracks = styled.div`
  background: #efe2d5;
  width: 400px;
  height: 640px;
  position: fixed;
  display: grid;
  text-align: center;
  margin-left: 30%;
  margin-top: 35%;
`
