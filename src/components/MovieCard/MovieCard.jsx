import { DEF_PATH, DEF_IMG } from 'defaultImages/defaultImages';
import { Card, Img, MovieTitle, Heading, Text } from './MovieCard.styled';
import PropTypes from 'prop-types';
const MovieCard = ({ movie }) => {
  const { title, vote_average, poster_path, overview, genres, release_date } =
    movie;
  return (
    <Card>
      <Img src={poster_path ? DEF_PATH + poster_path : DEF_IMG} alt={title} />
      <div>
        <MovieTitle>
          {title} ({release_date.slice(0, 4)})
        </MovieTitle>
        <Text>User Score: {Math.round(vote_average * 10)}%</Text>
        <Heading>Owerview</Heading>
        <Text>{overview}</Text>
        <Heading>Genres</Heading>
        <Text>{genres.map(genre => genre.name).join(', ')}</Text>
      </div>
    </Card>
  );
};
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
    release_date: PropTypes.string.isRequired,
  }),
};
export default MovieCard;
