import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const get = async (endpoint) => {
  const response = await axios.get(endpoint);

  return {
    results: response.data,
  };
};

export const getMovies = async () => {
  return await get(`/movie/popular/?api_key=51695a473e0471ff2582f84f2aaa5cf5`);
};

export const getTopRatedMovies = async () => {
  return await get(`/movie/top_rated?api_key=51695a473e0471ff2582f84f2aaa5cf5`);
};

export const getGenres = async () => {
  return await get(
    `/genre/movie/list?api_key=51695a473e0471ff2582f84f2aaa5cf5`
  );
};

export const getLatestMovies = async () => {
  return await get(
    `/movie/now_playing?api_key=51695a473e0471ff2582f84f2aaa5cf5`
  );
};

export const getMovie = async (id) => {
  return await get(`/movie/${id}?api_key=51695a473e0471ff2582f84f2aaa5cf5`);
};

export const getMoviesByGenre = async (id) => {
  return await get(
    `/discover/movie/?api_key=51695a473e0471ff2582f84f2aaa5cf5&with_genres=${id}`
  );
};

//eslint-disable-next-line
export default {
  getMovies,
  getTopRatedMovies,
  getGenres,
  getMovie,
  getMoviesByGenre,
  getLatestMovies,
};
