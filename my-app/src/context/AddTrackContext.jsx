import { useState, useContext, createContext } from "react";

export const AddTracksContext = createContext();

export function AddTracksContextProvider({ children }) {
  const [tracks, setTracks] = useState([]);

  return (
    <AddTracksContext.Provider value={{ tracks, setTracks }}>
      {children}
    </AddTracksContext.Provider>
  );
}

export function useAddTracksContext() {
  return useContext(AddTracksContext);
}
