import React from 'react';
import "./Movie.css";


function Movie(props){
  return (
    <div className="movie">
      <img src={props.poster} alt={props.title} title = {props.title}/>
      <div className="movie_data">
        <h3 className="movie_title">{props.title}</h3>
        <span className="movie_year">{props.year}</span>
        <div className="genres">
          {props.genres.map((genre, index) =>
            <span key={index} className="genres_genre">{genre+" "}</span>,
            )}
        </div>
        <p className="movie_summary">{props.summary.slice(0,180)}...</p>
      
      </div>
  </div>
  )
}

export default Movie;
