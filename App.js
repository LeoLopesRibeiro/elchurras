import { StyleSheet, View, StatusBar, Platform } from "react-native";
import { StackRoutes } from "./src/routes/stack.routes";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

if (Platform.OS == "android") {
  require("intl");
  require("intl/locale-data/jsonp/pt-BR");
}

export default function App() {
  useEffect(() => {
    async function setUsuarios() {
      try {
        const usuarios = await AsyncStorage.getItem("usuarios");

        if (usuarios === null) {
          const jsonUsuarios = JSON.stringify([
            {
              nome: "Gustavo",
              icon: "lala",
              churras: [],
            },
            {
              nome: "Matheus",
              icon: "lala",
              churras: [],
            },
          ]);

          await AsyncStorage.setItem("usuarios", jsonUsuarios);
        }
      } catch (e) {
        console.log(e);
      }
    }

    setUsuarios();
  }, []);

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
