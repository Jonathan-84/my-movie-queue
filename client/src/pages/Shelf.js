import React from 'react';
import QueueNav from '../components/QueueNav'
import { GET_ME } from '../utils/queries';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import ShelvedMovieCards from './shelvedMovieCards.js';

/* added personalization to queue page... need
to find the error in graphql error*/

const Shelf = () => {

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
            <h1 className="title-text"> {me.username}'s <span className="secondary-color bold-text"> Shelf</span></h1>
          
            <p className='text-center text-white fw-semibold'> 
          What movies do you own? Add them to the shelf!
        </p>
        </div>
        {/* <QueueNav /> */}
    
     
      
        <QueueNav />
        {/* </div> */}
        
        <div className="results-container add-top-margin">
     <ShelvedMovieCards/>
        </div>
        </div>
     
    </>
    );
  };
  
  export default Shelf;