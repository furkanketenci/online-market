import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '.';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FavoritesScreen from './favorites';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import BoxScreen from './box';
import WelcomeScreen from './welcome';
import Colors from '@/constants/Colors';

const Tab = createBottomTabNavigator();

export default function TabLayout() {

  return (
    <Tab.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        tabBarActiveTintColor: Colors.primaryDark,
        tabBarInactiveTintColor: Colors.textColor,
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
            <Ionicons name="home-outline" size={24} color={focused ? Colors.primaryDark : Colors.textColor} />
          ),
        }}
      >
      </Tab.Screen>
      <Tab.Screen
        name='Welcome'
        component={WelcomeScreen}
        options={{
          headerShown: false,
          tabBarPosition: 'bottom',
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <AntDesign name="user" size={24} color={focused ? Colors.primaryDark : Colors.textColor} />
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
            <MaterialIcons name="favorite-outline" size={24} color={focused ? Colors.primaryDark : Colors.textColor}
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
            <SimpleLineIcons name="handbag" size={24} color={focused ? Colors.primaryDark : Colors.textColor}
            />
          )
        }}
      >
      </Tab.Screen>
    </Tab.Navigator>
  );
}
