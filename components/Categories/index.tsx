import Colors from "@/constants/Colors";
import { useEffect, useState } from "react"
import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';

interface ICategoriesData {
    img: string;
    title: string;
    id: number
}

interface ICategoriesResponse {
    data: ICategoriesData[];
}

const Categories = () => {
    const [categories, setCategories] = useState<ICategoriesData[]>();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("http://localhost:3000/test/categories")
                const categoriesData: ICategoriesResponse = await response.json();
                setCategories(categoriesData.data)
            } catch (err) {
                console.error('Error Fetch Categories', err)
            }
        }
        fetchCategories();
    }, [])

    return (
        <View style={styles.categoriesContainer}>
            <View style={styles.deneme}>
                <Text style={styles.title}>Categories</Text>
                <AntDesign name="right" size={18} color={Colors.textColor} />
            </View>
            <FlatList
                horizontal
                data={categories}
                renderItem={
                    (item) =>
                        <View>
                            <Image source={{ uri: item.item.img }} style={styles.categoriesImg} />
                            <Text style={styles.ctgTitle}>{item.item.title}</Text>
                        </View>
                }
                ItemSeparatorComponent={() => <View style={{ width: 19 }} />} // Added View component between Images
            />
        </View>
    )
}
export default Categories

const styles = StyleSheet.create({
    categoriesContainer: {},
    deneme: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 18,
        color: "#000000",
        fontWeight: 600,
        marginBottom: 17
    },
    categoriesImg: {
        minWidth: 50,
        minHeight: 50,
        borderWidth: 1,
        borderColor: Colors.borderColor2,
        borderRadius: "50%",
    },
    ctgTitle: {
        color: Colors.textColor,
        fontSize: 11,
        textAlign: "center",
        marginTop: 11
    }
})