import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { fetchTrending } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
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
      <h2>Trending today</h2>
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </NavLink>
                <Outlet />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default Home;
