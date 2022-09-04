import './App.css';
import { useEffect, useState } from 'react';
import { getUsers, getPosts, getAlbums } from './services/api';
import { Postslist } from './components/Postslist';
import { AlbumslistModal } from './components/Albumslist';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { userActions } from './features/users';
import { postActions } from './features/posts';
import { albumActions } from './features/albums';

export function App() {
  const dispatch = useAppDispatch();
  const {users} = useAppSelector(state=>state.users)
  const {posts}= useAppSelector(state=>state.posts)
  const {albums} = useAppSelector(state=>state.albums)
  const [userName, setUserName] = useState('');
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [visibleAlbums, setVisibleAlbums] = useState([]);

  useEffect(() => {
    getUsers()
      .then(usersFromServer => {
        dispatch(
          userActions.setUsers(usersFromServer)
        )
      });
    getPosts()
      .then(postsFromServer => {
        dispatch(
          postActions.setPosts(postsFromServer)
        )
      });
    getAlbums()
      .then(albumsFromServer => {
        dispatch(
          albumActions.setAlbums(albumsFromServer)
        )
      })
  }, [dispatch])

console.log(users)

  const getUserPosts = (userId) => {
    setVisiblePosts(posts.filter(post => (userId === post.userId)));
    setUserName(users[userId - 1].name);
  }

  const getUsersAlbums = (userId) => {
    setVisibleAlbums(albums.filter(album => (userId === album.userId)))
    setUserName(users[userId - 1].name);
  }

  return (
    <div className="App title is-2 container">
      React and Redux
      {visiblePosts.length === 0 ? (
        <ol className='content is-lower-alpha'>
          <h3 className='title is-1'>Our Users</h3>
          {users.map(user => {
            return (
              <li
                className='list-item'
                key={user.id}
              >
                {user.name}
                <div className='button-area'>
                <button
                  className='button is-link is-outlined is-fullwidth'
                  onClick={() => getUserPosts(user.id)}
                >
                  Posts
                </button>
                <button
                  className='button is-link is-outlined is-fullwidth'
                  onClick={() => getUsersAlbums(user.id)}
                >Albums</button>
                </div>
              </li>)
          })}
        </ol>) : (
        <Postslist
          setVisiblePosts={setVisiblePosts}
          userName={userName}
          visiblePosts={visiblePosts}
        />
      )
      }

      <AlbumslistModal
        userName={userName}
        visibleAlbums={visibleAlbums}
        setVisibleAlbums={setVisibleAlbums}
      />
    </div>
  );
}

export default App;
