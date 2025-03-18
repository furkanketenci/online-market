import { Image, StyleSheet, Text, View } from "react-native"

const Banner = () => {
    return (
        <View style={styles.bannerContainer}>
            <Image
                style={styles.image}
                width={380}
                height={283}
                source={require("../../assets/images/discountInfo.png")}
            />
            <Text style={styles.firstInfo}>20% off on your </Text>
            <Text style={styles.secondInfo}>first purchase</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bannerContainer: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        alignSelf: 'center',
        paddingHorizontal: 14,
        marginTop: 9,
        marginBottom: 20
    },
    firstInfo: {
        color: "#000000",
        fontSize: 22,
        fontWeight: 800,
        position: "absolute",
        top: "55%",
    },
    secondInfo: {
        color: "#000000",
        fontSize: 22,
        fontWeight: 800,
        position: "absolute",
        top: "65%"
    }
})

export default Banner