import { StatusBar } from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import AnimationAPI from "./components/AnimationAPI";
import ReanimatedAPI from "./components/ReanimatedAPI";
import RNPaper from "./components/RNPaper";
import Lottie from "./components/Lottie";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <AnimationAPI />
      <ReanimatedAPI />
      <RNPaper />
      <Lottie />
    </ScrollView>
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
