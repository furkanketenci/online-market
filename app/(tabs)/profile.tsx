import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
const ProfileScreen = () => {
    return (
        <>

            <View style={styles.profileContainer}>
                <View style={styles.profileTopArea}>
                    <Text style={styles.firstText}>Create account</Text>
                    <Text style={styles.secondText}>Quickly create account</Text>
                </View>
                <TextInput
                    style={styles.inputs}
                    inputMode="email"
                    placeholder="Email Address"
                    placeholderTextColor={"#868889"}
                />
                <TextInput
                    style={styles.inputs}
                    secureTextEntry
                    placeholder="**************"
                    placeholderTextColor={"#868889"}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({

    profileContainer: {
        paddingHorizontal: 17,
        justifyContent: "center",
        flex: 1
    },
    profileTopArea: {
        marginBottom: 26
    },
    firstText: {
        color: "#000000",
        fontSize: 25,
        fontWeight: 700,
        marginBottom: 2
    },
    secondText: {
        fontSize: 15,
        color: "#868889"
    },
    inputs: {
        width: "100%",
        height: 60,
        marginBottom: 5,
        backgroundColor: "#fff",
        paddingLeft: 28,
        color: "#000",
        borderRadius: 5
    },
    button: {
        width: "100%",
        height: 60,
        marginTop: 17,
        backgroundColor: "#6CC51D",
        alignItems: "center",
        justifyContent: "center",

    },
    buttonText: {
        color: "#FFFFFF",
        fontWeight: 700
    }
});