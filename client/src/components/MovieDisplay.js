import React, { Component } from 'react';
import Auth from '../utils/auth';

class MovieDisplay extends Component {

  viewSite() {
    console.log('this is connected')
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
    console.log(window.location.href)
}

/// this is getting to the api info
    viewTrailer() {
      const api_key = process.env.REACT_APP_TMD_API_KEY;
    const movieID= this.props.movie.id
     // console.log(trailerURL)
//console.log(api_key)
  const trailerAPI= "https://api.themoviedb.org/3/movie/" + movieID + "/videos?api_key=" + api_key + "&language=en-US"
      
  fetch(trailerAPI).then(function(response) {
    // Pass the data from the first fetch
    return response.json(); 
  }).then(function(response) {
    console.log(response.data);
    //Make a variable of the value wanted from the first api call
    for (var i = 0; i < response.data.length; i ++) {
        if (response.data[i].results[0].type === "Trailer"
          ) {
            // use jquery to append or add fullName to modal
            let youtubeKey= response.data[i].results[0].key;
            // store park code or if possible assign it as a value to the fullName
            //if so, I can then do a separate fetch on the click that uses the parkCode to extract needed data


            console.log(youtubeKey);
        }
    }
  })
  
  
  
  //window.location.href = trailerURL
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
                <img className="image" alt="poster" src={this.props.movie.poster_src}/>
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

