import { DEF_PATH, NO_PHOTO } from 'defaultImages/defaultImages';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import { List, ListItem, Img } from './Cast.styled';
import { Box } from 'components/Box';
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
    <Box p="4">
      <List>
        {cast.map(({ name, profile_path, id, character }) => {
          return (
            <ListItem key={id}>
              <div>
                <Box
                  as="div"
                  display="flex"
                  justifyContent="center"
                  height="300px"
                  maxWidth="200px"
                  overflow="hidden"
                >
                  <Img
                    src={profile_path ? DEF_PATH + profile_path : NO_PHOTO}
                    alt={name}
                  />
                </Box>
                <Box as="p" textAlign="center">
                  {name}
                </Box>
                <Box as="p" textAlign="center">
                  Character: {character}
                </Box>
              </div>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
export default Cast;
