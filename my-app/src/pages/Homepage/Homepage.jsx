import React from "react";
import AlbumContainer from "../../components/AlbumsContainer/AlbumsContainer";
import ArtistsContainer from "../../components/ArtistContainer/ArtistsContainer";
import GenresContainer from "../../components/GenresContainer/GenresContainer";
/* import TracksContainer from "../../components/TracksContainer/TracksContainer"; */
import "./Homepage.css";

import PlaylistContainer from "../../components/PlaylistContainer/PlaylistContainer";
/*  import { useAuthContext } from "../../context/LoginContext";
 */ import Footer from "../../components/Footer/Footer";
import { LogoutButton } from "../../components/Form/Logout/Logout";
import { Profile } from "../../components/Form/profile/Profile";
import styled from "styled-components";

const Homepage = () => {
  /*  const { isAuthenticated } = useAuthContext();
   */ /*   const user = JSON.parse(localStorage.getItem("name"));
   */ return (
    <>
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

const FooterContainer = styled.div``;
