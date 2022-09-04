import { combineReducers, applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import usersReducer from '../features/users';
import postsReducer from '../features/posts';
import albumsReducer from '../features/albums';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  albums: albumsReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
  );

