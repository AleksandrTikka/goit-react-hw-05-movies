import { Link } from 'react-router-dom';
// import MovieCard from 'components/MovieCard';

const MoviesItem = ({ movie }) => {
  return (
    <>
      <li>
        <Link to={`/movies/${movie.id}`}>
          {/* <MovieCard movie={movie} /> */}
          <img src={movie.poster_path} alt={movie.title} />
          <h3>{movie.title}</h3>
        </Link>
      </li>
    </>
  );
};
export default MoviesItem;
