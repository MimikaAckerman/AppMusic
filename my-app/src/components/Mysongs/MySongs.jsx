import React from 'react'
import useFetchApi from '../../API/useFetchApi'

const MySongs = () => {
    const {tracks} = useFetchApi()
   /*  console.log(tracks); */
  return (
    <>

    {tracks?.map((tracks) =>(
      <div key={tracks._id}>
        <h2>{tracks.name}</h2>
        <button>add</button>
      </div>       
    ))}
    
    
    
    </>
  )
}

export default MySongs