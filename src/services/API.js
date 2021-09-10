import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const get = async (endpoint) => {
  const response = await axios.get(endpoint);

  return {
    results: response.data,
  };
};

export const getPopularMovies = async () => {
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

export const getActorsFromMovie = async (id) => {
  return await get(
    `/movie/${id}/casts?api_key=51695a473e0471ff2582f84f2aaa5cf5`
  );
};

export const getActor = async (id) => {
  return await get(
    `/person/${id}?api_key=51695a473e0471ff2582f84f2aaa5cf5&append_to_response=combined_credits`
  );
};

export const getMoviesByGenre = async (prop, page = null) => {
  return await get(
    `/discover/movie/?api_key=51695a473e0471ff2582f84f2aaa5cf5&with_genres=${prop}&page=${page}`
  );
};

export const getPosts = async (prop, page = null) => {
  const endpoint = `${prop}?page=${page}`;
  return get(endpoint);
};

//eslint-disable-next-line
export default {
  getPopularMovies,
  getTopRatedMovies,
  getGenres,
  getMovie,
  getMoviesByGenre,
  getLatestMovies,
  getActorsFromMovie,
  getActor,
  getPosts,
};
