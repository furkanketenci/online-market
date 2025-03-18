import Colors from "@/constants/Colors"
import { AntDesign } from "@expo/vector-icons"
import { useState } from "react"
import { TextInput, View } from "react-native"
import { StyleSheet } from "react-native"
const SearchInput = () => {
    const [searchValue, setSearchValue] = useState("");
    return (
        <View style={styles.searchWrapper}>
            <TextInput
                style={styles.textInput}
                placeholder="Search keywords..."
                placeholderTextColor={Colors.textColor}
                value={searchValue}
                onChangeText={(text) => {
                    console.log("Giriş yapılan metin:", text);
                    setSearchValue(text);
                }}
            />
            <AntDesign style={styles.icon} name="search1" size={20} color="#000" />
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    searchWrapper: {
        position: "relative",
        width: "100%",
    },
    textInput: {
        height: 50,
        backgroundColor: Colors.mainBG,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        borderWidth: 1,
        borderColor: "#000000",
        paddingLeft: 40,
    },
    icon: {
        position: "absolute",
        left: 15,
        top: 14,
        color: Colors.textColor,
    }
})