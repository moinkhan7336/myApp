import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import CarList from "./components/CarList";
import cars from "./components/CarList/cars";
import Header from "./components/Header";
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarList />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
