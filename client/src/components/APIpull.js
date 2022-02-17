import React, { Component} from 'react';
import MovieDisplay from '../components/MovieDisplay';
import $ from 'jquery'



class APIpull extends Component {

    constructor(props) {
        super(props)

        this.state= {
            search: this.props.search

        }

        // Fetch data from moviedb API
        }


        componentDidUpdate(search) {
            if(this.props !== search){
                console.log(search)
                this.performSearch()
            }
          }

      /*
            componentDidMount() {
                console.log('componentDidMount() lifecycle');
            
                // Trigger update
                this.setState({ search: !this.state.search });
                this.performSearch(this.state.search)
              }
            */
          

        performSearch(props){
            const search= this.state.search
console.log(search)
            // Use Ajax to use async calls to fetch data from web 
            // replace "search" with "discover" for random selection
            const api_key = process.env.REACT_APP_TMD_API_KEY;
            const baseUrl = 'https://api.themoviedb.org/3/';
       
            
            const urlApi = `${baseUrl}search/movie?api_key=${api_key}&query=${search}` ;
            console.log(urlApi)
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
    

    render() {
      return (
          <>
          <p>PLaceholding</p>
          </>
      );
  };
};


export default APIpull;