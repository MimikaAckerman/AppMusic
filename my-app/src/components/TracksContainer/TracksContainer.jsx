import React, { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import useFetchApi from "../../API/useFetchApi";
import "./TracksContainer.css";
import ListItemButton from "@mui/material/ListItemButton";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
// Import Swiper React components

import { List, Box, Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const TracksContainer = () => {
  const { tracks } = useFetchApi();

  const [currentTrack, setTrackIndex] = useState(0);
  /*  console.log(currentTrack); */
  // Wasn't working until i put optional chaining operator "?" before url in playlist
  const playlist = tracks[currentTrack]?.url;
  const thumbnail = tracks[currentTrack]?.thumbnail;
  const name = tracks[currentTrack]?.name;
  const artist = tracks[currentTrack]?.artist;
  /*   const genre = tracks[currentTrack]?.genre;
  const liked = tracks[currentTrack]?.liked; */
  /* 
  console.log(playlist); */

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < tracks.length - 1 ? currentTrack + 1 : 0
    );
  };

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack, swiperTrack) =>
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
      <h1>Tracks</h1>

      <div className="img-alet-desing">
        {tracks.map((track) => (
          <div key={track.id}>
            <Box
              sx={{
                width: "100%",
                bgcolor: "background.paper",
              }}
            >
              <List>
                <ListItemButton>
                  <Link to={"/TracksPage/${:id}"}>
                    <img
                      src={track.thumbnail}
                      alt={track.name}
                      className="img-alet"
                    />
                    <h3 className="track_name">{track.name}</h3>
                  </Link>
                </ListItemButton>
                <Button>
                  <MoreHorizIcon />
                </Button>
              </List>
            </Box>
          </div>
        ))}
      </div>
      {/*  <p className="tracks-description">{genre}</p> */}
      {/*   listen music--------------------------------------------------------------------------------  */}
      <div className="containerBody">
        <img className="imgTrack" src={thumbnail} alt="" />

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

        <div className="trackTitle">
          <h3 className="tracks-description">{name}</h3>
          <h4 className="tracks-description">{artist}</h4>
        </div>
      </div>
    </>
  );
};

export default TracksContainer;
