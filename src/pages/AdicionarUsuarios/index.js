import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Keyboard,
} from "react-native";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../../components/Header/index";

export default function AdicionarUsuarios({ navigation }) {
  const [nome, setNome] = useState("");
  const [image, setImage] = useState();
  const [usuarios, setUsuarios] = useState([]);

  const ObterImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  useEffect(() => {
    async function getUsuariosStorage() {
      try {
        const usuariosLocal = await AsyncStorage.getItem("usuarios");

        setUsuarios(JSON.parse(usuariosLocal));
      } catch (e) {
        alert("Erro 404");
      }
    }

    getUsuariosStorage();
  }, []);

  async function SalvarUsuario() {
    const usuarioCriado = {
      uri: image,
      nome: nome,
      churras: [],
    };

    let usuariosStorage = usuarios;
    usuariosStorage.push(usuarioCriado);

    try {
      const usuariosJSON = JSON.stringify(usuariosStorage);
      await AsyncStorage.setItem("usuarios", usuariosJSON);

      let usuariosNovo = await AsyncStorage.getItem("usuarios");
      console.log(JSON.parse(usuariosNovo));
    } catch (e) {
      alert("Erro 404");
    }

    Keyboard.dismiss();
    navigation.navigate("SelecionarUsuarios");
  }

  return (
    <View style={styles.conatinercard}>
      <View style={styles.card_AdicionarUsuarios}>
        <View style={styles.container_TextoCard}>
          <Text style={styles.TextoCard}>Adicionar Usuario</Text>
        </View>

        <View style={styles.container_ImageCard}>
          <TouchableOpacity
            style={styles.container_foto}
            onPress={() => ObterImage()}
          >
            <Image
              style={styles.ImgCamera}
              source={
                image != null
                  ? { uri: image }
                  : require("../../../assets/image.png")
              }
            />
          </TouchableOpacity>
        </View>

        <View style={styles.container_TextoInput}>
          <TextInput
            style={styles.TextoInput}
            placeholder="Nome"
            placeholderTextColor="#000"
            onChangeText={(text) => setNome(text)}
          />
          <TouchableOpacity
            style={styles.Botao}
            onPress={() => SalvarUsuario()}
          >
            <Text style={styles.TextoBotao}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conatinercard: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  card_AdicionarUsuarios: {
    width: 340,
    height: 340,
    borderRadius: 10,
    backgroundColor: "#340C0C",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 10,
  },

  TextoInput: {
    width: "100%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderBottomColor: "#000",
    borderWidth: 2,
    padding: 10,
    bottom: 10,
  },

  container_TextoCard: {
    bottom: 70,
  },

  TextoCard: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 32,
  },

  container_ImageCard: {
    bottom: 40,
    backgroundColor: "#D9D9D9",
    width: 125,
    height: 125,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  container_TextoInput: {
    width: "100%",
  },

  Botao: {
    backgroundColor: "#DF1D1D",
    borderRadius: 10,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  TextoBotao: {
    fontWeight: "700",
    fontSize: 16,
    color: "white",
  },

  container_foto: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  ImgCamera: {
    width: 125,
    height: 125,
    borderRadius: 100,
  },
});
