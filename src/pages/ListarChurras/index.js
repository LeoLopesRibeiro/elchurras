import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function ListarChurras({ navigation }) {
  const [listaChurras, setListaChurras] = useState([]);

  function goToCriarChurras() {
    navigation.navigate("CriarChurras");
  }

  async function setChurrasData() {
    try {
      const churrascosJSON = JSON.stringify([]);
      await AsyncStorage.setItem("churrascos", churrascosJSON);
    } catch (err) {
      console.log(err);
    }
  }

  async function getChurrasData() {
    try {
      const jsonValue = await AsyncStorage.getItem("churrascos");
      if (jsonValue != null) {
        setListaChurras(JSON.parse(jsonValue));
      }

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setChurrasData();
    getChurrasData();
  }, []);

  return (
    <View style={styles.listarChurras}>
      <View style={styles.listaChurras}>
        {listaChurras.length != 0 ? (
          listaChurras.map((churras, index) => {
            return (
              <View>
                <Text>Churras</Text>
              </View>
            );
          })
        ) : (
          <View>
            <Text>Você não possui nenhum churrasco</Text>
          </View>
        )}
      </View>
      <View>
        <TouchableOpacity style={styles.buttonCriar} onPress={goToCriarChurras}>
          <Text style={styles.buttonMais}>+</Text>
          <Text style={styles.buttonTexto}>Novo Churrasco</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listarChurras: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#FFF",
  },
  listaChurras: {

  },
  buttonCriar: {
    width: 130,
    height: 110,
    backgroundColor: "#DF1D1D",
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
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
