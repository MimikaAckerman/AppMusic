import React from "react";
import AlbumContainer from "../../components/AlbumsContainer/AlbumsContainer";
import ArtistsContainer from "../../components/ArtistContainer/ArtistsContainer";

import PlaylistContainer from "../../components/PlaylistContainer/PlaylistContainer";
import Footer from "../../components/Footer/Footer";
import { LogoutButton } from "../../components/Form/Logout/Logout";
import { Profile } from "../../components/Form/Profile/Profile";

//STYLED COMPONENT
import styled, { createGlobalStyle } from "styled-components";

const Homepage = () => {
  return (
    <>
      <GlobalStyle />
      <LogoutButton />

      <Profile />

      <PlaylistContainer />
      <AlbumContainer />
      <ArtistsContainer />
      {/* <GenresContainer /> */}
      {/*  <TracksContainer/>  */}

      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
};

export default Homepage;

const GlobalStyle = createGlobalStyle`
body{
  color: ${(props) => (props.blackColor ? "black" : "black")};
   background-color: #F0EFEB;
   color: #2f3132;
    font-size: 18px ;
    font-weight: 1000 ;
    font-family: 'Rokkitt', serif;
  
}
`;

const FooterContainer = styled.div``;
