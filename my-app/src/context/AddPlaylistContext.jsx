import { useCallback } from "react";
import { useMemo, useState, useContext, createContext } from "react";

const MY_NEW_PLAYLIST = "new";
export const AddPlaylistContext = createContext();

export function AddPlaylistContextProvider({ children }) {
  const [isNewPlaylist, setIsNewPlaylist] = useState(
    localStorage.getItem(MY_NEW_PLAYLIST)
  );

  const [playlist, setPlaylist] = useState("");

  const addNewPlaylist = useCallback(() => {
    localStorage.setItem(MY_NEW_PLAYLIST, "true");
    setIsNewPlaylist(true);
  }, []);

  const value = useMemo(
    () => ({
      isNewPlaylist,
      addNewPlaylist,
      playlist,
      setPlaylist,
    }),
    [isNewPlaylist, addNewPlaylist, playlist, setPlaylist]
  );

  return (
    <AddPlaylistContext.Provider value={value}>
      {children}
    </AddPlaylistContext.Provider>
  );
}

export function useAddPlaylistContext() {
  return useContext(AddPlaylistContext);
}
