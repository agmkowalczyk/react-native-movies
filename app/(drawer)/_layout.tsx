import { Ionicons } from '@expo/vector-icons';
import Drawer from 'expo-router/drawer';
import { useTheme } from 'tamagui';

const Layout = () => {
  const theme = useTheme();

  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerHideStatusBarOnOpen: true,
        drawerActiveBackgroundColor: theme.blue7.get(),
        drawerActiveTintColor: '#fff',
        drawerLabelStyle: { marginLeft: -20 },
      }}>
      <Drawer.Screen
        name="home"
        options={{
          title: 'Movies',
          headerShown: false,
          drawerIcon: ({ color, size }) => <Ionicons name="ios-home" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="favorites"
        options={{
          title: 'My Favorites',
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default Layout;
