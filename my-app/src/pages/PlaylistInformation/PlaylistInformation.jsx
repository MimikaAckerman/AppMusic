import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import useFetchApi from "../../API/useFetchApi";
import { Link } from "react-router-dom";
import "./../../assets/animation/animations.css";

const PlaylistInformation = () => {
  let { name } = useParams();
  /*   console.log(name);
   */
  /* const playlistDetails = playlist.filter(name => playlist.name); */
  const { playlist } = useFetchApi();
  /*    console.log(playlist);
  //realizamos un filtro que nos permita sacar el nombre de la playlist seleecionada
   */ const playlistDetails = playlist.filter((pl) => pl.name === name);

  /* console.log(playlistDetails); */
  /*   const { description, thumbnail ,primaryColor,tracks} = playlistDetails; */

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



        {/*informacion de la playlist seleccionada*/}
        <ContainerPlaylistDetails>
          {playlistDetails.map((pl,_id) => (
            <div key={pl._id}>
              <ContainerImg>
                <img
                  src={pl.thumbnail}
                  alt=""
                  style={{ width: 200, height: 200, borderRadius: 200 }}
                  className="animationImg"
                />
              </ContainerImg>
              <NamePlaylist>{pl.name}</NamePlaylist>

              <HDesciption>Description</HDesciption>
              <Description>{pl.description}</Description>

              <YourTracks>Tracks</YourTracks>

              {/*icono de añadir la playlist */}
              <IconAdd>
                <TextIconAdd>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></svg>
                </TextIconAdd>
            </IconAdd>

            </div>
          ))}
        </ContainerPlaylistDetails>
      </Globalcontainer>
    </>
  );
};

export default PlaylistInformation;

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

const ContainerPlaylistDetails = styled.div`
  margin-top: 2rem;
`;
const ContainerImg = styled.div`
  /*   background-color: green;
 */
  height: 8rem;
  margin-left: 7rem;
`;

const NamePlaylist = styled.h1`
  margin-top: 6rem;
  text-align: center;
  font-size: 1.3rem;
  color: white;
`;

const HDesciption = styled.h1`
margin-top: 5rem;
font-size: 3;


`
const Description = styled.h1`
  color: black;
  font-size: 1.5rem;
  width: 10rem;
  margin-top: 3rem;
  margin-left: 1rem;
`;

const YourTracks = styled.h1`
margin-left: 16rem;
`
const IconAdd = styled.button`
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

`
const TextIconAdd = styled.span`
font-size: 20px;
  font-weight: 700;
  color: #aaa;
  text-align: center;
  text-shadow: 1px 1px 1px #fff;

`