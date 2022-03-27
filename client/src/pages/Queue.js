import React from 'react';
import QueueNav from '../components/QueueNav'
import { GET_ME } from '../utils/queries';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

/* added personalization to queue page... need
to find the error in graphql error*/

const Queue = () => {

  const { username: userParam } = useParams();
  
  const { data } = useQuery(GET_ME, {
    variables: { username: userParam }
  });


  const me = data?.me || {};

    return (
      <>
      <div className="main-container">
        <div className="add-margin">
            <h1 className="title-text"> {me.username}'s <span className="secondary-color bold-text"> Coming Attractions</span></h1>
        </div>
        <QueueNav />
        <div className="results-container add-top-margin">
            <h2 className="center">To-Watch list will be here</h2>
        </div>
      </div>
    </>
    );
  };
  
  export default Queue;