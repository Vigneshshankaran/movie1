import { useEffect, useState,useContext } from "react";
import { Count } from "./Count/Count";
 import { MovieContext } from "../MovieContext";
 import { useNavigate } from "react-router-dom";

export function MovieList() {
  const [show, setShow] = useState(true);
   const [movieList, setMovieList] = useContext(MovieContext)
   const navigate = useNavigate()

   const getMovie = () =>{
    fetch("https://61c8fe11adee460017260eb5.mockapi.io/movie",{
      method: "GET",
    })
    .then((data) => data.json())
    .then((mvs) => setMovieList(mvs));
   }
     useEffect(getMovie, [])

const deleteMovie = (id) =>{
  fetch(`https://61c8fe11adee460017260eb5.mockapi.io/movie/${id}`,{
    method: "DELETE",
  })
  .then((data) => data.json())
  .then((mvs) => getMovie());
 }
    return (
  
       <>
         {movieList.map(({name, pic, rating, summary,id})=>{
           return(
           
             // <Grid item xs={4}>
                <>
               <img className='image' src={pic} alt={name} />
               <h3 className='bg-clip-border p-6 bg-violet-600 border-4 border-violet-300 border-dashed'>Movie: {name}</h3>
               <p>Rating: {rating} </p>
          
               <div>
               {show ? <p >Summary: {summary}</p>: null }
                     <button onClick={() => setShow(!show)}>more</button>
                     <button onClick={() => deleteMovie(id)}>Delete</button>
                     <button onClick={() => navigate(`/movies/editmovies/${id}`)}>Update</button>


 
 
               </div>
               <Count />
               </>
           )
         }
       )}
                   </>
 
 
 
   );
 }