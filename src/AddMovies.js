import { useState, } from "react";
import {  useNavigate } from "react-router-dom";
// import { MovieContext } from "./MovieContext"

 export function AddMovies() {
const navigate = useNavigate();

  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [pic, setPic] = useState("");

const addMovie = () => {
  const newMovies = {
    name,
    rating,
    summary,
    pic,
  };
  fetch("https://61c8fe11adee460017260eb5.mockapi.io/movie",{
    method: "POST",
    body: JSON.stringify(newMovies),
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

      <button onClick={addMovie}>
        Add Movies</button>

      {/*
                   {movieList.map(({name,rating,summary,pic,}) => {
                    return (
                      <MovieList
                        // name={name}
                        // rating={rating}
                        // summary={summary}
                        // pic={pic}
                      />
                    );
                  })}  */}

    </div>
  );
}
