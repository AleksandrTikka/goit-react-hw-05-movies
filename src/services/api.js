import Axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['a56dfce00590e00de6e7abfd96a9065d'] = AUTH_TOKEN;

export const fetchTrending = async () => {
  try {
    const response = await Axios.get('trending/movie/day');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>

export const fetchSearchMovies = async query => {
  try {
    const params = new URLSearchParams({
      language: 'en-US',
      query: 'query',
      page: 1,
    });
    const response = await Axios.get('search/movie', params);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
