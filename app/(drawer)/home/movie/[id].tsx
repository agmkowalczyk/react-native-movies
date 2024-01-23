import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>Page {id}</Text>
    </View>
  );
};

export default Page;
