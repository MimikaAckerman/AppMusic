import React from 'react'
import useFetchApi from '../../API/useFetchApi'

const MySongs = () => {
    const {tracks} = useFetchApi()
  return (
    <>
    {tracks?.map((tracks) =>(
        <h1>{tracks.name}</h1>
       
    ))}
    
    
    
    </>
  )
}

export default MySongs