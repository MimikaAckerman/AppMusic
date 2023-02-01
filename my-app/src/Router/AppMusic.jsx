import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; /* import Footer from '../components/Footer/Footer' */

import Homepage from "../pages/Homepage/Homepage";
import SearchPage from "../pages/SearchPage/SearchPage";
import LikePageSongs from "../pages/LikePageSongs/LikePageSongs";
import AccountPage from "../pages/AccountPage/AccountPage";
import GenresPage from "../pages/GenresPage/GenresPage";
import TracksPage from "../pages/TracksPage/TracksPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import { LoginContextProvider } from "../context/LoginContext";
import ImageContextProvider from "../context/ImageContext";




const AppMusic = () => {

  return (
    <>
    <ImageContextProvider>
  <LoginContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/HomePage" element={<Homepage />} />
          <Route path="/SearchPage" element={<SearchPage />} />
          <Route path="/LikeSongs" element={<LikePageSongs />} />
          <Route path="/AccountPage" element={<AccountPage />} />
          <Route path="/GenresPage" element={<GenresPage />} />
          <Route path="/TracksPage/:id" element={<TracksPage />} />
        </Routes>
      </Router>
      </LoginContextProvider>
      </ImageContextProvider>
    </>
  );
};

export default AppMusic;