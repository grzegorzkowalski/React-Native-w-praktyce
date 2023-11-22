import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Name from "./components/Chapter05/Name";
import Surname from "./components/Chapter05/Surname";
import ShowDate from "./components/Chapter05/ShowDate";
import ColorBoxes from "./components/Chapter05/ColorBoxes";
import Map from "./components/Chapter05/Map";
import Layout from "./components/Chapter05/Layout";

export default function App() {
  return (
    <View style={styles.container}>
      <Name name="Grzegorz" age={37} foot={46} />
      <Surname surname="Kowalski"></Surname>
      <ShowDate />
      <ColorBoxes />
      <Map />
      <Layout />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
