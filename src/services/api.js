import Axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a56dfce00590e00de6e7abfd96a9065d';

export const fetchTrending = async () => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });
  try {
    const response = await Axios.get('trending/movie/day', params);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>

export const fetchSearchMovies = async query => {
  const params = new URLSearchParams({
    language: 'en-US',
    query,
    page: 1,
  });
  try {
    const response = await Axios.get('search/movie', params);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
