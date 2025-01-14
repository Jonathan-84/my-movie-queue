import React from 'react';
import tmdb from "../images/TMDBCredit.png"
import '../app.css'; // Import the CSS for flip effect


const Credits = () => {
  return (
    <div className="main-container d-flex flex-column align-items-center text-white text-center"> 
      <h1 className="title-text">
        Credits 
      </h1>
      <div className="text-container">
        <p> 
          This site was born out of a love of movies, and a life before digital cable. While the functionality
          and design is original, the app is powered by "The Movie Database".

          This product uses the TMDB API but is not endorsed or certified by TMDB.
        </p>
      </div>
      <img src={tmdb} className="img-fluid" alt="Responsive image" />
    </div>
  );
};

export default Credits;
