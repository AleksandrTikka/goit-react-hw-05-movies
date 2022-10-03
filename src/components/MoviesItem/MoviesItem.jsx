import { NavLink, useLocation } from 'react-router-dom';
import { DEF_PATH, DEF_IMG } from 'defaultImages/defaultImages';

const MoviesItem = ({ movie }) => {
  const location = useLocation();
  const { id, poster_path, title } = movie;
  return (
    <>
      <li>
        <NavLink to={`/movies/${id}`} state={{ from: location }}>
          <img
            src={poster_path ? DEF_PATH + poster_path : DEF_IMG}
            alt={title}
          />
          <h3>{title}</h3>
        </NavLink>
      </li>
    </>
  );
};
export default MoviesItem;
