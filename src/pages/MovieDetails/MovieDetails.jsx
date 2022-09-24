import { useParams } from 'react-router-dom';
const MovieDetails = () => {
  const { movieId } = useParams();
  return <div>Now you can see movie with id - {movieId}</div>;
};
export default MovieDetails;
