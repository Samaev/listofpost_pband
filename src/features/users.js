const initialState = {
  items: [],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'users/set':
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
}

export const actions = {
  setUsers: (users) => ({
    type: 'users/set',
    payload: users,
  })
}

export default usersReducer;