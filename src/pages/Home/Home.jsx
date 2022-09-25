import { useState, useEffect } from 'react';
import { fetchTrending } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const response = await fetchTrending();
      console.log(response);
      setMovies(response);
    }
    getMovies();
  }, []);

  return (
    <div>
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => {
            return <li key={movie.id}>{movie.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};
export default Home;
