import React from "react";
import { useParams } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import useFetchApi from "../../API/useFetchApi";
import { Link } from "react-router-dom";
import "./../../assets/animation/animations.css";

const PlaylistInformation = () => {
  const { tracks } = useFetchApi();
  let { name } = useParams();
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
        {/*informacion de la playlist seleccionada*/}
        <ContainerPlaylistDetails>
          {playlistDetails.map((pl, _id) => (
            <div key={pl._id}>
              <NavbarImg>
                <ContainerImg>
                  <img
                    src={pl.thumbnail}
                    alt=""
                    style={{ width: 300, height: 300, borderRadius: 400 }}
                    className="animationImg"
                  />
                </ContainerImg>
                <NamePlaylist>
                  <Name>{pl.name}</Name>
                  <br />
                  Description
                  <br />
                  {pl.description}
                </NamePlaylist>
                <IconAdd>
                  <TextIconAdd>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="2em"
                      width="2em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
                    </svg>
                  </TextIconAdd>
                </IconAdd>
              </NavbarImg>

              <TracksStyle>
                <YourTracks>Tracks</YourTracks>
                {tracks?.map((track) => (
                  <div key={track._id}>
                    <Link
                      to={`/TracksPage/${track.name}`}
                      style={{ textDecoration: "none", color: "#114358" }}
                    >
                      <h2>{track.name}</h2>
                    </Link>

                    <p>{track.artist}</p>
                  </div>
                ))}
              </TracksStyle>

              {/*icono de añadir la playlist */}
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
   background-color: #F1ECE7;
   color: #2f3132;
    font-size: 18px ;
    font-weight: 1000 ;
    font-family: 'Rokkitt', serif;
  
}
`;
const Name = styled.h1`
  font-size: 40px;
`;
const NavbarImg = styled.div`
  display: flex;
  margin-left: -70px;
  margin-bottom: 100px;
`;
const Globalcontainer = styled.div`
  background-color: #114358;
  height: 25rem;
`;
const TracksStyle = styled.div`
  display: block;
  text-align: right;
  margin: 20px;
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
  margin-left: 8rem;
  margin-bottom: 7rem;
`;

const NamePlaylist = styled.h1`
  margin-left: 50px;
  text-align: flex-end;
  font-size: 1.3rem;
  color: white;
`;

const YourTracks = styled.h1`
  display: block;
  text-align: right;
`;
const IconAdd = styled.button`
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
