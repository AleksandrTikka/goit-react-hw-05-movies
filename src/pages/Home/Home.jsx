import MoviesList from 'components/MoviesList';
import { useState, useEffect } from 'react';
import { fetchTrending } from 'services/api';
import { Box } from 'components/Box';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getTrending() {
      const response = await fetchTrending();
      console.log(response);
      setMovies(response);
    }
    getTrending();
  }, []);

  return (
    <div>
      <Box as="h2" textAlign="center" mb="4">
        Trending today
      </Box>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};
export default Home;
