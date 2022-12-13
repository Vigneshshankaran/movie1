import React from "react";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <div>
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
          <li>
            <Link to="/movies/addmovies">Add Movies</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
