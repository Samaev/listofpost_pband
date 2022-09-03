import './App.css';
import { useEffect, useState } from 'react';
import { getUsers, getPosts, getAlbums } from './services/api';
import { Postslist } from './components/Postslist';
import { AlbumslistModal } from './components/Albumslist';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [userName, setUserName] = useState('');
  const [albums, setAlbums] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [visibleAlbums, setVisibleAlbums] = useState([]);

  useEffect(() => {
    getUsers()
      .then(usersFromServer => setUsers(usersFromServer));
    getPosts()
      .then(postsFromServer => setPosts(postsFromServer));
    getAlbums()
      .then(albumsFromServer => setAlbums(albumsFromServer))
  }, [])

  const getUserPosts = (userId) => {
    setVisiblePosts(posts.filter(post => (userId === post.userId)));
    setUserName(users[userId - 1].name);
  }

  const getUsersAlbums = (userId) => {
    setVisibleAlbums(albums.filter(album => (userId === album.userId)))
    setUserName(users[userId - 1].name);
  }

  return (
    <div className="App">
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
