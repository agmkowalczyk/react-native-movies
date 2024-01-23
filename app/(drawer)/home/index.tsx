import { Link } from 'expo-router';
import { View, Text } from 'react-native';
import { Card } from 'tamagui';
import { Title } from '~/tamagui.config';

const Home = () => {
  return (
    <View>
      <Title>Movies</Title>
      <Link href="/(drawer)/home/movie/111" asChild>
        <Text>movie 111</Text>
      </Link>
      <Card>
        <Card.Header>
          <Text>Header</Text>
        </Card.Header>
        <Card.Footer />
        <Card.Background />
      </Card>
    </View>
  );
};

export default Home;
