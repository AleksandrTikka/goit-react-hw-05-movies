import { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar';
import MoviesList from 'components/MoviesList';
import { fetchSearchMovies } from 'services/api';
import Loader from 'components/Loader';
import { useSearchParams } from 'react-router-dom';
import { Box } from 'components/Box';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const newQuery = query => {
    const newParams = query !== '' ? { query } : {};
    setSearchParams(newParams);
  };

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    async function getMomies() {
      try {
        setStatus('pending');
        const response = await fetchSearchMovies(movieName);
        setMovies(response);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        console.log(error);
      }
    }
    getMomies();
  }, [movieName]);

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
    newQuery(input.trim());
  };

  return (
    <Box mx="auto">
      <Searchbar getSearchQuery={handleSearchQuery} />

      {movies.length > 0 && <MoviesList movies={movies} />}
      {status === 'pending' && <Loader />}
    </Box>
  );
};
export default Movies;
