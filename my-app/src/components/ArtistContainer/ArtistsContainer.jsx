import useFetchApi from "../../API/useFetchApi";
/* import "./ArtistContainer.css";
 */
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination } from "swiper";
import styled from "styled-components";

const ArtistsContainer = () => {
  const { artists } = useFetchApi();

  return (
    <>
      <h1>Artist</h1>

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
        {artists?.map((artist) => (
          <div key={artist.id} className="status">
            <SwiperSlide>
              <ContainerArtist>
                <img src={artist.photoUrl} alt="" />
              </ContainerArtist>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
};

export default ArtistsContainer;

const ContainerArtist = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 150px;
`;
