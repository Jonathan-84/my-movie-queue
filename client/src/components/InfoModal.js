import React from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';

const InfoModal = ({ show, handleClose, movie }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className='text-center'>{movie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
     <p>{movie.overview}</p>
     <a href={movie.link} target="_blank" rel="noopener noreferrer"> TMDB Page </a>
    
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InfoModal;
