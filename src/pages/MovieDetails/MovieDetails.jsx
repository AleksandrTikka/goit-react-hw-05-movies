import {
  useParams,
  //   NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { Box } from 'components/Box';
import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { fetchMovieDetails } from 'services/api';
import MovieCard from 'components/MovieCard';
import Loader from 'components/Loader';
import { HiArrowSmLeft } from 'react-icons/hi';
import {
  BackButton,
  SecondaryInfo,
  Heading,
  InfoLink,
} from './MovieDetails.styled';
const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  useEffect(() => {
    async function getMovieDetails() {
      try {
        setStatus('pending');
        const response = await fetchMovieDetails(movieId);
        setMovie(response);
        setStatus('resolved');
      } catch (error) {
        console.log(error);
        setStatus('rejected');
      }
    }
    getMovieDetails();
  }, [movieId]);

  const handleSubmit = () => {
    navigate(backLinkHref, { replace: true });
  };

  return (
    <Box as="div" pt="4">
      <BackButton type="button" onClick={handleSubmit}>
        <HiArrowSmLeft size="16px" />
        Go back
      </BackButton>
      {/* <BackButton to={backLinkHref}>
        <HiArrowSmLeft size="16px" />
        Go back
      </BackButton> */}
      {status === 'pending' && <Loader />}
      {movie && (
        <div>
          <MovieCard movie={movie} />
          <SecondaryInfo>
            <Heading>Additional information</Heading>
            <ul>
              <li>
                <InfoLink to="cast">Cast</InfoLink>
              </li>
              <li>
                <InfoLink to="reviews">Reviews</InfoLink>
              </li>
            </ul>
          </SecondaryInfo>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      )}
      {!movie ||
        (status === 'rejected' && <h2>Sorry, information not found.</h2>)}
    </Box>
  );
};
export default MovieDetails;
