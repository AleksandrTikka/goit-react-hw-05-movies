const MovieCard = ({ movie }) => {
  const { title, vote_average, poster_path, overview, genre_ids } = movie;
  return (
    <>
      <img src={poster_path} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>User Score:{vote_average}</p>
        <h3>Owerview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genre_ids}</p>
      </div>
    </>
  );
};
export default MovieCard;
