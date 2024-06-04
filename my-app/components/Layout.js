import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor = "rgba(40, 40, 40, 1)" />
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(40, 40, 40, 1)",
    padding: 20,
    flex: 1,
    alignItems: "center",
  },
});

export default Layout;
