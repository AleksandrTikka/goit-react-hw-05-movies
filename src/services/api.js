import Axios from 'axios';

Axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a56dfce00590e00de6e7abfd96a9065d';

export const fetchTrending = async () => {
  try {
    const response = await Axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

// https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>

export const fetchSearchMovies = async query => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    query,
  });
  try {
    const response = await Axios.get(`search/movie?${params}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const response = await Axios.get(`movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieCast = async movieId => {
  try {
    const response = await Axios.get(`movie/${movieId}/credits?${API_KEY}`);
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieReview = async movieId => {
  try {
    const response = Axios.get(`movie/${movieId}/review?${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
