import useFetchApi from "../../API/useFetchApi";
import "./AlbumContainer.css";
import React, { useEffect, useState } from 'react'
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai'


// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination } from "swiper";
import { getItem, setItem } from "../../services/LocalStorageFuncs";


const AlbumContainer = () => {

  const [cart, setCart ] = useState([]);  //CORAZON 

  const { albums } = useFetchApi();
/*   console.log(albums)
 */
const handleClick = (obj) => {
  const element = cart.find((album) => album.id === obj.id)
  if(element){
    const arrFilter = cart.filter((album) => album.id !== obj.id)
    setCart(arrFilter)
    setItem('carrinhoYt', arrFilter)
  } else {
    setCart([...cart, obj])
    setItem('carrinhoYt', [...cart, obj])
  }
 }

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


      {albums?.map((album) => (
        <div key={album.id} className="status">
       <SwiperSlide>
            <img src={album.imageUrl} alt=""/>
            <div>
            <button onClick={() => handleClick(album)}>
                {
                  cart.some((itemCart)=> itemCart.id === album.id) ? (
                      <AiTwotoneHeart/>
                  ) : (
                    <AiOutlineHeart/>
                  )
                }
              </button>
           
            </div>
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
