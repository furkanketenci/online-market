import { createStackNavigator } from '@react-navigation/stack';
import TabLayout from './(tabs)/_layout';
import Register from '@/components/Register';
import Login from '@/components/Login';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { store } from "./redux/store";
import { Provider } from 'react-redux'

export default function RootLayout() {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator screenOptions={
          {
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            )
          }
        }>
          <Stack.Screen
            name="tabLayout"
            component={TabLayout}
            options={{ title: '', headerShown: false, headerStatusBarHeight: 0, }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={
              {
                headerShown: true,
                title: '',
                headerTransparent: true,
                headerStatusBarHeight: 0,
              }
            }
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={
              {
                headerShown: true,
                title: '',
                headerTransparent: true,
                headerStatusBarHeight: 0,
              }
            }
          />
        </Stack.Navigator>
      </SafeAreaView>
    </Provider>
  );
}
