import React from "react";
import "./MovieListItem.css";

function MovieListItem({ movie, onDeleteMovie }) {
  return (
    <li className="MovieListItem">
      {movie.title}
      <button className="MovieListItem__Delete" onClick={onDeleteMovie}>
        <img src="/images/delete.svg" alt="Delete movie" />
      </button>
    </li>
  );
}

export default MovieListItem;
