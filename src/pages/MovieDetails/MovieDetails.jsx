import {
  useParams,
  NavLink,
  Outlet,
  useLocation,
  //   useNavigate,
} from 'react-router-dom';
import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { fetchMovieDetails } from 'services/api';
import MovieCard from 'components/MovieCard';
import Loader from 'components/Loader';
import { HiArrowSmLeft } from 'react-icons/hi';
import { BackButton } from './MovieDetails.styled';
const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  //   const navigate = useNavigate();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
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
  //   const handleSubmit = () => {
  //     navigate({ backLinkHref }, { replace: true });
  //   };

  return (
    <div>
      {/* <button type="button" onClick={handleSubmit}>
        Go back
      </button> */}
      <BackButton to={backLinkHref}>
        <HiArrowSmLeft size="16px" />
        Go back
      </BackButton>
      <div>
        <MovieCard movie={movie} />
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
export default MovieDetails;
