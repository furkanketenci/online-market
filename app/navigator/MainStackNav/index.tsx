import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import TabLayout from "@/app/(tabs)/_layout";
import Register from "@/components/Register";
import Login from "@/components/Login";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import WelcomeScreen from "@/app/(tabs)/welcome";

const MainStackNav = () => {
    const Stack = createStackNavigator();
    const navigation = useNavigation();
    const isAuth = useSelector((state: RootState) => state.user.isAuth);
    return (
        <Stack.Navigator
            initialRouteName={isAuth ? "tabLayout" : "Welcome"}
            screenOptions={
                {
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
                            <Ionicons name="arrow-back" size={24} color="black" />
                        </TouchableOpacity>
                    )
                }
            }>
            {
                !isAuth ?
                    <Stack.Screen
                        name="Welcome"
                        component={WelcomeScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                    :
                    null
            }

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
    )
}

export default MainStackNav