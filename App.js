import { StyleSheet, View, StatusBar} from 'react-native';
import { StackRoutes } from "./router/index.js";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <StackRoutes />
  </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});