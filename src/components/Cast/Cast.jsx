import { DEF_PATH, NO_PHOTO } from 'defaultImages/defaultImages';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import { List, ListItem, Wrapper, Img } from './Cast.styled';
import { Box } from 'components/Box';
import PropTypes from 'prop-types';
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
      {cast.length !== 0 ? (
        <List>
          {cast.map(({ name, profile_path, id, character }) => {
            return (
              <ListItem key={id}>
                <div>
                  <Img
                    src={profile_path ? DEF_PATH + profile_path : NO_PHOTO}
                    alt={name}
                  />
                  <Wrapper>
                    <Box as="p" textAlign="center">
                      {name}
                    </Box>
                    <Box as="p" textAlign="center">
                      Character: {character}
                    </Box>
                  </Wrapper>
                </div>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <p>We don't have any information here</p>
      )}
    </Box>
  );
};
Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
      id: PropTypes.number.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};
export default Cast;
