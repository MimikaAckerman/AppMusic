import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; /* import Footer from '../components/Footer/Footer' */

import Homepage from "../pages/Homepage/Homepage";

import AccountPage from "../pages/AccountPage/AccountPage";
import GenresPage from "../pages/GenresPage/GenresPage";
import TracksPage from "../pages/TracksPage/TracksPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ImageContextProvider from "../context/ImageContext";
import { AddPlaylistContextProvider } from "../context/AddPlaylistContext";
import PlaylistInformation from "../pages/PlaylistInformation/PlaylistInformation";
import MySongsPage from "../pages/MySong/MySongsPage";
import AlbumsInformation from "../pages/AlbumsInformation/AlbumsInformation";

import ArtistInformation from "../pages/ArtistInformation/ArtistInformation";

import SearchPage from "../pages/SearchPage/SearchPage";


const AppMusic = () => {
  return (
    <>
      <AddPlaylistContextProvider>
        <ImageContextProvider>
          <Router>
            <Routes>
              {/*   paginas principales*/}
              <Route path="/" element={<LoginPage />} />
              <Route path="/HomePage" element={<Homepage />} />
              {/*   pagina de informacion de playlist */}
              <Route
                path="/PlaylistInformation/:name"
                element={<PlaylistInformation />}
              />
              <Route path="/trackspage" element={<TracksPage />} />
              {/*   pagina de informacion de albums*/}
              <Route
                path="/AlbumsInformation/:name"
                element={<AlbumsInformation />}
              />

              {/*   pagina de informacion del artista*/}
              <Route
                path="/ArtistInformation/:name"
                element={<ArtistInformation />}
              />
              {/*donde se visualiza todas las canciones*/}

              <Route path="/search" element={<SearchPage />} />"

              <Route path="/MySongsPage" element={<MySongsPage />} />

              {/*donde se visualiza la informacion de la playlist creada*/}

              <Route
                path="/PlaylistInformation/:name"
                element={<AccountPage/>}
              />

              <Route path="/AccountPage" element={<AccountPage />} />
              <Route path="/GenresPage" element={<GenresPage />} />
              {/*el reproductor que reproduce la cancion especifica*/}
              <Route path="/TracksPage/:name" element={<TracksPage />} />
            </Routes>
          </Router>
        </ImageContextProvider>
      </AddPlaylistContextProvider>
    </>
  );
};

export default AppMusic;
