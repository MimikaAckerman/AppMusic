import { Link } from "react-router-dom";
import useFetchApi from "../../API/useFetchApi";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const PlaylistContainer = () => {
  const { playlist } = useFetchApi();

  return (
    <>
      <h1>Playlist</h1>

      <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper">
        {playlist.map((playlist) => (
          <div key={playlist.id} className="status">
            <Link to={`/TracksPage/${playlist.id}`}>
              <SwiperSlide>
                <img src={playlist.thumbnail} alt={playlist.name} />
              </SwiperSlide>
            </Link>

            <div>
              <h2 className="playlist_name">{playlist.name}</h2>
              <p>{playlist.isFollowed}</p>
              <p>{playlist.publicAccessible}</p>
              {/*    <p>{playlist.primaryColor}</p> */}
            </div>
            <button className="button_add">Add to cart</button>
          </div>
        ))}
      </Swiper>
    </>
  );
};
export default PlaylistContainer;
