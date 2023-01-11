
import useFetchApi from "../../API/useFetchApi";

import "./ArtistContainer.css";
const ArtistsContainer = () => {
  
  const { artists } = useFetchApi();

  return (
    <>
      <h1>Artist</h1>
    
        {artists[0]?.map((artist) => (
          <div key={artist.id} className="status">
            <div className="">
              <img
                className="status__avatar-artist"
                src={artist.photoUrl}
                alt=""
              />
            </div>
            <h2 className="artist_name">{artist.name}</h2>
          </div>
        ))}
    
    </>
  );
};

export default ArtistsContainer;
