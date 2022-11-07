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

export default function SelecionarUsuarios({ navigation }) {
  const [card, setCard] = useState([]);

  function listarChurras(index) {
    navigation.navigate("ListarChurras", { id: index });
  }

  useEffect(() => {
    async function setUsuariosStorage() {
      const usuariosLocal = await AsyncStorage.getItem("usuarios");
      
      if (usuariosLocal === null) {
        await AsyncStorage.setItem("usuarios", JSON.stringify([]));
        try {
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
          console.log(JSON.parse(usuariosNovo));
        }
      } catch (e) {
        alert(e);
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

  console.log(card.length);
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
        <Text>Você não tem um usuario</Text>
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
    width: 333,
    height: 223,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#340C0C",
    borderRadius: 20,
  },

  titulo: {
    fontWeight: "700",
    color: "#fff",
    fontSize: 32,
  },

  perfil: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 5,
  },

  ImgCamera: {
    width: 125,
    height: 125,
    borderRadius: 100,
  },

  texto: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
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
    fontWeight: "bold",
  },
});
