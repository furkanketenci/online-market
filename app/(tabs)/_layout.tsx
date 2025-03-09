import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '.';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import ProfileScreen from './profile';
import FavoritesScreen from './favorites';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import BoxScreen from './box';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export default function TabLayout() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName='HomeScreen'
        screenOptions={{
          tabBarActiveTintColor: "#6CC51D",
          tabBarInactiveTintColor: "#868889",
          tabBarStyle: {
            height: 50,
            paddingBottom: 5,
            paddingTop: 5,
          },
        }}
      >
        <Tab.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarPosition: 'bottom',
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => (
              <Ionicons name="home-outline" size={24} color={focused ? "#6CC51D" : "#868889"} />
            ),
          }}
        >
        </Tab.Screen>
        <Tab.Screen
          name='ProfileScreen'
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarPosition: 'bottom',
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => (
              <AntDesign name="user" size={24} color={focused ? "#6CC51D" : "#868889"} />
            )
          }}
        >
        </Tab.Screen>
        <Tab.Screen
          name='FavoritesScreen'
          component={FavoritesScreen}
          options={{
            headerShown: false,
            tabBarPosition: 'bottom',
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => (
              <MaterialIcons name="favorite-outline" size={24} color={focused ? "#6CC51D" : "#868889"}
              />
            )
          }}
        >
        </Tab.Screen>
        <Tab.Screen
          name='BoxScreen'
          component={BoxScreen}
          options={{
            headerShown: false,
            tabBarPosition: 'bottom',
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => (
              <SimpleLineIcons name="handbag" size={24} color={focused ? "#6CC51D" : "#868889"}
              />
            )
          }}
        >
        </Tab.Screen>
      </Tab.Navigator>
    </SafeAreaView>
  );
}
