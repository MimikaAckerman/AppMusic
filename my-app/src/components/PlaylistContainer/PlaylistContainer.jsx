import { Link } from "react-router-dom";
import useFetchApi from "../../API/useFetchApi";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import '../../assets/carousel/Swipper.css'
import styled from "styled-components";


const PlaylistContainer = () => {
  const { playlist } = useFetchApi();

  return (
    <>

      <h1>Playlist</h1>

      <Swiper effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        pagination={false}
         spaceBetween={30}
         className="mySwiper">
        {playlist.map((playlist) => (
          <div key={playlist.id} >
            <Link to={`/PlaylistInformation/${playlist.id}`}>
              <SwiperSlide >

                <img src={playlist.thumbnail} alt={playlist.name} />
                <DescriptionDiv>
                <h2 className="title-description">{playlist.name}</h2>
                </DescriptionDiv>
              </SwiperSlide>
            </Link>
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

const DescriptionDiv = styled.div`
background-color:#D8D6D766;
position: absolute;
height: 50%;
width: 100%;
margin-top: 60%;
border-radius: 5px 5px 25px 25px;
`