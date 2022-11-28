import { useState } from "react";
import { MovieList } from "./Components/MovieList";
import { INITIAL_MOVIE } from "./INITIAL_MOVIE";
 
 export function AddMovies() {


  const [movieList, setMovieList] = useState(INITIAL_MOVIE);
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [pic, setPic] = useState("");

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

      <button onClick={() => {
        const newMovies = {
          name,
          rating,
          summary,
          pic,
        };
        setMovieList([...movieList, newMovies]);
      }}>
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
      <MovieList movies={movieList} />

    </div>
  );
}
