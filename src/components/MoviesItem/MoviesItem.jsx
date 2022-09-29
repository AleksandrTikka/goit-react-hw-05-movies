import { Link } from 'react-router-dom';
import MovieCard from 'components/MovieCard';

const MoviesItem = ({ movie }) => {
  return (
    <>
      <li>
        <Link to={`/movies/${movie.id}`}>
          <MovieCard movie={movie} />
        </Link>
      </li>
    </>
  );
};
export default MoviesItem;
