import React, { useState } from "react";
import "./AccountPage.css";
import { Link } from "react-router-dom";

import { useAddPlaylistContext } from "./../../context/AddPlaylistContext";
import { useAuth0 } from "@auth0/auth0-react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {  Pagination } from "swiper";
import styled from "styled-components";

const AccountPage = () => {
  //CLOUDINARY
  const [image, setImage] = useState("");
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
      {/*boton de regreso a la homePage*/}
      <BottonBack>
      <Link to="/homePage">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          version="1.2"
          baseProfile="tiny"
          viewBox="0 0 24 24"
          height="2em"
          width="2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 9.059v-2.559c0-.256-.098-.512-.293-.708-.195-.195-.451-.292-.707-.292s-.512.097-.707.292l-6.293 6.208 6.293 6.207c.195.195.451.293.707.293s.512-.098.707-.293.293-.452.293-.707v-2.489c2.75.068 5.755.566 8 3.989v-1c0-4.633-3.5-8.443-8-8.941z"></path>
        </svg>
      </Link>

      </BottonBack>

      {/* imagen del usuario*/}
      <ContainerImgUser>
            <img src={user.picture} alt={user.name} />
            </ContainerImgUser>

      <div className="team-content">

        {/* iconos de funciones -> settings y la de moneda */}

        <Settings>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.95263 16.9123L8.59323 18.3608L2.03082 12.2016L8.18994 5.63922L9.64826 7.00791L4.85783 12.112L9.95212 16.8932L9.95263 16.9123Z"
              fill="currentColor"
            />
            <path
              d="M14.0474 16.9123L15.4068 18.3608L21.9692 12.2016L15.8101 5.63922L14.3517 7.00791L19.1422 12.112L14.0479 16.8932L14.0474 16.9123Z"
              fill="currentColor"
            />
          </svg>
        </Settings>

        <Bag>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z"
              fill="currentColor"
            />
          </svg>
        </Bag>

        <NameUser>{user.nickname}</NameUser>



{/*carousel de imagenes de las playlist creadas por el usuario*/}

<MyPlaylist>My Playlist</MyPlaylist>
<Swiper
         slidesPerView={3}
         spaceBetween={30}
         pagination={{
           clickable: true,
         }}
         modules={[Pagination]}
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


      </div>
    </>
  );
};

export default AccountPage;


//STYLED COMPONENT----------------------


const ContainerImgUser = styled.div`
margin-top: 2rem;
margin-left: 7rem;

`
const NameUser = styled.h1`
margin-left: 7rem;
`
const BottonBack = styled.button`
color: #090909;
  padding: 0.2em 1.2em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  transition: all .3s;
  box-shadow: 6px 6px 12px #c5c5c5,
             -6px -6px 12px #ffffff;
             &:hover{
              border: 1px solid white;
             }
             &:active{
              box-shadow: 4px 4px 12px #c5c5c5,
             -4px -4px 12px #ffffff;
             }
`
const MyPlaylist = styled.h1`
margin-top: 5rem;
`

const Settings = styled.div`
margin-top: 2rem;
margin-left: 10rem;

`
const Bag = styled.div`
margin-left: 10rem;
`