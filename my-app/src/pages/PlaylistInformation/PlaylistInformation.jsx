import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { keyframes } from "styled-components";
import useFetchApi from "../../API/useFetchApi";
import { Link } from "react-router-dom";
import  './animationImg.css';


const PlaylistInformation = () => {
  let { name } = useParams();
  /*   console.log(name);
   */
  /* const playlistDetails = playlist.filter(name => playlist.name); */
  const { playlist } = useFetchApi();
  /*    console.log(playlist);
  //realizamos un filtro que nos permita sacar el nombre de la playlist seleecionada
   */ const playlistDetails = playlist.filter((pl) => pl.name === name);

  console.log(playlistDetails);
  /*   const { description, thumbnail ,primaryColor,tracks} = playlistDetails; */

  return (
    <>
      <Globalcontainer>
        {/*boton de regreso a la homePage*/}
        <BottonBack>
          <Link to="/homePage">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
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

        {/*informacion de la playlist seleccionada*/}

        {/*   <img src={thumbnail} alt={description} />
        <h1>{description}</h1>
        <h2>{name}</h2> */}
        <ContainerPlaylistDetails>
          {playlistDetails.map((pl) => (
            <div key={pl.id}>
              <ContainerImg>
                <img
                  src={pl.thumbnail}
                  alt=""
                  style={{ width: 200, height: 200, borderRadius: 200 }}
                  className="animationImg"
                />
              </ContainerImg>
              <ContainerInformation>
                <h1>{pl.description}</h1>
                <h1>{pl.name}</h1>
              </ContainerInformation>
            </div>
          ))}
        </ContainerPlaylistDetails>
      </Globalcontainer>
    </>
  );
};

export default PlaylistInformation;

const Globalcontainer = styled.div`
  background-color: red;
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

const ContainerPlaylistDetails = styled.div`
  margin-top: 5rem;
`;
const ContainerImg = styled.div`
/*   background-color: green;
 */  height: 8rem;
  margin-left: 6rem;

  
  
`;

const ContainerInformation = styled.div`
  margin-top: 10rem;
`;
