import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieDetails } from 'services/api';
import MovieCard from 'components/MovieCard';
const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
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
  const handleSubmit = () => {
    navigate('/movies', { replace: true });
  };

  return (
    <div>
      <button type="button" onClick={handleSubmit}>
        Go back
      </button>
      <div>
        <MovieCard movie={movie} />
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
export default MovieDetails;
