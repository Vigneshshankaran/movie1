import "./App.css";
import { Nav } from "./Nav";
import { Routers } from "./Routers";
import { BrowserRouter as Router } from "react-router-dom";
// import { MovieContext } from "./MovieContext";
// import {   useContext} from "react";

export default function App() {
  // const [ setMovieList] = useContext([MovieContext])

  return (
    <>
      <Router>
        <Nav />
        <Routers />
      </Router>
    </>
  );
}
