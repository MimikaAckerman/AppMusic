import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useFetchApi from "../../API/useFetchApi";
import "./AlbumContainer.css";
const AlbumContainer = () => {
  const settings = {
    centerMode: false,
    infinite: true,
    centerPadding: "30px",
    speed: 500,

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

  const { albums } = useFetchApi();

  return (
    <>
      <h1>Albums</h1>
      <Slider className="status__slider" {...settings}>
        {albums[0]?.map((album) => (
          <div key={album.id} className="status">
            <div className="status__avatar">
              <img src={album.imageUrl} alt="" />
            </div>
            <div>
              <h2 className="album_name">{album.name}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};
export default AlbumContainer;
