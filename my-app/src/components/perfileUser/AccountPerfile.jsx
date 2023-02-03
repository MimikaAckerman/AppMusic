import React, { useState } from "react";

import { useAddPlaylistContext } from "./../../context/AddPlaylistContext";
import { useAuth0 } from "@auth0/auth0-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../../assets/animation/Swipper.css";

//STYLED COMPONENT
import styled from "styled-components";
import { deleteplaylist } from "../../utils/deletePlaylist";

import "./../../assets/animation/animations.css";
import { Link } from "react-router-dom";

//MY FAVORITE SONGS

import { getItem, setItem } from "../../services/LocalStorageFuncs";
import { CiCircleRemove } from "react-icons/ci";

const AccountPerfile = () => {
  const { playlist, setPlaylist } = useAddPlaylistContext();
  console.log(playlist);

  //auth0 -> sacar la imagen y el nombre del usuario
  const { user } = useAuth0();
  /* console.log(user); */

  //creamos una constante que haga un filtrado de las playlist y que estas sean igual al usuario que las ha creado
  const myPlaylist = playlist.filter((pl) => pl.emailUser === user.email);

  function removePlaylist(playlistRemove) {
    //elimina la playlist visualmente y por consola
    const removePlaylist = playlist.filter(
      (pl) => pl._id !== playlistRemove._id
    );

    setPlaylist(removePlaylist);
    console.log(playlist.name);

    deleteplaylist(playlistRemove._id);
  }

  //favorite album

  const [data, setData] = useState(getItem("likeSongs") || []);

  const removeItem = (obj) => {
    const arrFilter = data.filter((al) => al.id !== obj.id);
    setData(arrFilter);
    setItem("likeSongs", arrFilter);
  };

  /*  console.log(myPlaylist); */

  return (
    <>
      <div class="loader">
        <div class="circle"></div>
      </div>

      {/* imagen del usuario*/}
      <ContainerImgUser>
        <img
          src={user.picture}
          alt={user.name}
          style={{ borderRadius: 100, height: 150 }}
        />
      </ContainerImgUser>

      <NameUser>Hi! {user.nickname}</NameUser>

      {/*carousel de imagenes de las playlist creadas por el usuario*/}

      <MyPlaylist>My Playlist</MyPlaylist>
      <Swiper slidesPerView={1.5} spaceBetween={30} className="mySwiper">
        {myPlaylist.map((playlist) => (
          <div key={playlist.id}>
            <SwiperSlide>
              <Link to={`/PlaylistInformation/${playlist.name}`}>
                <img src={playlist.thumbnail} alt="" />
              </Link>
              <PlaylistDescription>
                <h3>{playlist.name}</h3>
                {/*  <h2>{playlist.tracks}</h2> */}
              </PlaylistDescription>

              {/*icon delete */}
              <Icon onClick={() => removePlaylist(playlist)}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"></path>
                </svg>
              </Icon>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>

      <h1>My Albums</h1>
      <Swiper slidesPerView={1.5} spaceBetween={30} className="mySwiper">
        {data.map((al) => (
          <div key={al.id}>
            <SwiperSlide>
              <Link to={`/AlbumsInformation/${al.name}`}>
                <img src={al.imageUrl} alt={al.name} style={{ height: 300 }} />
              </Link>
              <AlbumsDestription>
                <H3Artist>{al.name}</H3Artist>
                <H4Artist>{al.artist}</H4Artist>
              </AlbumsDestription>

              <IconDeleteAlbum onClick={() => removeItem(al)}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"></path>
                </svg>
              </IconDeleteAlbum>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>

      <H1Artist>My Artists</H1Artist>
    </>
  );
};

export default AccountPerfile;

//STYLED COMPONENT----------------------

const ContainerImgUser = styled.div`
  margin-top: -2rem;
  margin-left: 7rem;
`;
const NameUser = styled.h1`
  margin-left: 6rem;
  margin-top: 6rem;
  color: #f8f9fc;
`;

const MyPlaylist = styled.h1`
  margin-top: 5rem;
`;

const PlaylistDescription = styled.div`
  position: absolute;
  background-color: #f2aa1f;
  height: 6rem;
  width: 16rem;
  margin-top: 14rem;
  border-radius: 5px 5px 25px 25px;
`;

const Icon = styled.div`
  position: absolute;
  margin-top: 16rem;
`;
const IconDeleteAlbum = styled.div`
  position: absolute;
  margin-top: 16rem;
`;
const AlbumsDestription = styled.div`
  position: absolute;
  background-color: #f2aa1f;
  height: 8rem;
  width: 16rem;
  margin-top: 13rem;
  border-radius: 5px 5px 25px 25px;
`;
const H1Artist = styled.h1`
  margin-top: 3rem;
`;
const H3Artist = styled.h3`
  margin-top: 1rem;
`;
const H4Artist = styled.h4`
  margin-top: -1rem;
`;
