import React, { Component } from 'react';
import Auth from '../utils/auth';

//import { Button } from 'react-bootstrap';

class MovieDisplay extends Component {
    watchTrailer() {
        console.log('this is connected')
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id 
        window.location.href = url
        console.log(window.location.href)
    }

    watchlistAlert=()=>{
      alert('Add to Watchlist is a Coming Attraction!');
    }

    favoritesAlert=()=>{
      alert('Add to My Favorites List is a Coming Attraction!');
    }

    render() {
        return<table key={this.props.movie.id}>
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
                     {/*} <li><a href="#">Save to My Movie Shelf</a></li>{*/}
                    </ul>
                    <input className="btn queue-button text-light" type="playTrailer" onClick={this.watchTrailer.bind(this)} value="More Info"/>
                  </div>
               /*} <>
                  <Button className='btn-block btn-info'> Save to Watchlist</Button>
                  <Button className='btn-block btn-info'> Save to Favorites</Button>
                  <input type="playTrailer" onClick={this.watchTrailer.bind(this)} value="Play trailer"/>
                </>{*/
              ) : (
                <input className="btn queue-button text-light" type="playTrailer" onClick={this.watchTrailer.bind(this)} value="More Info"/>
              )}
                </tr>
        </tbody>
    </table>
    }
}

export default MovieDisplay

