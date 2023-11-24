import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from "./components/Navigation";
import MyErrorBoundary from "./components/MyErrorBoundary";

export default function App() {
  return (
      <MyErrorBoundary>
        <View style={styles.container}>
          <Navigation />
        </View>
      </MyErrorBoundary>

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
