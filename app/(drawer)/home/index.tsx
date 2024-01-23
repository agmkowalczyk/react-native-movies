import { useState } from 'react';
import { ImageBackground } from 'react-native';
import { Input, ScrollView, Spinner, YStack } from 'tamagui';
import MovieCard from '~/components/MovieCard';
import { useGetSearchMovies, useGetTrendingMovies } from '~/react-query/queries';
import { Container, Title, Main, Subtitle } from '~/tamagui.config';
import useDebouce from '~/utils/useDebounce';

const Home = () => {
  const [searchString, setSearchString] = useState('');
  const deboucedString = useDebouce(searchString, 500);

  const trendingQuery = useGetTrendingMovies(1);
  const searchQuery = useGetSearchMovies(deboucedString);

  const results = searchQuery.data?.results
    ? searchQuery.data?.results
    : trendingQuery.data?.results;

  return (
    <Main>
      <ImageBackground
        source={{
          uri: 'https://scontent.fpoz4-1.fna.fbcdn.net/v/t39.30808-6/300504067_445684367592498_5957156852801815606_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=783fdb&_nc_ohc=jVG8TP6b2RUAX9bgc57&_nc_ht=scontent.fpoz4-1.fna&oh=00_AfAkeGQS27TmJJmQLmKAH46xopeGNOA_SNxHpCl3BN1lPw&oe=65B508C3',
        }}
        style={{ width: '100%', height: 200 }}>
        <Container>
          <YStack>
            <Title color="#fff" enterStyle={{ opacity: 0, scale: 1.5, y: -10 }} animation="quick">
              Movies
            </Title>
            <Input
              placeholder="Search for a movie, tv shows, person..."
              placeholderTextColor="#fff"
              borderWidth={1}
              size="$4"
              value={searchString}
              onChangeText={setSearchString}
            />
          </YStack>
        </Container>
      </ImageBackground>

      <Subtitle color="grey" p={10} enterStyle={{ opacity: 0 }} animation="lazy">
        {searchQuery.data?.results ? 'Search Results' : 'Trending'}
      </Subtitle>

      {(trendingQuery.isLoading || searchQuery.isLoading) && (
        <Spinner size="large" color="$blue10" py={14} />
      )}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        py={40}
        contentContainerStyle={{ gap: 14, paddingLeft: 14 }}>
        {results?.map((item) => <MovieCard key={item.id} movie={item} />)}
      </ScrollView>
    </Main>
  );
};

export default Home;
