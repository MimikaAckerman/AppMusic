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
 /*  console.log(artists); */

 
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
        {artists?.map((artist,_id) => (
          <ArtistComponent artist={artist} key={artist._id}>
            <SwiperSlide>
              <ContainerArtist>
                <img src={artist.photoUrl} alt={artist.name} />
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm5.793 8.914l3.535-3.535 1.415 1.414-4.95 4.95-3.536-3.536 1.415-1.414 2.12 2.121z"></path>
                  </g>
                </svg>
              </ContainerArtist>
            </SwiperSlide>
          </ArtistComponent>
        ))}
      </Swiper>
    </>
  );
  
};


export default ArtistsContainer;


const ArtistComponent = styled.div`
`

const ContainerArtist = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 150px;
`;
