import { Link } from "react-router-dom";
import useFetchApi from "../../API/useFetchApi";

const PlaylistContainer = () => {
  const { playlist } = useFetchApi();

  return (
    <>
      <h1>Playlist</h1>

      {playlist.map((playlist) => (
        <div key={playlist.id} className="status">
          <Link to={`/TracksPage/${playlist.id}`}>
            <div className="status__avatar">
              <img src={playlist.thumbnail} alt={playlist.name} />
            </div>
          </Link>

          <div>
            <h2 className="playlist_name">{playlist.name}</h2>
            <p>{playlist.isFollowed}</p>
            <p>{playlist.publicAccessible}</p>
            {/*    <p>{playlist.primaryColor}</p> */}
          </div>
          <button className="button_add">Add to cart</button>
        </div>
      ))}
    </>
  );
};
export default PlaylistContainer;
