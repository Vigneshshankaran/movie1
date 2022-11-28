import { useState } from "react";
import { Count } from "./Count/Count";

export function MovieList({ movies }) {
  const [show, setshow] = useState(true);

return(
  <>
  {movies.map(({name,rating,summary,pic,}) => {
    return (
      <>
      <img src={pic} alt={name} className="movie_image" />
      <h1 className="movie_name">{name}</h1>
      <p className="movie_rating">{rating}</p>
      {show ? <p className="movie_summary">{summary}</p> : null}
      <button onClick={() => setshow(!show)}>ToggleSummary</button>
      <Count />
      
    </>

    );
  })} 

</>
  )
}
