const initialState = {
  users: [],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'users/set':
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
}

export const userActions = {
  setUsers: (users) => ({
    type: 'users/set',
    payload: users,
  })
}

export default usersReducer;