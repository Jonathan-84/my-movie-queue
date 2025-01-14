import gql from 'graphql-tag';

/*

Need to compare the backend structure, the username query breaks
once the saved movies portion is added 
need to check how I have the backend set up
 query doesn't like this format
shelvedMovies {
          movieId
          title
          overview
          poster
          link
          trailer
        }
        queuedMovies {
          movieId
          title
          overview
          poster
          link
          trailer
        }

Also go through and scrub my version of names, make sure they better match my book project, 
I think that I may have mixed up my wording in a few areas... so it'll be easier to compare 

   savedMovies {
        movie_id
        title
        overview
      }*/
export const GET_ME = gql`
query {
  me {
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
    queuedMovies {
    _id
      movieId
      title
      overview
      poster
      link
      trailer
    }
          kickMovies {
    _id
      movieId
      title
      overview
      poster
      link
      trailer
    }
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
