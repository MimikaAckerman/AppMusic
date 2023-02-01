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
import { Link } from "react-router-dom";

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
               <Link to={`/ArtistInformation/${artist.name}`}>
                <img src={artist.photoUrl} alt={artist.name} />
              </Link>
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
