import { Link } from "react-router-dom";
import useFetchApi from "../../API/useFetchApi";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import '../../assets/animation/Swipper.css'
import styled from "styled-components";


const PlaylistContainer = () => {
  const { playlist } = useFetchApi();

  return (
    <>
      <h1>Playlist</h1>

        {/*carousel de imagenes de playlist */}
      <Swiper slidesPerView={1.5} spaceBetween={30} className="mySwiper">
        {playlist.map((playlist) => (
          <div key={playlist.id} >
        
              <SwiperSlide>
              <Link to={`/PlaylistInformation/${playlist.name}`}>
                <img src={playlist.thumbnail} alt={playlist.name} />
                </Link> 
                <Description>
                <NamePlaylist>{playlist.name}</NamePlaylist>
                


                </Description>
              </SwiperSlide>
                    
            {/*   <p>{playlist.isFollowed}</p>
              <p>{playlist.publicAccessible}</p> */}
            
          </div>
        ))}
      </Swiper>
    </>
  );
};
export default PlaylistContainer;

//STYLED COMPONENT

const Description = styled.div`
background-color:#D8D6D7;
opacity: 0.6;
position: absolute;
height: 5rem;
width: 16rem;
margin-top: 11rem;
border-radius: 5px  5px 25px 25px;

`
const NamePlaylist = styled.h2`
font-size: 1.5rem;
color: black;
font-weight: bold;


`