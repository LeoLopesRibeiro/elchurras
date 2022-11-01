import { StatusBar } from "react-native";
import { StyleSheet } from "react-native";
import { StackRoutes } from "./src/routes/stack.routes";

export default function App() {
  return (
    <View style={styles.container}>
      <StackRoutes />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
