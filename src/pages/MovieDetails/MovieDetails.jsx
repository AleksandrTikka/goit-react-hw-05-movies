import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchMovieDetails } from 'services/api';
const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    // if (!movie) {
    //   return null;
    // }
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

  //
  return (
    <div>
      {movie && (
        <div>
          <img src={movie.poster_path} alt="" />
          <h2>{movie.title}</h2>
          <div>{movie.vote_average}</div>
          <div>{movie.overview}</div>
          <div>жанр фильма</div>
          Now you can see movie with id - {movieId}
          {/* <ul>
            <li>
              <Link to="cast">{movie.cast}</Link>
            </li>
            <li>
              <Link to="review">{movie.review}</Link>
            </li>
          </ul>
          <Outlet /> */}
        </div>
      )}
    </div>
  );
};
export default MovieDetails;
