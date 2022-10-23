import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import { StackRoutes } from "./src/routes/stack.routes";
import ListarChurras from "./src/pages/ListarChurras/index";

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
