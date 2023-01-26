import React from "react";
import AlbumContainer from "../../components/AlbumsContainer/AlbumsContainer";
import ArtistsContainer from "../../components/ArtistContainer/ArtistsContainer";
/* import GenresContainer from "../../components/GenresContainer/GenresContainer"; */
/* import TracksContainer from "../../components/TracksContainer/TracksContainer"; */
import "./Homepage.css";
import { Logout } from "../../components/Form/Logout/Logout";
import PlaylistContainer from "../../components/PlaylistContainer/PlaylistContainer";
/*  import { useAuthContext } from "../../context/LoginContext";
 */ import Footer from "../../components/Footer/Footer";
/* import SearchBar from "../../components/SearchBar/SearchBar"; */

const Homepage = () => {
  /*  const { isAuthenticated } = useAuthContext();
   */ /*   const user = JSON.parse(localStorage.getItem("name"));
   */ return (
    <>
      <Logout />
      <PlaylistContainer />
      <AlbumContainer />
      <ArtistsContainer />
      {/* <GenresContainer /> */}
      {/*  <TracksContainer/>  */}

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
