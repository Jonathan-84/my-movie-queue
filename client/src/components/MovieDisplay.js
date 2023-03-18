import React, { useState, useEffect, Component } from 'react';
import { searchTrailer } from '../utils/API';
import Auth from '../utils/auth';
import noposter from "../images/posternull.png";
// import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

// import { saveMovieIds, getSavedMovieIds } from '../utils/localStorage';

// // integrate Apollo Hooks
// import { SAVE_MOVIE } from '../utils/mutations';
// import {useMutation} from '@apollo/react-hooks';

class MovieDisplay extends Component {

  constructor(props) {
    super(props)
    this.state= {
      movie:[]

    }
  }

 //Experimenting with save function
 
 
//  useEffect(() => {
//     return () => saveBookIds(savedBookIds);
// });

 

//    handleSaveMovie = async (movieId,setSavedMovieIds, savedMovieIds) => {
//      // use mutation
//  const [saveMovie] = useMutation(SAVE_MOVIE);
//     // find the book in `searchedBooks` state by the matching id
//     const movie = this.props.movie.find((movie) => movie.movieId === movieId);

//     // get token
//     const token = Auth.loggedIn() ? Auth.getToken() : null;

//     if (!token) {
//       return false;
//     }

//     try {
//      const{data}= await saveMovie({
//         variables: { input: {...movie, list:"Shelf"} }
//       });

//       // if book successfully saves to user's account, save book id to state
//       setSavedMovieIds([...savedMovieIds, movie.movieId,]);
//     } catch (err) {
//       console.error(err);
//     }
//     console.log(savedMovieIds)
//   };


  viewSite() {
    console.log('this is connected')
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    // window.location.href = url
     window.open( url, '_blank');
  
    // console.log(window.location.href)
}

/// this is getting to the api info
   async viewTrailer() {
      // const api_key = process.env.REACT_APP_TMD_API_KEY;
    const movieID= this.props.movie.id
 
     const trailerCall =searchTrailer(movieID);
     console.log(trailerCall)
       
     
    fetch(trailerCall).then(function(response) {
      // Pass the data from the first fetch
      return response.json(); 
    }).then(function(response) {
      //Make a variable of the value wanted from the first api call
      for (var i = 0; i < response.results.length; i ++) {
          if (response.results[i].type === "Trailer" && 
              response.results[i].site === "YouTube" && 
              response.results[i].official === true
              ) {
              // use jquery to append or add fullName to modal
              var keyName= response.results[i].key;
              var siteName= response.results[i].name;

   console.log(keyName, siteName)
      }
    }
           const trailerURL="https://www.youtube.com/watch?v=" + keyName 

           if (keyName === undefined)
           {
alert("No Trailer Available")
           }
           else
          { window.open( trailerURL, '_blank');
          }
  })

      }
  

    watchlistAlert=()=>{
      alert('Add to Watchlist is a Coming Attraction!');
    }

    

    favoritesAlert=()=>{
      alert('Add to My Favorites List is a Coming Attraction!');
    }

    render() {

      
        return (
        <table key={this.props.movie.id}>
        <tbody>
            <tr className="movie-container text-center">
                <td>
                {this.props.movie.poster_src !== "https://image.tmdb.org/t/p/w300null" ? (
                    <img className="image" alt="poster" src={this.props.movie.poster_src}/>
                  ):( 
                  <img className="image" alt="noposter" width='300' src={noposter}/>
                  )}
                </td>
                <td className="title-description">
                <h3>{this.props.movie.title}</h3>
                <p className="description">{this.props.movie.overview}</p>
                </td>
                {Auth.loggedIn() ? (
                    <div className="dropdown">
                    <button className="btn text-light queue-button dropdown-toggle" type="button" data-toggle="dropdown">Save to List
                    <span className="caret"></span></button>
                    <ul className="dropdown-menu queue-button">
                    <li  className="queue-button text-light" onClick={this.watchlistAlert}>Add to Watchlist!</li>
                    <li  className="queue-button text-light" onClick={this.favoritesAlert}>Add to My Favorites!</li>
                   {/*} <li  className="queue-button text-light" onClick={this.viewTrailer}>Watch Trailer!</li>*/}
                     {/*} <li><a href="#">Save to My Movie Shelf</a></li>{*/}
                    </ul>
                    <input className="btn queue-button text-light" type="viewSite" onClick={this.viewSite.bind(this)} value="More Info"/>
                  <input className="btn queue-button text-light" type="viewTrailer" onClick={this.viewTrailer.bind(this)} value="Trailer"/>
                  </div>
               /*} <>
                  <Button className='btn-block btn-info'> Save to Watchlist</Button>
                  <Button className='btn-block btn-info'> Save to Favorites</Button>
                  <input type="playTrailer" onClick={this.watchTrailer.bind(this)} value="Play trailer"/>
                </>{*/
              ) : (
                <input className="btn queue-button text-light" type="viewSite" onClick={this.viewSite.bind(this)} value="More Info"/>
              )}
                </tr>
        </tbody>
    </table>
        )
      }
}

export default MovieDisplay

