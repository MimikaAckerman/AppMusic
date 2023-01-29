import React from "react";

import { useAddPlaylistContext } from "./../../context/AddPlaylistContext";
import { useAuth0 } from "@auth0/auth0-react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import styled from "styled-components";
const AccountPerfile = () => {
  const { playlist, setPlaylist } = useAddPlaylistContext();
  /* console.log(playlist); */

  //auth0 -> sacar la imagen y el nombre del usuario
  const { user } = useAuth0();
  /* console.log(user); */

  //creamos una constante que haga un filtrado de las playlist y que estas sean igual al usuario que las ha creado
  const myPlaylist = playlist.filter((pl) => pl.emailUser === user.email);

  /*  console.log(myPlaylist); */

  return (
    <>
      {/* imagen del usuario*/}
      <ContainerImgUser>
        <img src={user.picture} alt={user.name} />
      </ContainerImgUser>

      <NameUser>{user.nickname}</NameUser>

      {/*carousel de imagenes de las playlist creadas por el usuario*/}

      <MyPlaylist>My Playlist</MyPlaylist>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={30}
      
        className="mySwiper"
      >
        {myPlaylist.map((playlist) => (
            <SwiperSlide>
              <img src={playlist.thumbnail} alt="" />
              <PlaylistDescription>
              <h1>{playlist.name}</h1>

              {/*icon delete */}
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8 8-3.582 8-8-3.581-8-8-8zm3.707 10.293c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293 2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l2.293 2.293 2.293-2.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-2.293 2.293 2.293 2.293z"></path></svg>
              </PlaylistDescription>
            
            </SwiperSlide>
         
        ))}
     
      </Swiper>
    </>
  );
};

export default AccountPerfile;

//STYLED COMPONENT----------------------

const ContainerImgUser = styled.div`
  margin-top: 2rem;
  margin-left: 7rem;
`;
const NameUser = styled.h1`
  margin-left: 7rem;
  margin-top: 8rem;
`;

const MyPlaylist = styled.h1`
  margin-top: 5rem;
`;



const PlaylistDescription = styled.div`
position: absolute;
`