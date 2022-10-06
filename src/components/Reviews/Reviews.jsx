import { Box } from 'components/Box';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import { List, Author, Item } from './Reviews.styled';
import PropTypes from 'prop-types';
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    async function getMovieReviews() {
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieReviews();
  }, [movieId]);

  return (
    <Box pt="4">
      {reviews.length !== 0 ? (
        <List>
          {reviews.map(({ id, author, content }) => {
            return (
              <Item key={id}>
                <Author>Author: {author}</Author>
                <p>{content}</p>
              </Item>
            );
          })}
        </List>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </Box>
  );
};
Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
export default Reviews;
