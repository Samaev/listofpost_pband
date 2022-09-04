const initialState = {
  albums: [],
}

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'albums/set':
      return {
        ...state,
        albums: action.payload,
      };

    default:
      return state;
  }
}

export const albumActions = {
  setAlbums: (albums) => ({
    type: 'albums/set',
    payload: albums,
  })
}

export default albumsReducer;