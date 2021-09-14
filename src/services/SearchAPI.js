import axios from "axios";

const url =
  "https://api.themoviedb.org/3/search/movie?api_key=51695a473e0471ff2582f84f2aaa5cf5&query=";

const get = async (endpoint) => {
  const response = await axios.get(url + endpoint);

  return {
    results: response.data,
  };
};
export const getSearch = async (prop) => {
  const endpoint = `${prop}`;
  return get(endpoint);
};

//eslint-disable-next-line
export default {
  getSearch,
};
