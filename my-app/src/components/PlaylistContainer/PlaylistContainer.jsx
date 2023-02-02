import { Link } from "react-router-dom";
import useFetchApi from "../../API/useFetchApi";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination } from "swiper";

import styled from "styled-components";

const PlaylistContainer = () => {
  const { playlist } = useFetchApi();
  console.log(playlist);

  return (
    <>
      <h1>Playlist</h1>

      {/*carousel de imagenes de playlist */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={false}
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
        {playlist.map((playlist) => (
          <PlaylistComponent key={playlist}>
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
          </PlaylistComponent>
        ))}
      </Swiper>
    </>
  );
};
export default PlaylistContainer;

//STYLED COMPONENT
const PlaylistComponent = styled.div``;

const Description = styled.div`
  /* background-color:#D8D6D7; */
  opacity: 0.6;
  position: absolute;
  height: 5rem;
  width: 14rem;
  margin-top: 11rem;
  border-radius: 5px 5px 25px 25px;
`;
const NamePlaylist = styled.h1`
  font-size: 1rem;
  margin-top: 1.5rem;
  color: black;
`;
