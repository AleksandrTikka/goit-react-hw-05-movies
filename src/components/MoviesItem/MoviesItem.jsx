import { NavLink, useLocation } from 'react-router-dom';
import { DEF_PATH, DEF_IMG } from 'defaultImages/defaultImages';
import { Item, Img, Title } from './MovieItem.styled';
import PropTypes from 'prop-types';
const MoviesItem = ({ movie }) => {
  const location = useLocation();
  const { id, poster_path, title } = movie;
  return (
    <>
      <Item>
        <NavLink to={`/movies/${id}`} state={{ from: location }}>
          <Img
            src={poster_path ? DEF_PATH + poster_path : DEF_IMG}
            alt={title}
          />

          <Title>{title}</Title>
        </NavLink>
      </Item>
    </>
  );
};
MoviesItem.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};
export default MoviesItem;
