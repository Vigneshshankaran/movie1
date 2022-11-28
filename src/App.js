import "./App.css";
import {Welcome} from "./Welcome"
import {AddMovies} from "./AddMovies"
import {NotFound} from "./NotFound"
import {ColorBox} from "./ColorBox"



import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

export default function App() {
  return(
<>

<Router>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/movies">Movies</Link>
      </li>
      <li>
        <Link to="/color">Colors</Link>
      </li>
    </ul>
  </nav>
  <Routes>
    <Route path="/" element={<Welcome />}/>
    <Route path="/movies" element={<AddMovies />}/>
    <Route path="/color" element = {<ColorBox />}/>

    <Route path="*" element={<NotFound />}/>
  </Routes>
</Router>
    </>
  );
}


