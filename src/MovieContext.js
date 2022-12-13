import React, { createContext, useState } from "react";
// import { INITIAL_MOVIE } from "./INITIAL_MOVIE";

export const MovieContext = createContext();

export const MovieProviders = (props) => {
  const [movieList, setMovieList] = useState([]);

  return (
    <MovieContext.Provider value={[movieList, setMovieList]}>
      {props.children}
    </MovieContext.Provider>
  );
};
