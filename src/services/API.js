import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const get = async (endpoint) => {
  const response = await axios.get(endpoint);

  console.log(response.data);
  return {
    results: response.data,
    moviedata: response.data.results,
  };
};

export const getMovies = async () => {
  return await get(`/discover/movie/?api_key=51695a473e0471ff2582f84f2aaa5cf5`);
};

//eslint-disable-next-line
export default {
  getMovies,
};
