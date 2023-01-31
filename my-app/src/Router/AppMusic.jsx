import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; /* import Footer from '../components/Footer/Footer' */

import Homepage from "../pages/Homepage/Homepage";

import LikeSongs from "../pages/LikePageSongs/LikePageSongs";
import AccountPage from "../pages/AccountPage/AccountPage";
import GenresPage from "../pages/GenresPage/GenresPage";
import TracksPage from "../pages/TracksPage/TracksPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import { LoginContextProvider } from "../context/LoginContext";
import ImageContextProvider from "../context/ImageContext";
import { AddPlaylistContextProvider } from "../context/AddPlaylistContext";
import PlaylistInformation from "../pages/PlaylistInformation/PlaylistInformation";
import { AddTracksContextProvider } from "../context/AddTrackContext";

const AppMusic = () => {
  return (
    <>
      <AddPlaylistContextProvider>
        <AddTracksContextProvider>
          <ImageContextProvider>
            <LoginContextProvider>
              <Router>
                <Routes>
                  <Route path="/" element={<LoginPage />} />
                  <Route path="/HomePage" element={<Homepage />} />
                  <Route
                    path="/PlaylistInformation"
                    element={<PlaylistInformation />}
                  />
                  <Route path="/LikeSongs" element={<LikeSongs />} />
                  <Route path="/AccountPage" element={<AccountPage />} />
                  <Route path="/GenresPage" element={<GenresPage />} />
                  <Route path="/TracksPage" element={<TracksPage />} />
                  {/* /:id */}
                </Routes>
              </Router>
            </LoginContextProvider>
          </ImageContextProvider>
        </AddTracksContextProvider>
      </AddPlaylistContextProvider>
    </>
  );
};

export default AppMusic;
