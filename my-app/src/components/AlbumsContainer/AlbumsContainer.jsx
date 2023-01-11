

import useFetchApi from "../../API/useFetchApi";
import "./AlbumContainer.css";


const AlbumContainer = () => {
 

  const { albums } = useFetchApi();

  return (
    <>
      <h1>Albums</h1>
     
        {albums[0]?.map((album) => (
          <div key={album.id} className="status">
            <div className="status__avatar">
              <img src={album.imageUrl} alt="" />
            </div>
            <div>
              <h2 className="album_name">{album.name}</h2>
            </div>
          </div>
        ))}
    
    </>
  );
};
export default AlbumContainer;
