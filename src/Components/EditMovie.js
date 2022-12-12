import { useState,useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";

import React from 'react'

export  function EditMovie() {
    const {id} = useParams();
    const [movies, setMovies] = useState(null)
    const getMovie = () =>{
        fetch(`https://61c8fe11adee460017260eb5.mockapi.io/movie/${id}`,{
          method: "GET",
        })
        .then((data) => data.json())
        .then((mvs) => setMovies(mvs));
       }
         useEffect(getMovie, [])
  return movies ? <UpdateMovies movies={movies}/> : "" ;

}


function UpdateMovies({movies}) {
const navigate = useNavigate();

  const [name, setName] = useState(movies.name);
  const [rating, setRating] = useState(movies.rating);
  const [summary, setSummary] = useState(movies.summary);
  const [pic, setPic] = useState(movies.pic);

const updateMovie = () => {
  const editMovies = {
    name,
    rating,
    summary,
    pic,
  };
  fetch(`https://61c8fe11adee460017260eb5.mockapi.io/movie/${movies.id}`,{
    method: "PUT",
    body: JSON.stringify(editMovies),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(() =>  navigate("/movies"))
}


  return (
    <div className="App">

      <input placeholder="Enter The Name" value={name} onChange={(event) => setName(event.target.value)} />
      <input placeholder="Enter The Rating" value={rating} onChange={(event) => setRating(event.target.value)} />
      <input placeholder="Enter The Summary" value={summary} onChange={(event) => setSummary(event.target.value)} />
      <input placeholder="Enter The Pic" value={pic} onChange={(event) => setPic(event.target.value)} />

      {/*   <button onClick={() => setColorsList([...colorsList, colors])}>
                    {" "}
                    Add Colors
                  </button> */}

      <button onClick={updateMovie}>
        Update Movies</button>


    </div>
  );
}
