import React, { Component } from 'react';
import MovieDisplay from '../components/MovieDisplay';
import $ from 'jquery'


class Movie extends Component {

    constructor(props) {
        super(props)
        this.state= {}

        // Fetch data from moviedb API
        this.performSearch("")
        }

        

        performSearch(searchMovie){
            // Use Ajax to use async calls to fetch data from web 
            // replace "search" with "discover" for random selection
            const api_key = process.env.REACT_APP_TMD_API_KEY;
            const baseUrl = 'https://api.themoviedb.org/3/';
            
            const urlApi = `${baseUrl}search/movie?api_key=${api_key}&query=${searchMovie}` ;
            $.ajax({
                url: urlApi,
                success: (searchResults) => {
                    const results = searchResults.results

                    // search for movies
                    var movieRows = []

                    results.forEach((movie) => {
                        movie.poster_src = "https://image.tmdb.org/t/p/w300" + movie.poster_path
                        const movieRow = <MovieDisplay key={movie.id} movie={movie}/>
                        movieRows.push(movieRow)
                    })

                    this.setState({rows: movieRows})
                },
                error: (status, err) => {
                    console.error("failed to fetch data")
                }
            })
    }

    searchChangeHandler(e) {
      //  const bound = this
        const searchMovie = e.target.value
        this.performSearch(searchMovie)
    }

    render() {
        return (
            <>
            <div className="input-group">
                <input type="search" 
                    className="form-control rounded searchbar" 
                    onChange={this.searchChangeHandler.bind(this)} placeholder="Search for movies..." 
                    aria-label="Search"
                    aria-describedby="search-addon" />
            <button type="button" className="btn btn-outline orange-button">Search</button>
            </div>
            <div className="Test">
                {this.state.rows}
            </div>
            </>
        );
    };
};

export default Movie;