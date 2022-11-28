import "./App.css";
import {Welcome} from "./Welcome"
import {AddMovies} from "./AddMovies"
import {NotFound} from "./NotFound"
import {ColorBox} from "./ColorBox"



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return(
<>
<Router>
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


