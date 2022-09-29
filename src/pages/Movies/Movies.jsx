import { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar';
import MoviesList from 'components/MoviesList';
import { fetchSearchMovies } from 'services/api';
import Loader from 'components/Loader';
// import { NavLink, Outlet } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getMomies() {
      try {
        setStatus('pending');
        const response = await fetchSearchMovies(query);
        setMovies(response);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        console.log(error);
      }
    }
    getMomies();
  }, [query]);
  const handleSearchQuery = input => {
    setQuery(input.trim());
  };

  return (
    <div>
      <Searchbar getSearchQuery={handleSearchQuery} />

      {movies.length > 0 && (
        //       (
        //   <ul>
        //     {movies.map(movie => {
        //       return (
        //         <li key={movie.id}>
        //           <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
        //           <Outlet />
        //         </li>
        //       );
        //     })}
        //   </ul>
        // )

        <MoviesList movies={movies} />
      )}
      {status === 'pending' && <Loader />}
    </div>
  );
};
export default Movies;
