import React from "react";
import { useAddPlaylistContext } from "./../../context/AddPlaylistContext";
import { useAuth0 } from "@auth0/auth0-react";
import { deleteplaylist } from "../../utils/deletePlaylist";

//STYLED COMPONENT
import styled from "styled-components";
//Swipper

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./AccountSwipper.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";







const AccountPerfile = () => {
  const { playlist, setPlaylist } = useAddPlaylistContext();
  /*  console.log(playlist);
   */
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
    /* console.log(playlist.name);   */

    deleteplaylist(playlistRemove._id);
  }

  /*  console.log(myPlaylist); */

  return (
    <>
      {/* imagen del usuario*/}
      <ContainerImgUser>
        <img
          src={user.picture}
          alt=""
          style={{ borderRadius: 100, height: 70 }}
        />
      </ContainerImgUser>

      <NameUser>Hi! {user.nickname}</NameUser>

      {/*carousel de imagenes de las playlist creadas por el usuario*/}

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {myPlaylist.map((playlist) => (
          <div key={playlist.id}>
            <SwiperSlide>
              <img src={playlist.thumbnail} alt="" />

              <PlaylistDescription>
                <h3>{playlist.name}</h3>
              </PlaylistDescription>

              {/*icon delete */}
              <Icon onClick={() => removePlaylist(playlist)}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1.2"
                  baseProfile="tiny"
                  viewBox="0 0 24 24"
                  height="2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8 8-3.582 8-8-3.581-8-8-8zm3.707 10.293c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293 2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l2.293 2.293 2.293-2.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-2.293 2.293 2.293 2.293z"></path>
                </svg>
              </Icon>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
      <MyPlaylist>My Playlist</MyPlaylist>
      <MyAlbums>My Albums</MyAlbums>
      <MyFavoriteArtist>My Artists</MyFavoriteArtist>
    </>
  );
};

export default AccountPerfile;

//STYLED COMPONENT----------------------

const ContainerImgUser = styled.div`
  position: absolute;
  margin-left: 5.5rem;
  margin-top: 2rem;
`;

const NameUser = styled.h1`
  color: black;
  margin-top: 8rem;
  font-size: 1.5rem;
  margin-left: 4rem;
`;

const MyPlaylist = styled.h1`
  margin-top: -43rem;
  font-size: 1.5rem;
  margin-left: -3rem;
`;
const MyAlbums = styled.h1`
  margin-top: 22rem;
  font-size: 1.5rem;
  margin-left: -3rem;
`;
const MyFavoriteArtist = styled.h1`
  margin-top: 10rem;
  font-size: 1.5rem;
  margin-left: -3rem;
`;

const PlaylistDescription = styled.div`
  position: absolute;
  background-color: #d8d6d7;
  height: 6rem;
  width: 8rem;
  margin-top: 14rem;
`;

const Icon = styled.div`
  position: absolute;
  margin-top: 16rem;
`;
