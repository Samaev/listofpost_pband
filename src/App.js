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
    <div className="App title">
      React
      {visiblePosts.length === 0 ? (
        <ol>Our Users
          {users.map(user => {
            return (
              <li
                key={user.id}
              >
                {user.name}
                <button
                  onClick={() => getUserPosts(user.id)}
                >
                  Posts
                </button>
                <button
                  onClick={() => getUsersAlbums(user.id)}
                >Albums</button>
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
