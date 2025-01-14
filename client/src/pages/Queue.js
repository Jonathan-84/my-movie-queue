import React from 'react';
import QueueNav from '../components/QueueNav'
import { GET_ME } from '../utils/queries';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import QueuedMovieCards from './queuedMovieCards.js';

/* added personalization to queue page... need
to find the error in graphql error*/

const Queue = () => {

  const { username: userParam } = useParams();
  
  const { data } = useQuery(GET_ME, {
    variables: { username: userParam }
  });




  const me = data?.me || {};

  console.log(me)

    return (
      <>
    <div className="main-container">
    <div className="add-margin">
            <h1 className="title-text"> {me.username}'s <span className="secondary-color bold-text"> Queue</span></h1>
        <p className='text-center text-white fw-semibold' > 
          Are there movies that you want to See? Add them to the queue!
        </p>
      </div>
      
   
         <QueueNav />
      
        <div className="results-container add-top-margin">
     <QueuedMovieCards/>
        </div>
      </div>
    </>
    );
  };
  
  export default Queue;