import React from 'react';
import QueueNav from '../components/QueueNav.js'
import { GET_ME } from '../utils/queries.js';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import KickMovieCards from './kickMovieCards.js';

/* added personalization to queue page... need
to find the error in graphql error*/

const Kick = () => {

  const { username: userParam } = useParams();
  
  const { data } = useQuery(GET_ME, {
    variables: { username: userParam }
  });




  const me = data?.me || {};

  // console.log(me)

    return (
      <>
      <div className="main-container">
        <div className="add-margin">
            <h1 className="title-text"> {me.username}'s <span className="secondary-color bold-text"> Kick</span></h1>
            <p className='text-center text-white fw-semibold'> Is there a random movie you like but feel like kicking yourself when you cannot think of the name?
               Add them to the kick!</p>
        </div> 
         <QueueNav />
        <div className="results-container add-top-margin">
     <KickMovieCards/>
        </div>
      </div>
    </>
    );
  };
  
  export default Kick;