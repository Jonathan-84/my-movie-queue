export const getShelvedMovieIds = () => {
  const savedMovieIds = localStorage.getItem('shelved_movies')
    ? JSON.parse(localStorage.getItem('shelved_movies'))
    : [];
  return savedMovieIds;
};

export const shelveMovieIds = (movieIdArr) => {
  if (movieIdArr.length) {
    localStorage.setItem('shelved_movies', JSON.stringify(movieIdArr));
  } else {
    localStorage.removeItem('shelved_movies');
  }
};

export const getQueuedMovieIds = () => {
  const savedMovieIds = localStorage.getItem('queued_movies')
    ? JSON.parse(localStorage.getItem('queued_movies'))
    : [];
  return savedMovieIds;
};

export const queueMovieIds = (movieIdArr) => {
  if (movieIdArr.length) {
    localStorage.setItem('queued_movies', JSON.stringify(movieIdArr));
  } else {
    localStorage.removeItem('queued_movies');
  }
};

export const removeQueuedMovieId = (movieId) => {
  const queuedMovieIds = localStorage.getItem('queued_movies')
    ? JSON.parse(localStorage.getItem('queued_movies'))
    : null;
  if (!queuedMovieIds) {
    return false;
  }
  const updatedQueuedMovieIds = queuedMovieIds?.filter((queuedMovieId) => queuedMovieId !== movieId);
  localStorage.setItem('queued_movies', JSON.stringify(updatedQueuedMovieIds));

  return true;
}

  export const removeShelvedMovieId = (movieId) => {
    const shelvedMovieIds = localStorage.getItem('shelved_movies')
      ? JSON.parse(localStorage.getItem('shelved_movies'))
      : null;
    if (!shelvedMovieIds) {
      return false;
    }
    const updatedShelvedMovieIds = shelvedMovieIds?.filter((shelvedMovieId) => shelvedMovieId !== movieId);
    localStorage.setItem('shelved_movies', JSON.stringify(updatedShelvedMovieIds));
  
    return true;
  }

