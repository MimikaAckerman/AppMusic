import useFetchApi from "../../API/useFetchApi";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination } from "swiper";

import { Link } from "react-router-dom";
import styled from "styled-components";

const AlbumContainer = () => {
  const { albums } = useFetchApi();
   /* console.log(albums);  */
  return (
    <>
    <h1>Albums</h1>
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
      {albums?.map((album, _id) => (
        <AlbumComponent album={album} key={album._id}>
          <SwiperSlide>
            <Link to={`/AlbumsInformation/${album.name}`}>
              <img src={album.imageUrl} alt={album.name} />
            </Link>
          </SwiperSlide>
        </AlbumComponent>
      ))}
    </Swiper>
  </>
  );
};
export default AlbumContainer;



const AlbumComponent = styled.div``;

const Description = styled.div`
  background-color: red;
  opacity: 0.6;
  position: absolute;
  height: 6rem;
  width: 14rem;
  margin-top: 11rem;
  border-radius: 5px 5px 25px 25px;
`;

const NameAlbum = styled.h1`
  font-size: 5rem;
  margin-top: 1.5rem;
  color: black;
`;
