import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Name from './components/Name';
import Surname from './components/Surname';
import Boxes from './components/Boxes';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Name name="Grzegorz" age={30} favColors={["black", "white", "blue"]} /> 
      <Name name="Marcin" age={35} favColors={["black", "white", "blue"]} /> 
      <Surname text="Kowalski" />
      <Boxes />
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
