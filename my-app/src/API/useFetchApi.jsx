import { useState, useEffect } from "react";

const useFetchApi = () => {
  const urlUsers = "http://localhost:8000/user";

  const urlPlaylist = "http://localhost:8000/playlists";
  const urlTracks = "http://localhost:8000/tracks";
  const urlAlbums = "http://localhost:8000/albums";
  const urlArtists = "http://localhost:8000/artists";
  const urlGenres = "http://localhost:8000/genres";

  const [users, setUsers] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [genres, setGenres] = useState([]);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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
  }, [urlUsers]);

  useEffect(() => {
    setError(false);
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(urlPlaylist);
        const playLists = await response.json();
        setPlaylist(playLists);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [urlPlaylist]);

  //tracks

  useEffect(() => {
    setError(false);
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(urlTracks);
        const tracks = await response.json();
        setTracks(tracks);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [urlTracks]);

  //albumbs

  useEffect(() => {
    setError(false);
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(urlAlbums);
        const albums = await response.json();
        setAlbums(albums);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [urlAlbums]);

  //artist

  useEffect(() => {
    setError(false);
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(urlArtists);
        const artists = await response.json();
        setArtists(artists);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [urlArtists]);

  //genres

  useEffect(() => {
    setError(false);
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(urlGenres);
        const genres = await response.json();
        setGenres(genres);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [urlGenres]);

  function getAllUsers() {
    return users;
  }

  function getUser(username) {
    return users.find((user) => user.username === username);
  }

  function addNewUser(user) {
    fetch(urlUsers, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  }

  return {
    error,
    loading,
    users,
    playlist,
    tracks,
    albums,
    genres,
    artists,
    setUsers,
    getAllUsers,
    getUser,
    addNewUser,
  };
};

export default useFetchApi;