import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage.js";
import MovieForm from "./MovieForm.jsx";
import MovieItem from "./MovieItem.jsx";
import FilterTabs from "./FilterTabs.jsx";
import "./App.css";

function App() {
  const [movies, setMovies] = useLocalStorage("movies", []);
  const [filter, setFilter] = useState("All");

  function addMovie(title) {
    setMovies([...movies, { id: Date.now(), title, watched: false }]);
  }

  function toggleMovie(id) {
    setMovies(
      movies.map((m) => (m.id === id ? { ...m, watched: !m.watched } : m))
    );
  }

  function deleteMovie(id) {
    setMovies(movies.filter((m) => m.id !== id));
  }

  const visible = movies.filter((m) => {
    if (filter === "To watch") return !m.watched;
    if (filter === "Watched") return m.watched;
    return true;
  });
  const left = movies.filter((m) => !m.watched).length;

  return (
    <div className="app">
      <h1>Movie Watchlist</h1>
      <MovieForm onAdd={addMovie} />
      <FilterTabs filter={filter} onChange={setFilter} />
      <ul>
        {visible.map((movie) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            onToggle={toggleMovie}
            onDelete={deleteMovie}
          />
        ))}
      </ul>
      <p>{left} left to watch</p>
    </div>
  );
}

export default App;
