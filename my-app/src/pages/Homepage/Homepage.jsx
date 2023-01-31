import React from "react";
import AlbumContainer from "../../components/AlbumsContainer/AlbumsContainer";
import ArtistsContainer from "../../components/ArtistContainer/ArtistsContainer";

import PlaylistContainer from "../../components/PlaylistContainer/PlaylistContainer";
import Footer from "../../components/Footer/Footer";
import { LogoutButton } from "../../components/Form/Logout/Logout";
import { Profile } from "../../components/Form/InfoProfileUser/Profile";

//STYLED COMPONENT
import styled, { createGlobalStyle } from "styled-components";

//AUTH0
import { useAuth0 } from "@auth0/auth0-react";
import { NavBarMenu } from "../../components/NavBarMenu/NavBarMenu";



const Homepage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <GlobalStyle />
        <NavBarMenu/>
      <NameUser>
        <h1>Hi! {user.nickname}🎧</h1>
        </NameUser>
        <FooterContainer>
        <Footer />
      </FooterContainer>

        <ArtistsContainer />

      <PlaylistContainer />
      <AlbumContainer />
      {/* <GenresContainer /> */}
      {/*  <TracksContainer/>  */}
      <LogoutButton />
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
`

const FooterContainer = styled.div`
  display: inline;

`;

const NameUser = styled.div`
  text-align: right;
`