import { NavLink, useLocation } from 'react-router-dom';
// import MovieCard from 'components/MovieCard';

const MoviesItem = ({ movie }) => {
  const location = useLocation();
  return (
    <>
      <li>
        <NavLink to={`/movies/${movie.id}`} state={{ data: location }}>
          {/* <MovieCard movie={movie} /> */}
          <img src={movie.poster_path} alt={movie.title} />
          <h3>{movie.title}</h3>
        </NavLink>
      </li>
    </>
  );
};
export default MoviesItem;
