import { Alert, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Fontisto from '@expo/vector-icons/Fontisto';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Colors from "@/constants/Colors";
import { useDispatch } from "react-redux";
import { login } from "@/app/redux/userSlice";
import { AppDispatch } from "@/app/redux/store";

type RootStackParamList = {
    Register: undefined;
    tabLayout: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

const Login = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigation = useNavigation<NavigationProp>();
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const showPasswordToggle = () => {
        setIsShowPassword(!isShowPassword);
    }

    const handleSubmit = () => {
        if (email === "" || password === "") {
            Alert.alert("Email or Password cannot be blank!")
        } else {
            dispatch(login({ email: email, password: password })).then((res) => {
                if (res.payload.status === true) {
                    Alert.alert(
                        "Login successful!",
                        "",
                        [
                            {
                                text: "OK",
                                onPress: () => navigation.navigate("tabLayout")
                            }
                        ]
                    )
                } else {
                    Alert.alert("Username or password is incorrect! Please check your information!")
                }
            }).catch(() => {
                Alert.alert("An unexpected error!")
            })
            setEmail("")
            setPassword("")
        }
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
                        value={email}
                        onChangeText={(text) => setEmail(text.toLowerCase())}

                    />
                    <View style={styles.messageIcon}><Fontisto name="email" size={21} color={Colors.textColor} /></View>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputs}
                        secureTextEntry={!isShowPassword}
                        placeholder="**************"
                        placeholderTextColor={Colors.textColor}
                        value={password}
                        onChangeText={setPassword}
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
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
