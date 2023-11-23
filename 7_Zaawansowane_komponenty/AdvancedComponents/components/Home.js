import React from "react";
import {StyleSheet, View, Button, ScrollView, Text} from "react-native";
import PlatformLogo from "./PlatformLogo";
import PatternMatching from "./PatternMaching";

const Home = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PlatformLogo />
      <PatternMatching />
      <View style={styles.distance}>
          <Text>Menu:</Text>
          <Button title="Home" onPress={() => navigation.navigate("Home")} />
          <Button
              title="Vibrations"
              onPress={() => navigation.navigate("Vibration")}
          />
          <Button title="Camera" onPress={() => navigation.navigate("Camera")} />
          <Button
              title="Location"
              onPress={() => navigation.navigate("Location")}
          />
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    distance: {
        marginTop: 20
    }
})

export default Home;
