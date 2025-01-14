// import React from "react";
// import QueueNav from '../components/QueueNav'
// import { GET_ME } from '../utils/queries';
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/react-hooks';


// function Favorites() {

 
//     const { username: userParam } = useParams();
  
//     const { data } = useQuery(GET_ME, {
//       variables: { username: userParam }
//     });
  
  
//     const me = data?.me || {};
  
        
//     return (
//         <>
//         <div className="main-container">
//             <div className="add-margin">
//             <h1 className="title-text"> {me.username}'s <span className="secondary-color bold-text"> FAVORITES</span></h1>
//             </div>
//             <QueueNav />
//             <div className="results-container add-top-margin">
//                 <h2 className="center">Favorites list will be here</h2>
//             </div>
//         </div>
//         </>
//     )
// }

// export default Favorites;