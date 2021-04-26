import gql from 'graphql-tag';


export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      movieCount
      savedMovies {
        movie_id
        title
        overview
      }
    }
  }`;
