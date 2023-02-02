import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import useFetchApi from "../../API/useFetchApi";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import '../../assets/animation/animations.css'
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai'
import { getItem, setItem } from '../../services/LocalStorageFuncs';

const AlbumsInformation = () => {
  let { name } = useParams();
  /*   console.log(name); */
  
  // const [data, setData] = useState([]);
  const [like, setLike ] = useState( getItem('likeSongs') || []); 

  const { albums } = useFetchApi();
  /* console.log(albums); */

  //realizamos un filter que nos permita sacar la informacion de cada uno de los albumes que queremos visualizar
  const albumsDetails = albums.filter((al) => al.name === name);

 /*  console.log(albumsDetails); */

 const handleClick = (obj) => {
  const element = like.find((al) => al.id === obj.id)
  if(element){
    const arrFilter = like.filter((al) => al.id !== obj.id)
    setLike(arrFilter)
    setItem('likeSongs', arrFilter)
  } else {
    setLike([...like, obj])
    setItem('likeSongs', [...like, obj])
  }
 }

  return (
    <>
      <GlobalStyle />
      <Globalcontainer>
        {/*boton de regreso a la homePage*/}
        <BottonBack>
          <Link to="/homePage">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              version="1.2"
              baseProfile="tiny"
              viewBox="0 0 24 24"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 9.059v-2.559c0-.256-.098-.512-.293-.708-.195-.195-.451-.292-.707-.292s-.512.097-.707.292l-6.293 6.208 6.293 6.207c.195.195.451.293.707.293s.512-.098.707-.293.293-.452.293-.707v-2.489c2.75.068 5.755.566 8 3.989v-1c0-4.633-3.5-8.443-8-8.941z"></path>
            </svg>
          </Link>
        </BottonBack>

       {/*diseño de sonido*/}
       <div className="loader">
    <div className="bar bar1"></div>
    <div className="bar bar2"></div>
    <div className="bar bar3"></div>
    <div className="bar bar4"></div>
    <div className="bar bar5"></div>
    <div className="bar bar6"></div>
    <div className="bar bar7"></div>
    <div className="bar bar8"></div>
    <div className="bar bar9"></div>
    <div className="bar bar10"></div>
    <div className="bar bar11"></div>
    <div className="bar bar12"></div>
    <div className="bar bar13"></div>
    <div className="bar bar14"></div>
    <div className="bar bar15"></div>
    <div className="bar bar16"></div>
    <div className="bar bar17"></div>
    <div className="bar bar18"></div>
    <div className="bar bar19"></div>
    <div className="bar bar20"></div>
    <div className="bar bar21"></div>
    <div className="bar bar22"></div>
    <div className="bar bar23"></div>
    <div className="bar bar24"></div>
    <div className="bar bar25"></div>
    <div className="bar bar26"></div>
    <div className="bar bar27"></div>
    <div className="bar bar28"></div>
    <div className="bar bar29"></div>
    <div className="bar bar30"></div>
    <div className="bar bar31"></div>
    <div className="bar bar32"></div>
    <div className="bar bar33"></div>
    <div className="bar bar34"></div>
    <div className="bar bar35"></div>
    <div className="bar bar36"></div>
    <div className="bar bar37"></div>
    <div className="bar bar38"></div>
    <div className="bar bar39"></div>
    <div className="bar bar40"></div>
</div>




        {/*map para sacar la informacion del album seleccionado*/}

        <ContainerAlbumtDetails>
          {albumsDetails.map((al) => (
            <div key={al.id}>
              <ContainerImg>
                <img
                  src={al.imageUrl}
                  alt=""
                  style={{ width: 200, height: 200, borderRadius: 200 }}
                  className="animationImg"
                />
             
              </ContainerImg>
              <Hartist>Artist</Hartist>
              <AlbumArtist>{al.artist}</AlbumArtist>
              <AlbumName>{al.name}</AlbumName>
              <button onClick={() => handleClick(al)}>
                {
                  like.some((itemLike)=> itemLike.id === al.id) ? (
                      <AiTwotoneHeart/>
                  ) : (
                    <AiOutlineHeart/>
                  )
                }
              </button>
              
            </div>
          
          ))}
        </ContainerAlbumtDetails>
      </Globalcontainer>
      
    </>
  );
};

export default AlbumsInformation;

const GlobalStyle = createGlobalStyle`
body{
  color: ${(props) => (props.blackColor ? "black" : "black")};
   background-color: #EBEEF3;
   color: #2f3132;
    font-size: 18px ;
    font-weight: 1000 ;
    font-family: 'Rokkitt', serif;
  
}
`;
const Globalcontainer = styled.div`
  background-color: #989a97;
  height: 25rem;
`;
const BottonBack = styled.button`
  margin-top: 1rem;
  margin-left: 1rem;
  color: #090909;
  padding: 0.2em 1.2em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  &:hover {
    border: 1px solid white;
  }
  &:active {
    box-shadow: 4px 4px 12px #c5c5c5, -4px -4px 12px #ffffff;
  }
`;

const ContainerAlbumtDetails = styled.div`
  margin-top: 1rem;
`;

const ContainerImg = styled.div`
  /*   background-color: green;
 */
  height: 8rem;
  margin-left: 7rem;
`;
const Hartist = styled.h1`
margin-top: 15rem;
position: absolute;
`
const AlbumArtist = styled.h1`
color: black;
margin-top: 18rem;


`
const AlbumName = styled.h1`
margin-top: -16rem;
margin-left: 5rem;
font-size: 1.5rem;
color: white;
`