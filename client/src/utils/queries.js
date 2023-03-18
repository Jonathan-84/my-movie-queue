import gql from 'graphql-tag';

/*

Need to compare the backend structure, the username query breaks
once the saved movies portion is added 
need to check how I have the backend set up

Also go through and scrub my version of names, make sure they better match my book project, 
I think that I may have mixed up my wording in a few areas... so it'll be easier to compare 

   savedMovies {
        movie_id
        title
        overview
      }*/
export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      movieCount
      savedMovies {
        movieId
        title
        list
        overview
        image
        link
      }
    }
    
  }`;
