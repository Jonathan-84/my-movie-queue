import React from 'react';
import QueueNav from '../components/QueueNav.js'
import { GET_ME } from '../utils/queries.js';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import GetMovieCards from './getMovieCards.js';

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
            <h1 className="title-text"> {me.username}'s <span className="secondary-color bold-text"> GTH</span></h1>
        <p className='text-center text-white fw-semibold' > 
          See a great movie? Do you have to add it to your collection? Add them to the GTH!
        </p>
      </div>
         <QueueNav />
        <div className="results-container add-top-margin">
     <GetMovieCards/>
        </div>
      </div>
    </>
    );
  };
  
  export default Kick;