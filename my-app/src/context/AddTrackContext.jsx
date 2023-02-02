import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AddTrackContext = createContext();

export function AddTrackContextProvider({children}){
    const [track,setTrack] = useState([])

    return(
        <AddTrackContext.Provider value={{track,setTrack}}>
                {children}
        </AddTrackContext.Provider>
    )
}
export function useAddTrackContext(){
    return useContext(AddTrackContext);
}