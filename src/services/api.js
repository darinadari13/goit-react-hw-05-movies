import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '25e4eeadea4cf520d825a9bf9fd0e85d';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}trending/movie/day`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data.results;
};

export const getMovieByQuery = async query => {
  const { data } = await axios.get(`${BASE_URL}search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });

  return data.results;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(`${BASE_URL}movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  
  return data;
};

export const getMovieCredits = async movieId => {
  const { data } = await axios.get(`${BASE_URL}movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data.cast;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(`${BASE_URL}movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data.results;
};
