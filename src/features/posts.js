const initialState = {
  posts: [],
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'posts/set':
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
}

export const postActions = {
  setPosts: (posts) => ({
    type: 'posts/set',
    payload: posts,
  })
}

export default postsReducer;