import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        movieCount
        shelvedMovies {
         _id
          movieId
          title
          overview
          poster
          link
          trailer
        }
        queuedMovies {
         _id
          movieId
          title
          overview
          poster
          link
          trailer
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        movieCount
        shelvedMovies {
         _id
          movieId
          title
          overview
          poster
          link
          trailer
        }
        queuedMovies {
         _id
          movieId
          title
          overview
          poster
          link
          trailer
        }
      }
    }
  }
`;

export const SHELVE_MOVIE = gql`
  mutation shelveMovie($input: movieInput!) {
    shelveMovie(input: $input) {
      _id
      username
      email
      shelvedMovies {
       _id
        movieId
        title
        overview
        poster
        link
        trailer
      }
    }
  }
`;

export const QUEUE_MOVIE = gql`
  mutation queueMovie($input: movieInput!) {
    queueMovie(input: $input) {
      _id
      username
      email
      queuedMovies {
       _id
        movieId
        title
        overview
        poster
        link
        trailer
      }
    }
  }
`;

export const KICK_MOVIE = gql`
  mutation thatMovie($input: movieInput!) {
    thatMovie(input: $input) {
      _id
      username
      email
      queuedMovies {
       _id
        movieId
        title
        overview
        poster
        link
        trailer
      }
    }
  }
`;

export const GET_MOVIE = gql`
  mutation getMovie($input: movieInput!) {
    getMovie(input: $input) {
      _id
      username
      email
      queuedMovies {
       _id
        movieId
        title
        overview
        poster
        link
        trailer
      }
    }
  }
`;
export const REMOVE_SHELVED_MOVIE = gql`
  mutation removeShelvedMovie($_id: ID!) {
    removeShelvedMovie(_id: $_id) {
      _id
      username
      email
      movieCount
      shelvedMovies {
       _id
        movieId
        title
        overview
        poster
        link
        trailer
      }
    }
  }
`;

export const REMOVE_QUEUED_MOVIE = gql`
  mutation removeQueuedMovie($_id: ID!) {
    removeQueuedMovie(_id: $_id) {
      _id
      username
      email
      movieCount
      queuedMovies {
       _id
        movieId
        title
        overview
        poster
        link
        trailer
      }
    }
  }
`;

export const REMOVE_KICK_MOVIE = gql`
  mutation removeThatMovie($_id: ID!) {
    removeThatMovie(_id: $_id) {
      _id
      username
      email
      movieCount
      kickMovies {
       _id
        movieId
        title
        overview
        poster
        link
        trailer
      }
    }
  }
`;

export const REMOVE_GET_MOVIE = gql`
  mutation removeGetMovie($_id: ID!) {
    removeGetMovie(_id: $_id) {
      _id
      username
      email
      movieCount
      getMovies {
       _id
        movieId
        title
        overview
        poster
        link
        trailer
      }
    }
  }
`;


