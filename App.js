import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StackRoutes } from "./router/index";

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
