import React, { useState } from 'react';
import { Col, Card, Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import { REMOVE_QUEUED_MOVIE, REMOVE_GET_MOVIE, REMOVE_SHELVED_MOVIE, REMOVE_KICK_MOVIE, GET_MOVIE, SHELVE_MOVIE, KICK_MOVIE } from '../utils/mutations';
import TrailerModal from './TrailerModal.js';
import InfoModal from './InfoModal.js';
import { useMutation } from '@apollo/react-hooks';

const FlipCardMovie = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  // console.log(movie);

  const [removeQueuedMovie] = useMutation(REMOVE_QUEUED_MOVIE);
  const [removeShelvedMovie] = useMutation(REMOVE_SHELVED_MOVIE);
  const [removeGetMovie] = useMutation(REMOVE_GET_MOVIE);
  const [removeKickMovie] = useMutation(REMOVE_KICK_MOVIE);
  const [getMovie] = useMutation(GET_MOVIE);
  const [shelveMovie] = useMutation(SHELVE_MOVIE);
  const [kickMovie] = useMutation(KICK_MOVIE);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleOpenInfoModal = () => setShowInfoModal(true);
  const handleCloseInfoModal = () => setShowInfoModal(false);

  const removeMovie = async () => {
    const _id = movie._id; // Should be a string
    const type = movie.__typename;
    try {
      let data;
      // console.log(movie.__typename);

      switch (type) {
        case 'shelvedMovie':
          data = await removeShelvedMovie({ variables: { _id } });
          break;
        case 'queuedMovie':
          data = await removeQueuedMovie({ variables: { _id } });
          break;
        case 'thatMovie':
          data = await removeKickMovie({ variables: { _id } });
          break;
        case 'getMovie':
          data = await removeGetMovie({ variables: { _id } });
          break;
        default:
          throw new Error('Unknown movie type');
      }

      // console.log(_id);
      // alert('Deleted!');
    } catch (error) {
      console.error('Error saving movie to watchlist:', error);
      // console.log(_id);
      alert('Failed to add movie to watchlist');
    }
  };

  const changeCollection = async (updateCollection) => {
    const _id = movie._id; // Should be a string
    const currentType = movie.__typename;
    // console.log(movie)

    const movieData = { 
      movieId: movie.movieId, // Should be a string 
      title: movie.title, // Should be a string 
      overview: movie.overview, // Should be a string 
      poster: movie.poster, // Should be a string 
      link: movie.link, // String 
      trailer: movie.trailer // String
    };

    try {
      switch (currentType) {
        case 'queuedMovie':
          if (updateCollection === 'get') {
           await getMovie({ variables: { input: { ...movieData } } });
          } else if (updateCollection === 'kick') {
            await kickMovie({ variables: { input: { ...movieData } } });
          } else if (updateCollection === 'shelf') {
            await shelveMovie({ variables: { input: { ...movieData } } });
          }
          await removeQueuedMovie({ variables: { _id } });
          break;
        case 'getMovie':
          await shelveMovie({ variables: { input: { ...movieData } } });
          await removeGetMovie({ variables: { _id } });
          break;
        default:
          throw new Error('Unknown movie type');
      }

      // console.log(_id);
      // alert('Collection updated!');
    } catch (error) {
      console.error('Error updating collection:', error);
      alert('Failed to update collection');
    }
  };

  const getListOptions = (typename) => {
    switch (typename) {
      case 'queuedMovie':
        return (
          <>
            <Dropdown.Item className="queue-button" onClick={() => changeCollection('get')}>Add to the GTH!</Dropdown.Item>
            <Dropdown.Item className="queue-button" onClick={() => changeCollection('kick')}>Add to the Kick!</Dropdown.Item>
            <Dropdown.Item className="queue-button"onClick={() => changeCollection('shelve')}>Couldn't Wait, Add to the Shelf!</Dropdown.Item>
            <Dropdown.Item className="queue-button" onClick={removeMovie}>Remove from Queue Collection!</Dropdown.Item>
          </>
        );
      case 'getMovie':
        return (
          <>
            <Dropdown.Item className="queue-button" onClick={() => changeCollection('shelve')}>Add to the Shelf!</Dropdown.Item>
            <Dropdown.Item className="queue-button" onClick={removeMovie}>Remove from GTH Collection!</Dropdown.Item>
          </>
        );
      case 'shelvedMovie':
        return (
          <>
            {/* <Dropdown.Item onClick={() => changeCollection('kick')}>Add to the Kick!</Dropdown.Item> */}
            <Dropdown.Item className="queue-button" onClick={removeMovie}>Remove from the Shelf!</Dropdown.Item>
          </>
        );
      case 'thatMovie':
        return (
          <>
            {/* <Dropdown.Item onClick={() => changeCollection('queue')}>Add to the Queue!</Dropdown.Item> */}
            {/* <Dropdown.Item onClick={() => changeCollection('get')}>Add to the Get!</Dropdown.Item>
            <Dropdown.Item onClick={() => changeCollection('shelved')}>Add to the Shelf!</Dropdown.Item> */}
            <Dropdown.Item className="queue-button" onClick={removeMovie}>Remove from Kick Collection!</Dropdown.Item>
          </>
        );
      default:
        return null;
    }
  };

  return (
    
     
      <Card>
        <Card.Img variant="top" src={movie.poster} alt={movie.title} style={{ height: 'auto', width: '100%', objectFit: 'cover' }} />
        <ButtonGroup size="sm">
          {/* <Button className="queue-button border border-dark" onClick={removeMovie}><i className="fa-solid fa-eject"></i></Button> */}
          <Button className="queue-button border border-dark" disabled={movie.trailer === "None"} onClick={handleOpenModal}><i className="fa-solid fa-play"></i></Button>
          <TrailerModal show={showModal} handleClose={handleCloseModal} videoId={movie.trailer} />
          <Button className="queue-button border border-dark" onClick={handleOpenInfoModal}><i class="fa-solid fa-film"></i></Button>
          <InfoModal show={showInfoModal} handleClose={handleCloseInfoModal} movie={movie} />
          <Dropdown >
            <Dropdown.Toggle className="queue-button" variant="secondary" id="dropdown-basic">Update Collection</Dropdown.Toggle>
            <Dropdown.Menu className="queue-button" >{getListOptions(movie.__typename)}</Dropdown.Menu>
          </Dropdown>
        </ButtonGroup>
      </Card>
    
  );
};

export default FlipCardMovie;
