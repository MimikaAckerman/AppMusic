import useFetchApi from "../../API/useFetchApi";
import "./AlbumContainer.css";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination } from "swiper";


const AlbumContainer = () => {
  const { albums } = useFetchApi();

  return (
    <>
      <h1>Albums</h1>
 <Swiper effect={"coverflow"}
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
        className="mySwiper">


      {albums[0]?.map((album) => (
        <div key={album.id} className="status">
       <SwiperSlide>
            <img src={album.imageUrl} alt=""/>
         </SwiperSlide>
          <div>
            <h2 className="album_name">{album.name}</h2>
          </div>
        </div>
      ))}
       </Swiper>
    </>
   
  );
};
export default AlbumContainer;
