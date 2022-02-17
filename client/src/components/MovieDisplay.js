import React, { Component } from 'react';
import Auth from '../utils/auth';



class MovieDisplay extends Component {


    viewTrailer() {
      const api_key = process.env.REACT_APP_TMD_API_KEY;
      const trailerURL= this.props.movie.id;
      console.log(trailerURL)
console.log(api_key)
      //const trailerURL= "https://api.themoviedb.org/3/movie/ + this.props.movie.id + "/videos?api_key=" + api_key + "&language=en-US"
     //console.log(trailerURL)
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
                    <li  className="queue-button text-light" onClick={this.viewTrailer}>Watch Trailer!</li>
                     {/*} <li><a href="#">Save to My Movie Shelf</a></li>{*/}
                    </ul>
                    <input className="btn queue-button text-light" href="https://www.themoviedb.org/movie/ + this.props.movie.id" value="More Info"/>
                  {/* <input className="btn queue-button text-light" type="viewTrailer" onClick={this.viewTrailer.bind(this)} value="Trailer"/>*/}
                  </div>
               /*} <>
                  <Button className='btn-block btn-info'> Save to Watchlist</Button>
                  <Button className='btn-block btn-info'> Save to Favorites</Button>
                  <input type="playTrailer" onClick={this.watchTrailer.bind(this)} value="Play trailer"/>
                </>{*/
              ) : (
                <input className="btn queue-button text-light" href="https://www.themoviedb.org/movie/ + this.props.movie.id" value="More Info"/>
              )}
                </tr>
        </tbody>
    </table>
        )
      }
}

export default MovieDisplay

