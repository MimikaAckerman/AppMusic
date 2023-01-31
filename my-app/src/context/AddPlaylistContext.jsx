import { useState, useContext, createContext } from "react";

export const AddPlaylistContext = createContext();

export function AddPlaylistContextProvider({ children }) {
  const [playlist, setPlaylist] = useState([]);

  return (
    <AddPlaylistContext.Provider value={{ playlist, setPlaylist }}>
      {children}
    </AddPlaylistContext.Provider>
  );
}

export function useAddPlaylistContext() {
  return useContext(AddPlaylistContext);
}
