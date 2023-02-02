import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchApi from "../../API/useFetchApi";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import "../../assets/animation/animations.css";
import { IoIosAddCircleOutline, IoIosAddCircle } from "react-icons/io";
import { getItem, setItem } from "../../services/LocalStorageFuncs";

const AlbumsInformation = () => {
  let { name } = useParams();
  /*   console.log(name); */

  const [like, setLike] = useState(getItem("likeSongs") || []);

  const { albums } = useFetchApi();
  /* console.log(albums); */

  //realizamos un filter que nos permita sacar la informacion de cada uno de los albumes que queremos visualizar
  const albumsDetails = albums.filter((al) => al.name === name);

  /*  console.log(albumsDetails); */

  const handleClick = (obj) => {
    const element = like.find((al) => al.id === obj.id);
    if (element) {
      const arrFilter = like.filter((al) => al.id !== obj.id);
      setLike(arrFilter);
      setItem("likeSongs", arrFilter);
    } else {
      setLike([...like, obj]);
      setItem("likeSongs", [...like, obj]);
    }
  };

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

        {/*map para sacar la informacion del album seleccionado*/}

        <ContainerAlbumtDetails>
          {albumsDetails.map((al) => (
            <div key={al}>
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
              <IconAdd>
                <button onClick={() => handleClick(al)}>
                  {like.some((itemLike) => itemLike.id === al.id) ? (
                    <IoIosAddCircleOutline />
                  ) : (
                    <IoIosAddCircle />
                  )}
                </button>
              </IconAdd>
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
   background-color: #F1ECE7;
   color: #2f3132;
    font-size: 18px ;
    font-weight: 1000 ;
    font-family: 'Rokkitt', serif;
  
}
`;
const Globalcontainer = styled.div`
  background-color: #114358;
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
  margin-top: -2rem;
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
`;
const AlbumArtist = styled.h1`
  color: black;
  margin-top: 18rem;
`;
const AlbumName = styled.h1`
  margin-top: -16rem;
  margin-left: 5rem;
  font-size: 1.5rem;
  color: white;
`;
const IconAdd = styled.button`
  margin-top: 22rem;
  margin-left: 17rem;
  width: 100px;
  height: 100px;
  background: repeating-radial-gradient(
      circle at 50% 50%,
      rgba(200, 200, 200, 0.2) 0%,
      rgba(200, 200, 200, 0.2) 2%,
      transparent 2%,
      transparent 3%,
      rgba(200, 200, 200, 0.2) 3%,
      transparent 3%
    ),
    conic-gradient(
      white 0%,
      silver 10%,
      white 35%,
      silver 45%,
      white 60%,
      silver 70%,
      white 80%,
      silver 95%,
      white 100%
    );
  border-radius: 50%;
  box-shadow: 0 0px 20px #0005, 0 -0px 20px #fff2;
  outline: 1px solid #fff;
  outline-offset: -2px;
  transition: 1s;

  &:hover {
    transform: rotate(90deg);
  }
`;
const TextIconAdd = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #aaa;
  text-align: center;
  text-shadow: 1px 1px 1px #fff;
`;
