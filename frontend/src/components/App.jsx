import React, { useState, useEffect } from "react";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
import api from "../services/api";
import "./App.css";

function App() {
  const moviesEndpoint = "/api/movies";
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState();

  const fetchMovies = async () => {
    try {
      const { data } = await api.get(moviesEndpoint);
      setMovies(data);
    } catch (error) {
      setError("Could not fetch the movies!");
    }
  };

  const handleAddMovie = async (title) => {
    try {
      // Create a temporary movie with a fake _id for optimistic UI
      const tempMovie = { _id: Date.now(), title };

      // Add the temp movie immediately
      setMovies((prevMovies) => [...prevMovies, tempMovie]);

      // Send only the title to backend (backend assigns the real _id)
      const { data: savedMovie } = await api.create(moviesEndpoint, { title });

      // Replace temp movie with saved movie from backend
      setMovies((prevMovies) =>
        prevMovies.map((m) => (m._id === tempMovie._id ? savedMovie : m))
      );
    } catch (error) {
      setError("Could not save the movie!");
      // optionally, rollback state or refetch movies here
    }
  };

  const handleDeleteMovie = async (movie) => {
    try {
      setMovies((prevMovies) => prevMovies.filter((m) => m._id !== movie._id));
      await api.remove(`${moviesEndpoint}/${movie._id}`);
    } catch (error) {
      setError("Could not delete the movie!");
      // optionally refetch movies or revert state
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <MovieForm onAddMovie={handleAddMovie} />
      {error && (
        <p role="alert" className="Error">
          {error}
        </p>
      )}
      <MovieList movies={movies} onDeleteMovie={handleDeleteMovie} />
    </div>
  );
}

export default App;
