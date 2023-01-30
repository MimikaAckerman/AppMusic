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

const AppMusic = () => {
  return (
    <>
    <AddPlaylistContextProvider>
      <ImageContextProvider>
  
          <Router>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/HomePage" element={<Homepage />} />
              
              <Route path="/PlaylistInformation" element={<PlaylistInformation/>}/>
             <Route path="/MySongsPage" element={<MySongsPage/>}/>
              <Route path="/AccountPage" element={<AccountPage />} />
              <Route path="/GenresPage" element={<GenresPage />} />
              <Route path="/TracksPage/:id" element={<TracksPage />} />
            </Routes>
          </Router>
       
      </ImageContextProvider>
      </AddPlaylistContextProvider>
    </>
  );
};

export default AppMusic;
