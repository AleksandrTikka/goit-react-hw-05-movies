import { useParams, Link, Outlet } from 'react-router-dom';
const MovieDetails = () => {
  const { movieId } = useParams();
  return (
    <div>
      <img src={movieId.poster_path} alt="" />
      <h2>Название фильма</h2>
      <div>рейнтинг фильма</div>
      <div>описание фильма</div>
      <div>жанр фильма</div>
      Now you can see movie with id - {movieId}
      <ul>
        <li>
          <Link to="cast">{movieId.cast}</Link>
        </li>
        <li>
          <Link to="review">{movieId.review}</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default MovieDetails;
