import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { ImageBackground } from 'react-native';
import { useMMKVBoolean, useMMKVObject } from 'react-native-mmkv';
import Animated from 'react-native-reanimated';
import { Button, H1, Main, Paragraph, ScrollView, Text, YStack, useTheme } from 'tamagui';
import { MediaType } from '~/intefaces/api-results';
import { Favorite } from '~/intefaces/favorites';
import { useGetMovieDetails } from '~/react-query/queries';

const DetailsPage = ({ id, mediaType }: { id: string; mediaType: MediaType }) => {
  const theme = useTheme();
  const [isFavorite, setIsFavorite] = useMMKVBoolean(`${mediaType}-${id}`);
  const [favorites, setFavorites] = useMMKVObject<Favorite[]>('favorites');

  const details = useGetMovieDetails(+id, mediaType);
  const type = mediaType === 'movie' ? 'movie' : 'tv';

  const toggleFavorite = () => {
    // return setFavorites([])
    const current = favorites || [];

    if (!isFavorite) {
      setFavorites([
        ...current,
        {
          id,
          mediaType,
          thumb: details.data?.poster_path!,
          name: details.data?.title || details.data?.name!,
        },
      ]);
    } else {
      setFavorites(current.filter((fav) => fav.id !== id || fav.mediaType !== mediaType));
    }
    setIsFavorite(!isFavorite)
  };

  return (
    <Main>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Button unstyled onPress={toggleFavorite}>
              <Ionicons
                name={isFavorite ? 'heart' : 'heart-outline'}
                size={26}
                color={theme.blue9.get()}
              />
            </Button>
          ),
        }}
      />
      <ScrollView>
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/w400/${details.data?.backdrop_path}`,
          }}>
          <Animated.Image
            source={{
              uri: `https://image.tmdb.org/t/p/w400/${details.data?.poster_path}`,
            }}
            width={150}
            height={250}
            style={{ marginLeft: 20, marginVertical: 40 }}
            borderRadius={6}
            sharedTransitionTag={`${type}-${id}`}
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
