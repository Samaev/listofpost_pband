import { combineReducers, applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import usersReducer from '../features/users';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  users: usersReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
  );

