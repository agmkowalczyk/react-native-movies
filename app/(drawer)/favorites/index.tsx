import { Link } from 'expo-router';
import { StatusBar } from 'react-native';
import { useMMKVObject } from 'react-native-mmkv';
import Animated from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItem, ScrollView } from 'tamagui';
import { MediaType } from '~/intefaces/api-results';
import { Favorite } from '~/intefaces/favorites';
import { Main } from '~/tamagui.config';

const Favorites = () => {
  const [favorites, setFavorites] = useMMKVObject<Favorite[]>('favorites');

  return (
    <SafeAreaView style={{ paddingTop: (StatusBar.currentHeight || 0)+ 10  }}>
      <Main>
        <ScrollView>
          {favorites?.map((fav) => (
            <Link
              key={fav.id}
              href={`/(drawer)/favorites/${fav.mediaType as MediaType}/${fav.id}`}
              asChild>
              <ListItem
                theme="alt2"
                title={fav.name}
                size="$5"
                icon={() => (
                  <Animated.Image
                    source={{ uri: `https://image.tmdb.org/t/p/w400${fav.thumb}` }}
                    style={{ width: 50, height: 50 }}
                    sharedTransitionTag={`${fav.mediaType}-${fav.id}`}
                  />
                )}
              />
            </Link>
          ))}
        </ScrollView>
      </Main>
    </SafeAreaView>
  );
};

export default Favorites;
