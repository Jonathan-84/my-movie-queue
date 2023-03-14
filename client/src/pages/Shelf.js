import React, { useState } from 'react';
import QueueNav from '../components/QueueNav'
import { useParams } from 'react-router-dom';
import {Container, CardColumns, Card, Button } from 'react-bootstrap';

import Auth from '../utils/auth';
import { removeMovieId } from '../utils/localStorage';

// integrate Apollo Hooks

import {useMutation, useQuery} from '@apollo/react-hooks';
import { GET_ME } from '../utils/queries';
import { REMOVE_MOVIE } from '../utils/mutations';

function Shelf() {

    const { username: userParam } = useParams();
    const { data } = useQuery(GET_ME, {
      variables: { username: userParam },
      onCompleted: () => {
            setUserData(data.me)
          }});

    const me = data?.me || {};
  
      // get My data
  const [userData, setUserData] = useState({});

  //  const { name } = useQuery(GET_ME, {
  //     variables: { username: userParam }
  //   });
    // const me = data?.me || {};
  
  // const { data } = useQuery(GET_ME,
  //   {onCompleted: () => {
  //     setUserData(data.me)
  //   }});
 
 
  const userDataLength = Object.keys(userData).length;
 
  const [removeMovie, { error }] = useMutation(REMOVE_MOVIE);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteMovie = async (movieId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      //looks like this was comment in my other project
      const {data} = await removeMovie({
        variables: { movieId },
      });
      // console.log(bookId);
      if (error) {
        throw new Error('something went wrong!');
      }
      //setUserData(updatedData.data.removeBook);
      removeMovieId(movieId);
      

    } catch (err) {
      console.error(err);
    }
  };
  const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return (
        <h2>Please login first</h2>
      );
    }
  // if data isn't here yet, say so
  if (!userDataLength) {
    return <h2>LOADING...</h2>;
  } 
  
       
    


    return (
        <>
        <div className="main-container">
            <div className="add-margin">
            <h1 className="title-text"> {me.username}'s <span className="secondary-color bold-text"> Shelf</span></h1>
            </div>
            <QueueNav />
            <div className="results-container add-top-margin">
                <h2 className="center">Movies I own</h2>
      <Container>
        <h2>
          {userData.savedMovies.length
            ? `Viewing ${userData.savedMovies.length} saved ${userData.savedMovies.length === 1 ? 'movie' : 'movies'}:`
            : 'You have own no movies?'}
        </h2>
        <CardColumns>
          {userData.savedMovies.map((movie) => {
            return (
              <Card key={movie.movieId} border='dark'>
                {movie.image ? <Card.Img src={movie.image} alt={`The poster for ${movie.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  {/* <p className='small'>Authors: {movie.authors}</p> */}
                  <Card.Text>{movie.overview}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteMovie(movie.movieId)}>
                    Delete this Movie!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
            </div>
        </div>
        </>
    )
}

export default Shelf;