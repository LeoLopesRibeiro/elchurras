import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function ListarChurras({ navigation }) {
  const [listaChurras, setListaChurras] = useState([]);

  const usuario = {
    nome: "gustavo",
    icon: "teste",
    churras: [
      {
        responsavel: "gustavo",
        data: "26/11/2022",
        custos_mais: {
          carnes: [
            {
              nome: "picanha",
              preco: "30",
            },
          ],
        },
      },
      {
        responsavel: "gustavo",
        data: "16/11/2022",
        custos_mais: {},
      },
    ],
  };

  function goToCriarChurras() {
    navigation.navigate("CriarChurras");
  }

  function goToCustos(custos) {
    console.log(custos);
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
    setListaChurras(usuario.churras);
  }, []);

  return (
    <View style={styles.listarChurras}>
      <View style={styles.listaChurras}>
        {listaChurras.length != 0 ? (
          listaChurras.map((churras, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => goToCustos(churras.custos_mais)}
                style={styles.churrasCriado}
                activeOpacity={0.8}
              >
                <Image
                  source={require("../../../assets/carne.png")}
                  style={styles.imagemCarne}
                />
                <Text style={styles.dataChurras}>Data do evento: {churras.data}</Text>
                <Text style={styles.responsavelChurras}>Responsável: {churras.responsavel}</Text>
              </TouchableOpacity>
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
    backgroundColor: "#FFF",
    paddingTop: 50,
    paddingBottom: 50,
  },
  listaChurras: {
    width: "100%",
    alignItems: "center",
  },
  churrasCriado: {
    width: "80%",
    backgroundColor: "#340C0C",
    padding: 20,
    marginBottom: 20,
    display: "flex",
    alignItems: "center",
    borderRadius: 10
  },
  imagemCarne: {
    width: 52,
    height: 43,
    marginBottom: 20,
    marginTop: 10,
  },
  dataChurras: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
  },
  responsavelChurras: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
    textTransform: "capitalize",
    marginTop: 10
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
