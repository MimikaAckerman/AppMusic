import React from "react";
import AlbumContainer from "../../components/AlbumsContainer/AlbumsContainer";
import ArtistsContainer from "../../components/ArtistContainer/ArtistsContainer";

import PlaylistContainer from "../../components/PlaylistContainer/PlaylistContainer";
import Footer from "../../components/Footer/Footer";
import { LogoutButton } from "../../components/Form/Logout/Logout";

//STYLED COMPONENT
import styled, { createGlobalStyle } from "styled-components";

//AUTH0
import { useAuth0 } from "@auth0/auth0-react";



const Homepage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <GlobalStyle />
      <LogoutButton />

      <NameUser>
        <h1>Hi! {user.nickname}🎧</h1>
        </NameUser>
     

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

const FooterContainer = styled.div`
  margin-top: 2rem;
`;

const NameUser = styled.div`
margin-top: -4rem;
margin-left: 11rem;

`