import Banner from '@/components/Banner';
import Categories from '@/components/Categories';
import SearchInput from '@/components/ui/SearchInput';
import Colors from '@/constants/Colors';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
    <View style={styles.homeScreenContainer}>
      <SearchInput />
      <Banner />
      <Categories />
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreenContainer: {
    paddingHorizontal: 17,
    paddingTop: 14,
    backgroundColor: Colors.lightBG,
    flex: 1
  }
});
