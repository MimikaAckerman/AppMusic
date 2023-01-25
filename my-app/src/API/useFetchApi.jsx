import { useState, useEffect } from "react";

const useFetchApi = () => {

  
/*   const urlUsers = "http://localhost:8000/user";
 */ 
  
  const urlPlaylist = "http://localhost:4000/playlists/";
  const urlTracks = "http://localhost:4000/tracks";
  const urlAlbums = "http://localhost:4000/album/";
  const urlArtists = "http://127.0.0.1:4000/artists/";
  const urlGenres = "http://localhost:4000/genres";

/*   const [users, setUsers] = useState([]);
 */  
  const [playlist, setPlaylist] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [genres, setGenres] = useState([]);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);



 /*  useEffect(() => {
    setError(false);
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(urlUsers);
        const user = await response.json();
        setUsers(user);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [urlUsers]); */


  //PLAYLIST fetch -------------------------
  useEffect(() => {
    setError(false);
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(urlPlaylist);
        const playLists = await response.json();
        setPlaylist(playLists.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [urlPlaylist]);

  //TRACKS fetch --------------------------------

 /*  useEffect(() => {
    setError(false);
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(urlTracks);
        const tracks = await response.json();
        setTracks(tracks.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [urlTracks]);  */

  //ALBUMS fetch-----------------------------------

  useEffect(() => {
    setError(false);
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(urlAlbums);
        const albums = await response.json();
       setAlbums(albums.data);
 
/* console.log(albums)*/ 
} catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [urlAlbums]);

  //ARTIST fetch -------------------------------

  useEffect(() => {
    setError(false);
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(urlArtists);
        const artists = await response.json();
        setArtists(artists.data);
/*         console.log(artists)
 */      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [urlArtists]); 

  //GENRES fetch ----------------------------------------

 useEffect(() => {
    setError(false);
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(urlGenres);
        const genres = await response.json();
        setGenres(genres.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [urlGenres]);
  

/*   function getAllUsers() {
    return users;
  }

  function getUser(username) {
    return users.find((user) => user.username === username);
  }
 */
// FUNCTION CREATE PLAYLIST ---------


 
  return {
    error,
    loading,
  /*   users, */
    playlist,
    tracks,
    albums,
    genres,
    artists,

/*     addNewPlaylist */
  /*   setUsers,
    getAllUsers,
    getUser,
    addNewUser, */
  };
};

export default useFetchApi;


