const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = () => {
  return fetch(`${BASE_URL}/users`)
    .then(response => response.json())
};

export const getPosts = () => {
  return fetch(`${BASE_URL}/posts`)
    .then(response => response.json())
};

export const getAlbums = () => {
  return fetch(`${BASE_URL}/albums`)
    .then(response => response.json())
};