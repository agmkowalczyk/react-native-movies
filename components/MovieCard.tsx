import { Link } from 'expo-router';
import Animated from 'react-native-reanimated';
import { Card, Paragraph, Text, YStack } from 'tamagui';
import { ResultItem } from '~/intefaces/api-results';

const MovieCard = ({ movie }: { movie: ResultItem }) => {
  const type = movie.media_type === 'movie' ? 'movie' : 'tv'

  return (
    <Link href={`/(drawer)/home/${type}/${movie.id}`} asChild>
      <Card
        elevate
        width={150}
        height={270}
        scale={0.9}
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.975 }}
        animation={'bouncy'}>
        <Card.Header p={0}>
          <Animated.Image
            source={{ uri: `https://image.tmdb.org/t/p/w200/${movie.poster_path}` }}
            alt={movie.title || movie.name}
            style={{ width: 150, height: 200 }}
            sharedTransitionTag={`${type}-${movie.id}`}
          />
        </Card.Header>
        <Card.Footer p={8}>
          <YStack>
            <Text color="lightblue" fontSize={14} numberOfLines={2}>
              {movie.title || movie.name}
            </Text>
            <Paragraph theme="alt2">
              {new Date(movie.release_date || movie.first_air_date).getFullYear() || '...'}
            </Paragraph>
          </YStack>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default MovieCard;
