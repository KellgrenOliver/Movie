import axios from "axios";

const url =
  "https://api.themoviedb.org/3/discover/movie/?api_key=51695a473e0471ff2582f84f2aaa5cf5&with_genres=";

const get = async (endpoint) => {
  const response = await axios.get(url + endpoint);

  console.log(response);
  return {
    results: response.data,
  };
};
export const getPages = async (prop, page = null) => {
  const endpoint = `${prop}&page=${page}`;
  return get(endpoint);
};

//eslint-disable-next-line
export default {
  getPages,
};
