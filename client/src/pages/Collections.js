import React from 'react';
import { GET_ME } from '../utils/queries.js';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Card, Col, Row } from 'react-bootstrap';
import queue from "../images/QUEUE.png";
import shelf from '../images/SHELF.png';
import gth from '../images/GTH.png';
import kick from '../images/KICK.png';
import { Link } from 'react-router-dom';

const Collections = () => {
  const { username: userParam } = useParams();
  
  const { data } = useQuery(GET_ME, {
    variables: { username: userParam }
  });

  const me = data?.me || {};
  // console.log(me);

  return (
    <>
    <Row xs={1} md={2} lg={2} xl={4} className="g-4">
      <Col>
      <Link to="/queue">
        <Card>
          <Card.Img variant="top" src={queue} />
          <Card.Body>
            <Card.Title>Queue</Card.Title>
            <Card.Text>
              This is a collection of movies you want added to your watch queue.
            </Card.Text>
          </Card.Body>
        </Card>
        </Link>
      </Col>
      <Col>
      <Link to="/shelf">
        <Card >
          <Card.Img variant="top" src={shelf} />
          <Card.Body>
            <Card.Title>Shelf</Card.Title>
            <Card.Text>
           You own this move. Put it back on the Shelf.
            </Card.Text>
          </Card.Body>
        </Card>
        </Link>
      </Col>
      <Col>
      <Link to="/get">
        <Card>
          <Card.Img variant="top" src={gth} />
          <Card.Body>
            <Card.Title>GTH</Card.Title>
            <Card.Text>
              This is a movie that you've Go-To-Have (Have to Own), so add it to your GTH.
            </Card.Text>
          </Card.Body>
        </Card>
        </Link>
      </Col>
      <Col>
      <Link to="/kick">
        <Card>
          <Card.Img variant="top" src={kick} />
          <Card.Body>
            <Card.Title>Kick</Card.Title>
            <Card.Text>
              What's that movie? You know, that random one. Add it or you'll be kicking yourself later... when you cannot remember it.
            </Card.Text>
          </Card.Body>
        </Card>
        </Link>
      </Col>
    </Row>
    </>
  );
};

export default Collections;
