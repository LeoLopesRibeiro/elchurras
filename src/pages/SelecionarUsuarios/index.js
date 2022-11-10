import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";

export default function SelecionarUsuarios({ navigation }) {
  const [card, setCard] = useState([]);

  function listarChurras(index) {
    navigation.navigate("ListarChurras", { id: index });
  }

  useEffect(() => {
    async function setUsuariosStorage() {
      const usuariosLocal = await AsyncStorage.getItem("usuarios");
      
      if (usuariosLocal === null) {
        try {
          await AsyncStorage.setItem("usuarios", JSON.stringify([]));
        } catch (e) {
          console.log(e);
        }
      }
    }

    async function CardUsuario() {
      try {
        let usuariosNovo = await AsyncStorage.getItem("usuarios");

        if (usuariosNovo !== null) {
          setCard(JSON.parse(usuariosNovo));
        }
      } catch (e) {
        console.log(e)
      }
    }

    navigation.addListener("focus", () => {
      CardUsuario();
    });

    CardUsuario();
    setUsuariosStorage();
  }, []); //eslint-disable-line

  function goToCriar() {
    navigation.navigate("AdicionarUsuarios");
  }

  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }

  if (card.length !== 0) {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.titulo}>Selecionar Usuario</Text>
          <ScrollView horizontal={true}>
            {card.length !== 0
              ? card.map((itens, index) => {
                  return (
                    <View style={styles.perfil} key={index}>
                      <TouchableOpacity onPress={() => listarChurras(index)}>
                        <Image
                          style={styles.ImgCamera}
                          source={itens.uri == null ? require("../../../assets/user.png") : {uri: itens.uri}}
                        />
                        <Text style={styles.texto}>{itens.nome}</Text>
                      </TouchableOpacity>
                    </View>
                  );
                })
              : null}
          </ScrollView>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonCriar}
            onPress={() => goToCriar()}
          >
            <Text style={styles.buttonMais}>+</Text>
            <Text style={styles.buttonTexto}>Novo Usuario</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.textSemChurras}>Você não tem um usuario</Text>
        <View>
          <TouchableOpacity
            style={styles.buttonCriar}
            onPress={() => goToCriar()}
          >
            <Text style={styles.buttonMais}>+</Text>
            <Text style={styles.buttonTexto}>Novo Usuario</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    display: "flex",
    width: "90%",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#340C0C",
    borderRadius: 20,
  },

  titulo: {
    color: "#fff",
    fontSize: 28,
    fontFamily: "Poppins_700Bold",
  },

  perfil: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
  },

  ImgCamera: {
    width: 125,
    height: 125,
    borderRadius: 100,
  },

  texto: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
    fontSize: 14,
    top: 10,
  },

  buttonCriar: {
    width: 130,
    height: 110,
    backgroundColor: "#DF1D1D",
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 50,
  },

  buttonMais: {
    fontSize: 50,
    color: "#FFF",
  },

  buttonTexto: {
    color: "#FFF",
    fontFamily: "Poppins_700Bold",
  },
  textSemChurras: {
    fontFamily: "Poppins_700Bold",
  },
});
