import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useFetchApi from "../../API/useFetchApi";

import "./ArtistContainer.css";
const ArtistsContainer = () => {
  const settings = {
    centerMode: false,
    infinite: true,
    centerPadding: "30px",

    /* focusOnSelect:true, */
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
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };
  const { artists } = useFetchApi();

  return (
    <>
      <h1>Artist</h1>
      <Slider className="status__slider" {...settings}>
        {artists[0]?.map((artist) => (
          <div key={artist.id} className="status">
            <div className="">
              <img
                className="status__avatar-artist"
                src={artist.photoUrl}
                alt=""
              />
            </div>
            <h2 className="artist_name">{artist.name}</h2>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default ArtistsContainer;
