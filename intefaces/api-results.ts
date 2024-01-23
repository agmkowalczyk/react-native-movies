export interface TrendingResult {
  page: number;
  results: ResultItem[];
  total_pages: number;
  total_results: number;
}

export interface ResultItem {
  adult: boolean;
  backdrop_path: string;
  id: number;
  first_air_date: string;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  name: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum MediaType {
  Movie = 'movie',
  Tv = 'tv',
}

export interface ResultDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: any;
  budget: number;
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  name: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Productioncompany[];
  production_countries: Productioncountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Spokenlanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Spokenlanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface Productioncountry {
  iso_3166_1: string;
  name: string;
}

interface Productioncompany {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
}

interface Genre {
  id: number;
  name: string;
}