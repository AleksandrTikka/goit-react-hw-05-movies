import { useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieDetails } from 'services/api';
import MovieCard from 'components/MovieCard';
const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    async function getMovieDetails() {
      try {
        const response = await fetchMovieDetails(movieId);
        setMovie(response);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieDetails();
  }, [movieId]);
  if (!movie) {
    return null;
  }

  return (
    <div>
      (
      <div>
        <MovieCard movie={movie} />
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast">{movie.cast}</Link>
            </li>
            <li>
              <Link to="review">{movie.review}</Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
      )
    </div>
  );
};
export default MovieDetails;
