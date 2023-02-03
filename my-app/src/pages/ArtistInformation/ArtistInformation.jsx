import React from "react";
import useFetchApi from "../../API/useFetchApi";
import { useParams } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import { DesingBackground } from "./DesingBackground";
import '../../assets/animation/animations.css'
const ArtistInformation = () => {
  let { name } = useParams();
  const { artists } = useFetchApi();
  console.log(artists); 

  //realizamos un filter que nos permita sacar la informacion de cada uno de los albumes que queremos visualizar
  const artistsDetails = artists.filter((art) => art.name === name);

  return (
    <>
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
      <ContainerArtistInformation>
      <BottonBack2>
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
        </BottonBack2>
        {/*boton de regreso a la homePage*/}
      
        {artistsDetails.map((art, _id) => (
          <div key={art._id}>
            
            <div className="flip">
    <div className="content">
        <div className="front">
        <ImgArtist
                src={art.photoUrl}
                alt={art.name}
              />
        </div>
        <div className="back">
          <h2>Popularity</h2>
          <p>{art.popularity}</p>
        </div>
    </div>
</div>
<NameArtist>{art.name}</NameArtist>

          </div>
        ))}
      </ContainerArtistInformation>

      {/*contenedor con el diseño de fondo*/}
      <DesingBackground />
<IconAdd>
                <TextIconAdd>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 0 0-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 0 0-80.4 119.5A373.6 373.6 0 0 0 137 888.8a8 8 0 0 0 8 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 0 0 8.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 0 1 340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 0 1 683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path></svg>
                </TextIconAdd>
            </IconAdd>



      {/*icono de añadir la playlist */}
    </>
  );
};

export default ArtistInformation;

const IconAdd = styled.button`
position: absolute;
z-index: 1;
margin-top: -12rem;
margin-left: 42%;
width: 100px;
  height: 100px;
  background: repeating-radial-gradient(circle at 50% 50%, rgba(200,200,200,.2) 0%, rgba(200,200,200,.2) 2%, transparent 2%, transparent 3%, rgba(200,200,200,.2) 3%, transparent 3%), conic-gradient(white 0%, silver 10%, white 35%, silver 45%, white 60%, silver 70%, white 80%, silver 95%, white 100%);
  border-radius: 50%;
  box-shadow: 0 0px 20px #0005, 0 -0px 20px #fff2;
  outline: 1px solid #fff;
  outline-offset: -2px;
  transition: 1s;

  &:hover{
    transform: rotate(90deg);
  }
  @media (max-width:840px) {
    margin-top: -7.5rem;
    margin-left: 40%;
  }
`
const TextIconAdd = styled.span`
font-size: 20px;
  font-weight: 700;
  color: #aaa;
  text-align: center;
  text-shadow: 1px 1px 1px #fff;

`


const NameArtist = styled.h1`
  text-align: center;
  margin-top: rem;
  margin-left: 3rem;
  font-size: 3rem;
  color: white;
@media (max-width:840px) {
   margin-left: 1.5rem;
  }
`

const ContainerArtistInformation = styled.div`
  margin-left: 30%;
  position: absolute;
  z-index: 1;
  
  @media (max-width:840px){
    margin-left: 10px;
  }
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
  @media (max-width:840px){
    display: none;
  }
`;

const BottonBack2 = styled.button`
  display: none;
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
  @media (max-width:840px){
    display: block;
    margin-top: 0%;
    margin-bottom: -100px;
  }

`

const ImgArtist = styled.img`
   width: 250px;
   height: 250px;
   z-index: 1;
   margin-Left:10px;

   @media(max-width:840px) {
      margin-bottom: 30px;
      margin-left: none
   }
`