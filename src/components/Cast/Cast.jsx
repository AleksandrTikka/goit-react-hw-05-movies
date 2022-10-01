import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    async function getMovieCast() {
      try {
        const response = await fetchMovieCast(movieId);
        setCast(response);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieCast();
  }, [movieId]);
  if (!cast) {
    return;
  }

  return (
    <div>
      <ul>
        {cast.map(({ name, profile_path, id, character }) => {
          return (
            <li key={id}>
              <div>
                <img src={profile_path} alt={name} />
                <p>{name}</p>
                <p>Character: {character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Cast;
