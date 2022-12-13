import React from "react";
import { MovieList } from "./Components/MovieList";
import { Welcome } from "./Welcome";
import { AddMovies } from "./AddMovies";
import { NotFound } from "./NotFound";
import { ColorBox } from "./ColorBox";
import { EditMovie } from "./Components/EditMovie";
import { Form } from "./Form";

import { Route, Routes } from "react-router-dom";
import { MovieProviders } from "./MovieContext";

export function Routers() {
  return (
    <MovieProviders>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/color" element={<ColorBox />} />
        <Route path="/movies/editmovies/:id" element={<EditMovie />} />
        <Route path="/form" element={<Form />} />

        <Route path="/movies/addmovies" element={<AddMovies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MovieProviders>
  );
}
