import { DEF_PATH, DEF_IMG } from 'defaultImages/defaultImages';
const MovieCard = ({ movie }) => {
  const { title, vote_average, poster_path, overview, genres, release_date } =
    movie;
  return (
    <>
      <img src={poster_path ? DEF_PATH + poster_path : DEF_IMG} alt={title} />
      <div>
        <h2>
          {title} ({release_date.slice(0, 4)})
        </h2>
        <p>User Score:{vote_average}</p>
        <h3>Owerview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(genre => genre.name)}</p>
      </div>
    </>
  );
};
export default MovieCard;
