import { MediaType, ResultDetails, TrendingResult } from '~/intefaces/api-results';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const url = 'https://api.themoviedb.org/3';
const language = 'language=en-US';

export const getTrending = async (page: number = 1): Promise<TrendingResult> => {
  const response = await fetch(
    `${url}/trending/movie/day?${language}&api_key=${API_KEY}&page=${page}`
  );

  const data = await response.json();
  return data;
};

export const getSearchResults = async (query: string): Promise<TrendingResult> => {
  const response = await fetch(
    `${url}/search/multi?${language}&api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );

  const data = await response.json();
  return data;
};

export const getMovieDetails = async (id: number, type: MediaType): Promise<ResultDetails> => {
  const response = await fetch(`${url}/${type}/${id}?${language}&api_key=${API_KEY}`);

  const data = await response.json();
  return data;
};
