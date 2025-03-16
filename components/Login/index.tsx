import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Fontisto from '@expo/vector-icons/Fontisto';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Colors from "@/constants/Colors";
import { useSelector, useDispatch } from "react-redux";
import { setEmail, setIsLoading, setPassword } from "@/app/redux/userSlice";

type RootStackParamList = {
    Register: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

const Login = () => {
    const navigation = useNavigation<NavigationProp>();
    const [isShowPassword, setIsShowPassword] = useState(false);

    // userSlice içerisindeki verilerin okunması start
    const { email, password, isLoading } = useSelector((state: any) => state.user);
    console.log('email', email)
    console.log('password', password)
    console.log('isLoading', isLoading)
    // userSlice içerisindeki verilerin okunması end

    // userSlice içeirisnde reducer yapılarını kullanma veya veri gönderme start
    const dispatch = useDispatch()
    // userSlice içeirisnde reducer yapılarını kullanma veya veri gönderme end


    const showPasswordToggle = () => {
        setIsShowPassword(!isShowPassword);
    }
    return (
        <>
            <View style={styles.loginContainer}>
                <View style={styles.loginTopArea}>
                    <Text style={styles.firstText}>Welcome back!</Text>
                    <Text style={styles.secondText}>Sign in to your account</Text>

                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputs}
                        inputMode="email"
                        placeholder="Email Address"
                        placeholderTextColor={Colors.textColor}
                        keyboardType="email-address"
                        autoFocus
                        onChangeText={(text) => dispatch(setEmail(text))}

                    />
                    <View style={styles.messageIcon}><Fontisto name="email" size={21} color={Colors.textColor} /></View>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputs}
                        secureTextEntry={!isShowPassword}
                        placeholder="**************"
                        placeholderTextColor={Colors.textColor}
                        onChangeText={(password) => dispatch(setPassword(password))}
                    />
                    <View style={styles.messageIcon}><Feather name="lock" size={21} color={Colors.textColor} /></View>
                    <Pressable
                        style={styles.eyeIcon}
                        onPress={showPasswordToggle}
                    >
                        {isShowPassword ?
                            <Ionicons name="eye-off-outline" size={21} color={Colors.textColor} />
                            : <Ionicons name="eye-outline" size={21} color={Colors.textColor} />}
                    </Pressable>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => dispatch(isLoading(true))}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>

                <View style={styles.iHaveAccountWrapper}>
                    <Text style={styles.iHaveAccount}>Don’t have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={styles.loginText}>Sign up!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default Login

const styles = StyleSheet.create({
    loginContainer: {
        paddingHorizontal: 17,
        justifyContent: "center",
        flex: 1
    },
    loginTopArea: {
        marginBottom: 26
    },
    firstText: {
        color: "#000000",
        fontSize: 25,
        fontWeight: 700,
        marginBottom: 2,
    },
    secondText: {
        fontSize: 15,
        color: Colors.textColor
    },
    inputContainer: {
        position: "relative",
        alignItems: "center"
    },
    inputs: {
        width: "100%",
        height: 60,
        marginBottom: 5,
        backgroundColor: "#fff",
        paddingLeft: 51,
        color: "#000",
        borderRadius: 5,

    },
    messageIcon: {
        position: "absolute",
        left: 15,
        top: 20
    },
    eyeIcon: {
        position: "absolute",
        right: 15,
        top: 20
    },
    button: {
        width: "100%",
        height: 60,
        marginTop: 17,
        backgroundColor: Colors.primaryDark,
        alignItems: "center",
        justifyContent: "center",

    },
    buttonText: {
        color: Colors.lightBG,
        fontWeight: 700
    },
    iHaveAccountWrapper: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center"
    },
    iHaveAccount: {
        marginTop: 17,
        color: Colors.textColor
    },
    loginText: {
        marginLeft: 8,
        color: Colors.linkColor,
        fontSize: 13,
        fontWeight: 500,
        position: "relative",
        bottom: 2
    }

});
