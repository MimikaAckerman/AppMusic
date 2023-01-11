import React, { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import useFetchApi from "../../API/useFetchApi";
import { Link } from "react-router-dom";
import "./TracksContainer.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


const TracksContainer = () => {



  const settings = {
    dots: true,
    infinite: false,
    focusOnSelect: true,
    speed: 500,
    /*  slidesToShow: 7,
    slidesToScroll: 4, */
    initialSlide: 0,
    responsive: [
      {
        //px in the screen
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

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
   {/*    <h5 className="title__suggestion">Suggestions You May Like </h5> */}
      <Slider className="status__slider__tracks" {...settings}>
        {tracks
          .sort(() => Math.random() - 0.5)
          .slice(1, 4)
          .map((track) => (
            <div key={track.id}>
              <img
                className="status__avatar__tracks"
                src={track.thumbnail}
                alt={track.name}
              />
              {/* <img src={track.url} alt={track.name} /> */}
              <div className="contentBx">
                {/*       <h3>{track.name}</h3> */}
                {/*  <h3 className="trackArtist">{track.artist}</h3> */}
                {/* <h3 className="trackGenre">{track.genre}</h3> */}
              </div>
            </div>
          ))}
      </Slider>

      {/*   listen music--------------------------------------------------------------------------------  */}
      <div className="containerBody">
        <section>
          <div className="containerTrack">
            <img className="imgTrack" src={thumbnail} alt="" />
            <p className="nameTracks">{name}</p>
            <p className="trackartist">{artist}</p>
            <p className="genreTrack">{genre}</p>
            <p>{{ liked } === false ? "❤" : "💘"}</p>

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
        </section>
      </div>
    </>
  );
};

export default TracksContainer;
