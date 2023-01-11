import React from 'react'
import { useCart } from 'react-use-cart'

const LikeSongs = () => {
    const {
        isEmpty,
        songs,
        removeSongs,
      }= useCart();

      if(isEmpty) return<>your playlist is empty</>

  return (
    <>
    {songs.map((song,index) => (
        <div key={index}>
            <img src={song.thumbnail} alt={song.name} />
            <h1>{song.name}</h1>
            <button onClick={() => removeSongs(song.id)}>Remove Playlist</button>
        </div>
    ))}
    
    </>
  )
}

export default LikeSongs