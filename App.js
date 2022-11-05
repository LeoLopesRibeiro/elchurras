import { StyleSheet, View, StatusBar, Platform, SafeAreaView } from "react-native";
import { StackRoutes } from "./src/routes/stack.routes";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

if (Platform.OS == "android") {
  require("intl");
  require("intl/locale-data/jsonp/pt-BR");
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StackRoutes />
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
