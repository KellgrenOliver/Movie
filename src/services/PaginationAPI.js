import axios from "axios";

// Set the url
const url =
  "https://api.themoviedb.org/3/discover/movie?api_key=51695a473e0471ff2582f84f2aaa5cf5&with_genres=";

const get = async (endpoint) => {
  const response = await axios.get(url + endpoint);

  return {
    results: response.data,
  };
};

// Endpoint to get all pages from a genre
export const getPages = async (prop, page = 1) => {
  const endpoint = `${prop}&page=${page}`;
  return get(endpoint);
};

//eslint-disable-next-line
export default {
  getPages,
};
