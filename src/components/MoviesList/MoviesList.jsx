import MoviesItem from 'components/MoviesItem';
import { Wrapper, List } from './MovieList.styled';
import PropTypes from 'prop-types';
const MoviesList = ({ movies }) => {
  return (
    <Wrapper>
      <List>
        {movies.map(movie => (
          <MoviesItem movie={movie} key={movie.id} />
        ))}
      </List>
    </Wrapper>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
export default MoviesList;
