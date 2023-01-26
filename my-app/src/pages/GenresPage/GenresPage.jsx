import React from 'react'
import GenresContainer from '../../components/GenresContainer/GenresContainer';
import SearchBar from '../../components/SearchBar/SearchBar';
import TracksContainer from '../../components/TracksContainer/TracksContainer';


const GenresPage = () => {
  return (
    <>
    <SearchBar/>
    <GenresContainer/>
    </>
  )
}

export default GenresPage