// TODO For Add Album
export const addAlbum = (album) => {
    return{
        type : "ADDALBUM",
        payload : album,
    };
};

// TODO For Delete Album
export const delAlbum = (album) => {
    return{
        type : "DELALBUM",
        payload : album,
    };
};