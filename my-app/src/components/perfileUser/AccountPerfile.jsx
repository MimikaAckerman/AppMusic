import React from "react";

import { useAddPlaylistContext } from "./../../context/AddPlaylistContext";
import { useAuth0 } from "@auth0/auth0-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import '../../assets/animation/Swipper.css'

//STYLED COMPONENT
import styled from "styled-components";
import { deleteplaylist } from "../../utils/deletePlaylist";

import './../../assets/animation/animations.css'
import { Link } from "react-router-dom";


const AccountPerfile = () => {
  const { playlist, setPlaylist } = useAddPlaylistContext();
  console.log(playlist); 
 
  //auth0 -> sacar la imagen y el nombre del usuario
  const { user } = useAuth0();
  /* console.log(user); */

  //creamos una constante que haga un filtrado de las playlist y que estas sean igual al usuario que las ha creado
  const myPlaylist = playlist.filter((pl) => pl.emailUser === user.email);




function removePlaylist(playlistRemove){
  //elimina la playlist visualmente y por consola
    const removePlaylist = playlist.filter((pl) => pl._id !== playlistRemove._id)

  setPlaylist(removePlaylist)
  console.log(playlist.name);  
   
deleteplaylist(playlistRemove._id)
} 


 
  /*  console.log(myPlaylist); */

  return (
    <>
<div class="loader">
    <div class="circle"></div>
</div>




      {/* imagen del usuario*/}
      <ContainerImgUser>
        <img src={user.picture} alt={user.name} 
        style={{ borderRadius: 100, height: 150 }}/>
      </ContainerImgUser>

      <NameUser>Hi! {user.nickname}</NameUser>

      {/*carousel de imagenes de las playlist creadas por el usuario*/}

      <MyPlaylist>My Playlist</MyPlaylist>
      <Swiper slidesPerView={1.5} spaceBetween={30}
        className="mySwiper">
        {myPlaylist.map((playlist) => (
          <div key={playlist.id}>
            <SwiperSlide>
              <Link to={`/PlaylistInformation/${playlist.name}`}>
              <img src={playlist.thumbnail} alt="" />
              </Link>
              <PlaylistDescription>
              <h3>{playlist.name}</h3>
              <h2>{playlist.tracks}</h2>
              </PlaylistDescription>

                  {/*icon delete */}
             <Icon  onClick={() => removePlaylist(playlist)}>delete</Icon>
            
            </SwiperSlide>
            </div>
         
        ))}
     
      </Swiper>


      <h1>My Albums</h1>

      <h1>My Artists</h1>
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
  color: #F8F9FC;
`;

const MyPlaylist = styled.h1`
  margin-top: 5rem;
`;



const PlaylistDescription = styled.div`
position: absolute;
background-color:#F2AA1F;
height: 6rem;
width: 16rem;
margin-top: 14rem;
border-radius: 5px  5px 25px 25px;
`

const Icon = styled.div`
position:absolute;
margin-top:16rem
`