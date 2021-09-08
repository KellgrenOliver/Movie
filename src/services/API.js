import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const get = async (endpoint) => {
  const response = await axios.get(endpoint);

  return {
    results: response.data,
    moviedata: response.data.results,
  };
};

export const getMovies = async (page) => {
  return await get(
    `/discover/movie/?api_key=51695a473e0471ff2582f84f2aaa5cf5&page=${page}`
  );
};

export const getMovie = async (id) => {
  return await get(`/movie/${id}?api_key=51695a473e0471ff2582f84f2aaa5cf5`);
};

//eslint-disable-next-line
export default {
  getMovies,
  getMovie,
};
