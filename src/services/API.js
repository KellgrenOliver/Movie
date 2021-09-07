import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const get = async (endpoint) => {
  const response = await axios.get(endpoint);

  console.log("Res" + response);
  console.log("Res.data" + response.data);
  return response.data;
};

export const getMoviesById = async (id) => {
  return await get(`/movie/${id}?api_key=51695a473e0471ff2582f84f2aaa5cf5`);
};

//eslint-disable-next-line
export default {
  getMoviesById,
};
