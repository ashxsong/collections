import React from 'react'


import "../Components.css"

const Movie = (props) => {
  return (
    <div className="movie">
          <div className="movie-image">
           {props.image && <img src = {props.image} />}
          </div>
          <h2>{props.name}</h2>
          <h3>Review: {props.review}</h3>
          <h4> Genre: {props.genre} </h4>
          <h5> Overview: {props.overview} </h5>
    </div>
  )
}

export default Movie