const view = [];

const handleAlbum = (state = view, action) => {
  const album = action.payload;
  switch (action.type) {
    case "ADDALBUM":
      // Check if album already exists
      const exist = state.find((x) => x.id === album.id);
      if (exist) {
        // Increase the quantity
        return state.map((x) =>
          x.id === album.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const album = action.payload;
        return [
          ...state,
          {
            ...album,
            qty: 1,
          },
        ];
      }
      break;

    case "DELALBUM":
      const exist1 = state.find((x) => x.id === album.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === album.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;

    default:
      return state;
      break;
  }
};

export default handleAlbum;