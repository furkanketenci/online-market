import { SafeAreaView } from 'react-native-safe-area-context';
import { store } from "./redux/store";
import { Provider } from 'react-redux'
import MainStackNav from './navigator/MainStackNav';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <MainStackNav />
      </SafeAreaView>
    </Provider>
  );
}
