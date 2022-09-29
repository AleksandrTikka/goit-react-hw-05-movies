import MoviesItem from 'components/MoviesItem';
const MoviesList = ({ movies }) => {
  return (
    <>
      <ul>
        {movies.map(movie => (
          <MoviesItem movie={movie} key={movie.id} />
        ))}
      </ul>
    </>
  );
};
export default MoviesList;
