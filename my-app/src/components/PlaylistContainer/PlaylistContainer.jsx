import Slider from "react-slick";
import "./PlaylistContainer.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";
import useFetchApi from "../../API/useFetchApi";
import { useCart } from "react-use-cart";

const PlaylistContainer = () => {
  const {AddToSong} = useCart(); 



  const settings = {
    centerMode: false,
    infinite: true,
    centerPadding: "30px",
    speed: 500,
    /*  slidesToShow: 7,
    slidesToScroll: 4, */
    initialSlide: 0,
    responsive: [
      {
        //px in the screen
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const { playlist } = useFetchApi();


  return (
    <>
      <h1>Playlist</h1>
      <Slider className="status__slider" {...settings}>
        {playlist.map((playlist) => (
          <div key={playlist.id} className="status">
            <Link to={`/TracksPage/${playlist.id}`}>
              <div className="status__avatar">
                <img src={playlist.thumbnail} alt={playlist.name} />
              </div>
            </Link>
           
            <div>
              <h2 className="playlist_name">{playlist.name}</h2>
              <p>{playlist.isFollowed}</p>
              <p>{playlist.publicAccessible}</p>
              {/*    <p>{playlist.primaryColor}</p> */}
            </div>
            <button className="button_add" onClick={() => AddToSong(playlist.songs)}>Add to cart</button>
          </div>
        ))}
      </Slider>
    </>
  );
};
export default PlaylistContainer;
