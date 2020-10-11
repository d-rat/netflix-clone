import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const APIKEY = "29b19bd86368ad87904399f5f30c6a6a";

const requests = {
  fetchTrendingMovie: `/trending/movie/day?api_key=${APIKEY}`,
  fetchToprated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchAction: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&with_genres=28`,
  fetchComedy: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&with_genres=35`,
  fetchCrime: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&with_genres=80`,
  fetchHorror: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&with_genres=27`,
  fetchRomance: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&with_genres=10749`,
};

export default requests;
export { APIKEY, instance };

