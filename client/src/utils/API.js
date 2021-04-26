// route to get logged in user's info (needs the token)
export const getMe = (token) => {
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

// need to update for movies
// save data for a logged in user
export const saveMovie = (movieData, token) => {
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(movieData),
  });
};

// need to ypdate for movies
// remove saved data for a logged in user
export const deleteMovie = (movieId, token) => {
  return fetch(`/api/users/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
/*
const baseUrl = 'https://api.themoviedb.org/3/';
            const api_key = 'process.env.REACT_APP_TMD_API_KEY';
        // tested and worked  // const movie = "Avengers";


export const searchMovies = (query) => {
  return fetch(`${baseUrl}search/movie?api_key=${api_key}&query=${query}`);
};
*/