import React, { useState } from "react";
import { useAuthContext } from "../../context/LoginContext";

import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

import { useAddPlaylistContext } from "./../../context/AddPlaylistContext";
import { useAuth0 } from "@auth0/auth0-react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper";

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
      <Link to="/homePage">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          version="1.2"
          baseProfile="tiny"
          viewBox="0 0 24 24"
          height="3em"
          width="3em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 9.059v-2.559c0-.256-.098-.512-.293-.708-.195-.195-.451-.292-.707-.292s-.512.097-.707.292l-6.293 6.208 6.293 6.207c.195.195.451.293.707.293s.512-.098.707-.293.293-.452.293-.707v-2.489c2.75.068 5.755.566 8 3.989v-1c0-4.633-3.5-8.443-8-8.941z"></path>
        </svg>
      </Link>

      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {myPlaylist.map((playlist) => {
          return (
            <SwiperSlide>
              <img src={playlist.thumbnail} alt="" />{" "}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default AccountPage;
