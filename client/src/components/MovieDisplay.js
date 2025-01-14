import React, { useState, useEffect } from 'react';
import { searchTrailer } from '../utils/API';
import Auth from '../utils/auth';
import noposter from "../images/posternull.png";
import TrailerModal from './TrailerModal.js';

// integrate Apollo Hooks
import { QUEUE_MOVIE, SHELVE_MOVIE, KICK_MOVIE,GET_MOVIE } from '../utils/mutations';
import { useMutation } from '@apollo/react-hooks';

const MovieDisplay = (props) => {
  const [movie] = useState([]);
  const [movieData] = useState([]);
  const [showModal, setShowModal] = useState(false); 

  const [trailerID, setTrailerID] = useState(''); 

  const [queueMovie] = useMutation(QUEUE_MOVIE);
  const [shelveMovie] = useMutation(SHELVE_MOVIE);
  const [kickMovie] = useMutation(KICK_MOVIE);
  const [gthMovie] = useMutation(GET_MOVIE);

  const viewSite = () => {
    console.log('this is connected');
    const url = "https://www.themoviedb.org/movie/" + props.movie.id;
    const site= url;
    window.open(url, '_blank');
  }

  useEffect(() => {fetchTrailerKey(); }, [props.movie.id]);

  const fetchTrailerKey = async () => {
    const movieID = props.movie.id;
    const trailerCall = searchTrailer(movieID);
    console.log(trailerCall);

    fetch(trailerCall).then(response => response.json())
      .then(response => {
        let keyName;
        let siteName;

        for (var i = 0; i < response.results.length; i++) {
          if (response.results[i].type === "Trailer" || "Teaser" && 
              response.results[i].site === "YouTube" && 
              response.results[i].official === true) {
            keyName = response.results[i].key;
            siteName = response.results[i].name;
            console.log(keyName, siteName);
            
          }
        }

        if (keyName === undefined) {
          setTrailerID("None")
        } else {
          setTrailerID(keyName)
        
        }
      });
    }

    // const viewTrailer = () => 
    //   { if (trailerID && trailerID !== "None") 
    //     { const trailerURL = "https://www.youtube.com/watch?v=" + trailerID; 
    //     window.open(trailerURL, '_blank');
    //      } else { alert("No Trailer Available"); } }


         const handleOpenModal = () => { setShowModal(true); } 
         const handleCloseModal = () => { setShowModal(false); }


  const shelveList = async () => {
 const movieData = { 
  movieId: props.movie.id.toString(), // Should be a string 
  title: props.movie.title, // Should be a string 
  overview: props.movie.overview, // Should be a string 
  poster: props.movie.poster_src, // Should be a string 
  link: "https://www.themoviedb.org/movie/" + props.movie.id, // String 
  trailer: trailerID // String
};
 try { 
  console.log(movie)
  const { data } = await shelveMovie({ 
  variables: { input: { ...movieData } } }); 
  alert('Movie added to your shelf!'); } 
  catch (error) { 
    console.error('Error saving movie to shelf:', error); 
    alert('Failed to add movie to shelf'); 
  }}

  const queueList = async () => {
    const movieData = { 
      movieId: props.movie.id.toString(), // Should be a string 
      title: props.movie.title, // Should be a string 
      overview: props.movie.overview, // Should be a string 
      poster: props.movie.poster_src, // Should be a string 
      link: "https://www.themoviedb.org/movie/" + props.movie.id, // String 
      trailer: trailerID // String
    };
     try { 
      console.log(movie)
      const { data } = await queueMovie({ 
      variables: { input: { ...movieData } } }); 
      alert('Movie added to your queue!'); } 
      catch (error) { 
        console.error('Error saving movie to queue:', error); 
        alert('Failed to add movie to queue'); 
      }}

      const kickList = async () => {
        const movieData = { 
          movieId: props.movie.id.toString(), // Should be a string 
          title: props.movie.title, // Should be a string 
          overview: props.movie.overview, // Should be a string 
          poster: props.movie.poster_src, // Should be a string 
          link: "https://www.themoviedb.org/movie/" + props.movie.id, // String 
          trailer: trailerID // String
        };
         try { 
          console.log(movie)
          const { data } = await kickMovie({ 
          variables: { input: { ...movieData } } }); 
          alert('Movie added to your queue!'); } 
          catch (error) { 
            console.error('Error saving movie to queue:', error); 
            alert('Failed to add movie to queue'); 
          }}
    
          const gthList = async () => {
            const movieData = { 
              movieId: props.movie.id.toString(), // Should be a string 
              title: props.movie.title, // Should be a string 
              overview: props.movie.overview, // Should be a string 
              poster: props.movie.poster_src, // Should be a string 
              link: "https://www.themoviedb.org/movie/" + props.movie.id, // String 
              trailer: trailerID // String
            };
             try { 
              console.log(movie)
              const { data } = await gthMovie({ 
              variables: { input: { ...movieData } } }); 
              alert('Movie added to your queue!'); } 
              catch (error) { 
                console.error('Error saving movie to queue:', error); 
                alert('Failed to add movie to queue'); 
              }}
        

  return (
    <table key={props.movie.id}>
      <tbody>
        <tr className="movie-container text-center">
          <td>
            {props.movie.poster_src !== "https://image.tmdb.org/t/p/w300null" ? (
              <img className="image" alt="poster" src={props.movie.poster_src}/>
            ) : ( 
              <img className="image" alt="noposter" width='300' src={noposter}/>
            )}
          </td>
          <td className="title-description">
            <h3>{props.movie.title}</h3>
            <p className="description">{props.movie.overview}</p>
          </td>
          {Auth.loggedIn() ? (
            <div className="dropdown">
              <button className="btn text-light queue-button dropdown-toggle" type="button" data-toggle="dropdown">Save to a Collection
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu queue-button">
                <li className="queue-button text-light" onClick={queueList}>Add to the Queue!</li>
                <li className="queue-button text-light" onClick={shelveList}>Add to the Shelf!</li>
                <li className="queue-button text-light" onClick={kickList}>Add to the Kick!</li>
                <li className="queue-button text-light" onClick={gthList}>Add to the GTH!</li>
              </ul>
              <input className="btn queue-button text-light" type="viewSite" onClick={viewSite} value="More Info"/>
              <input className="btn queue-button text-light" disabled={trailerID === "None"} type="viewTrailer" onClick={handleOpenModal} value="Trailer"/>
              <TrailerModal show={showModal} handleClose={handleCloseModal} videoId={trailerID} />
            </div>
          ) : (
            <input className="btn queue-button text-light" type="viewSite" onClick={viewSite} value="More Info"/>
          )}
        </tr>
      </tbody>
    </table>
  );
}

export default MovieDisplay;
