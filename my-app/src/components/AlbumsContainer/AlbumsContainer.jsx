import useFetchApi from "../../API/useFetchApi";
import "./AlbumContainer.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const AlbumContainer = () => {
  const { albums } = useFetchApi();

  return (
    <>
      <h1>Albums</h1>
 <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper">
      {albums[0]?.map((album) => (
        <div key={album.id} className="status">
       <SwiperSlide>
            <img src={album.imageUrl} alt="" />
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
