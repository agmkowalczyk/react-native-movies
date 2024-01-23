import { useQuery } from '@tanstack/react-query';
import { MediaType } from '~/intefaces/api-results';
import { getMovieDetails, getSearchResults, getTrending } from '~/services/api';

export const useGetTrendingMovies = (page: number) => {
  return useQuery({
    queryKey: ['trending', page],
    queryFn: () => getTrending(page),
  });
};

export const useGetSearchMovies = (query: string) => {
  return useQuery({
    queryKey: ['search', query],
    queryFn: () => getSearchResults(query),
    enabled: query.length > 0,
  });
};

export const useGetMovieDetails = (id: number, type: MediaType) => {
  return useQuery({
    queryKey: ['details', id],
    queryFn: () => getMovieDetails(id, type),
    enabled: !!id,
  });
};