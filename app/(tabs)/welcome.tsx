
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

import { StackNavigationProp } from "@react-navigation/stack";
import Colors from "@/constants/Colors";

type RootStackParamList = {
    Register: undefined;
    Login: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

const WelcomeScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    return (
        <View style={styles.welcomeScreenContainer}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.subText}>Welcome to the online market! Go ahead and log in now and enjoy shopping!</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Register")}>
                <Text style={styles.buttonText}>Create an account</Text>
            </TouchableOpacity>
            <View style={styles.haveAnAccountWrapper}>
                <Text style={styles.haveAnAccountText}>Already have an account?
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.loginText}  > Login!</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    welcomeScreenContainer: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        height: "100%",
        paddingHorizontal: 16
    },
    welcomeText: {
        fontSize: 25,
        fontWeight: 600,
        marginBottom: 5
    },
    subText: {
        color: Colors.textColor,
        fontWeight: 400,
        lineHeight: 20
    },
    button: {
        backgroundColor: Colors.primaryDark,
        width: "100%",
        height: 45,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "#fff",
        fontWeight: 600
    },
    haveAnAccountWrapper: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: 10
    },
    haveAnAccountText: {
        color: Colors.textColor,
        fontSize: 15,
    },
    loginText: {
        marginLeft: 8,
        color: Colors.linkColor,
        fontSize: 13,
        fontWeight: 500,
        position: "relative",
        top: 2
    }
});