import useFetchApi from "../../API/useFetchApi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./ArtistContainer.css";

const ArtistsContainer = () => {
  const { artists } = useFetchApi();

  return (
    <>
      <h1>Artist</h1>

      <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper">
        {artists[0]?.map((artist) => (
          <div key={artist.id} className="status">
            <SwiperSlide>
              <img className="" src={artist.photoUrl} alt="" />
            </SwiperSlide>
            <h2 className="artist_name">{artist.name}</h2>
          </div>
        ))}
      </Swiper>
    </>
  );
};

export default ArtistsContainer;
