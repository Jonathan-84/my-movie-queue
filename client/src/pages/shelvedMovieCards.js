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
  const { shelvedMovies = [] } = me;

  return (
    // <div className="g-5 ">
    // <Container fluid> 
      <Row xs={1} sm={1} md={2} lg={4}  >
      {/* <CardGroup className="custom-cg" > */}
        {shelvedMovies.map((movie, index) => (
          // <Col key={index} xs={12} sm={6} md={4} lg={3} className="card-container" >
            //  <CardGroup className="custom-cg" >
           <Col key={index} className='pb-2'>
            <FlipCardMovie movie={movie}   />
            </Col>

        ))}
         {/* </CardGroup> */}
      </Row>
    // </Container> 
    // </div>
  );
};



export default MovieCards;
