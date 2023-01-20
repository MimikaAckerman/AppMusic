import React,{ useState } from "react";

export const ImageContext = React.createContext()
function ImageContextProvider ({children}){
    const [image,setImage] = useState('')
    return(
        <ImageContext.Provider value={{image,setImage}}>
            {children}
        </ImageContext.Provider>
    )
}
export default ImageContextProvider