import React, { useState } from 'react'
import { getItem } from '../../services/LocalStorageFuncs';
import { CiCircleRemove } from 'react-icons/ci'

 const LikePageSongs = () => {
    const [data, setData] = useState( getItem('carrinhoYt') || [])

    const removeItem = (obj) => {
        const arrFilter = data.filter((album) => album.id !== obj.id)
        setData(arrFilter)        
    }
  return (
    <div>
        <h1>Like Songs</h1>
        <div>
            {
                data.map((album) =>(
                    <div key={album.id}>
                        <h4>{album.name}</h4>
                        <img src={album.imageUrl} alt={album.name} />
                        <h4>{album.artist}</h4>
                        <button 
                          onClick={ () => removeItem(album)}
                        >
                        <CiCircleRemove />
                        </button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default LikePageSongs;
