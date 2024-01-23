import { ImageBackground } from 'react-native';
import { H1, Image, Main, Paragraph, ScrollView, Text, YStack } from 'tamagui';
import { MediaType } from '~/intefaces/api-results';
import { useGetMovieDetails } from '~/react-query/queries';

const DetailsPage = ({ id, mediaType }: { id: string; mediaType: MediaType }) => {
  const details = useGetMovieDetails(+id, mediaType);

  return (
    <Main>
      <ScrollView>
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/w400/${details.data?.backdrop_path}`,
          }}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w400/${details.data?.poster_path}`,
            }}
            width={150}
            height={250}
            mx={20}
            my={40}
            borderRadius={6}
          />
        </ImageBackground>

        <YStack p={10} animation="lazy" enterStyle={{ opacity: 0, y: 10 }}>
          <H1 color="$blue8">
            {details.data?.title || details.data?.name}{' '}
            <Text fontSize={14}>
              (
              {new Date(
                details.data?.release_date || details.data?.first_air_date || ''
              ).getFullYear() || '...'}
              )
            </Text>
          </H1>
          <Paragraph theme="alt2">{details.data?.tagline}</Paragraph>
          <Text>{details.data?.overview}</Text>
        </YStack>
      </ScrollView>
    </Main>
  );
};

export default DetailsPage;
