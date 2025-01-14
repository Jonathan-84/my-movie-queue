import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, CardGroup } from 'react-bootstrap';
import { GET_ME } from '../utils/queries';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import '../app.css'; // Import the CSS for flip effect
import FlipCardMovie from '../components/FlipCardMovie';

const MovieCards = () => {
  const { username: userParam } = useParams();
  const { data } = useQuery(GET_ME, {
    variables: { username: userParam }
  });

  const me = data?.me || {};
  const { getMovies = [] } = me;

  return (
    // <div className="g-5 ">

   <Row xs={1} sm={1} md={2} lg={4}  >
        {getMovies.map((movie, index) => (
      
             <Col key={index} className='pb-2 '>
            <FlipCardMovie movie={movie} />
     
          </Col>
        ))}
      </Row>

    // </div>
  );
};



export default MovieCards;
