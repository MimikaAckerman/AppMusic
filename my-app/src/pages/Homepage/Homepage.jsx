import React from "react";
import AlbumContainer from "../../components/AlbumsContainer/AlbumsContainer";
import ArtistsContainer from "../../components/ArtistContainer/ArtistsContainer";

import PlaylistContainer from "../../components/PlaylistContainer/PlaylistContainer";
import Footer from "../../components/Footer/Footer";

/* import { Profile } from "../../components/Form/InfoProfileUser/Profile"; */

//STYLED COMPONENT
import styled, { createGlobalStyle } from "styled-components";
import WebContainer from "../../components/WebContainer/WebContainer";
//AUTH0
import { useAuth0 } from "@auth0/auth0-react";
import { NavBarMenu } from "../../components/NavBarMenu/NavBarMenu";
import { NavBarTop } from "../../components/NavBarMenu/NavBarTop";
import { Loading } from "../../components/Loading/Loading";
import { LogoutButton } from "../../components/Form/Logout/Logout";
const Homepage = () => {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return (
      <LoadingStyle>
        <Loading />
      </LoadingStyle>
    );
  }

  return (
    <>
      <GlobalStyle />
      {/* <DivGrid2> */}
      <NavBarMenu />
      {/* </DivGrid2>

        <DivGrid1> */}
      <NavBarTop />
      {/* </DivGrid1>
        <DivGrid3> */}
      <GridHomepage>
        <WebContainer />
        <ArtistsContainer />
        <PlaylistContainer />
        <AlbumContainer />
        <Footer />
        {/* </DivGrid3> */}
      </GridHomepage>
    </>
  );
};

// mas responsive por tamaño


export default Homepage;

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
const GridHomepage = styled.div`
    width: 70%;
    font-size: 30px;
    margin-left: 30%;
    text-align: center;
    @media (max-width:840px) {
      width: 100%;
      margin-left: 0%;
      font-size: auto;
    }
    `

const LoadingStyle = styled.div`
 display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 200px;
;
`