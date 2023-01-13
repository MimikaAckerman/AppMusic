import { Link } from "react-router-dom";
import useFetchApi from "../../API/useFetchApi";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './PlaylistContainer.css'


const PlaylistContainer = () => {
  const { playlist } = useFetchApi();

  return (
    <>
      <h1>Playlist</h1>

      <Swiper slidesPerView={1.5} spaceBetween={30} className="mySwiper">
        {playlist.map((playlist) => (
          <div key={playlist.id} >
            <Link to={`/TracksPage/${playlist.id}`}>
              <SwiperSlide>
                <img src={playlist.thumbnail} alt={playlist.name} />
                <div className="description">
                <h2 className="title-description">{playlist.name}</h2>
                </div>
              </SwiperSlide>
            </Link>


          
              <p>{playlist.isFollowed}</p>
              <p>{playlist.publicAccessible}</p>
            
          
          </div>
        ))}
      </Swiper>
    </>
  );
};
export default PlaylistContainer;

