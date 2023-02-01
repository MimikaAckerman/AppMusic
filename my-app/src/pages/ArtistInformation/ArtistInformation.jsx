import React from 'react'
import useFetchApi from '../../API/useFetchApi';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { Link } from "react-router-dom";


const ArtistInformation = () => {
  let { name } = useParams();
  const {artists} = useFetchApi();
  /* console.log(artists); */

  //realizamos un filter que nos permita sacar la informacion de cada uno de los albumes que queremos visualizar
  const artistsDetails = artists.filter((art) => art.name === name);

  return (
    <>
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
    
    {artistsDetails.map((art,_id) =>(
      <div key={art._id}>
        <FondoImg>
        <ImgContainer>
        <img 
        src={art.photoUrl} 
        alt={art.name} 
        style={{ width: 200, height: 200}}
        />
        </ImgContainer>
        </FondoImg>
        <h1>{art.name}</h1>
        <h2>{art.popularity}</h2>
      </div>
    ))}

        






    
    </>
  )
}

export default ArtistInformation

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

const ImgContainer = styled.div`
margin-top: 2rem;
margin-left: 2rem;


--color: #181818;
 background: var(--color);
 color: var(--color);
 display: flex;
 justify-content: center;
 align-items: center;
 width: 14rem;
 height: 15rem;
 overflow: visible;
 border-radius: .7rem;

 &:hover{
  color: #f7ba2b;
 transition: color 1s;
 }

`
const FondoImg = styled.div`
--background: linear-gradient(to left, #f7ba2b 0%, #ea5358 100%);
margin-top: 7rem;
margin-left: 3rem;
width: 18rem;
 height: 20rem;
 padding: 5px;
 border-radius: 1rem;
 overflow: visible;
 background: #f7ba2b;
 background: var(--background);
 position: relative;
 z-index: 1;

 &:after{
  position: absolute;
 content: "";
 top: 30px;
 left: 0;
 right: 0;
 z-index: -1;
 height: 100%;
 width: 100%;
 transform: scale(0.8);
 filter: blur(25px);
 background: #f7ba2b;
 background: var(--background);
 transition: opacity .5s;

 &:hover::after{
  opacity: 0;

 }
 }
`