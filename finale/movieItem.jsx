function MovieItem({ movie, onToggle, onDelete }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={movie.watched}
        onChange={() => onToggle(movie.id)}
      />
      <span className={movie.watched ? "done" : ""}>{movie.title}</span>
      <button onClick={() => onDelete(movie.id)}>Delete</button>
    </li>
  );
}

export default MovieItem;
