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
import { NavBarTop } from "../../components/NavBarMenu/NavBarTop";

const Homepage = () => {
  const {isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <GlobalStyle />

 
        {/* <DivGrid2> */}
        <NavBarMenu/>
        {/* </DivGrid2>

        <DivGrid1> */}
      <NavBarTop/>
        {/* </DivGrid1>
        <DivGrid3> */}
        <GridHomepage>
      <ArtistsContainer />
      <PlaylistContainer />
      <AlbumContainer />
      <Footer/>
      <LogoutButton />
        {/* </DivGrid3> */}
       </GridHomepage>

    </>
  );
};

export default Homepage;

const GlobalStyle = createGlobalStyle`
body{
  color: ${(props) => (props.blackColor ? "black" : "black")};
   background-color: #E0E4E7;
   color: #2f3132;
    font-size: 18px ;
    font-weight: 1000 ;
    font-family: 'Rokkitt', serif;
  }
`
const GridHomepage = styled.div`
    width: 70%;
    margin-left: 30%;
    text-align: center;
    @media (max-width:762px) {
      width: 100%;
      margin-left: 0%;
    }
    `


// const DivGrid1 = styled.div`
//   grid-area: 1 / 2 / 2 / 6;
// `


// const DivGrid2 = styled.div`
//   grid-area: 1 / 1 / 6 / 2;
// `


// const DivGrid3 = styled.div`
//   grid-area: 2 / 2 / 6 / 6;
// `