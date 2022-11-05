import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function ListarChurras({ navigation, route }) {
  const [listaChurras, setListaChurras] = useState([]);

  // const {id} = route.params;
  const id = 0;

  function goToCriarChurras() {
    navigation.navigate("CriarChurras", { id });
  }

  function goToCustos(custos) {
    navigation.navigate("Resultados", custos);
  }

  useEffect(() => {
    async function getUsuarios() {
      try {
        const usuarios = await AsyncStorage.getItem("usuarios");
        if (usuarios !== null) {
          setListaChurras(JSON.parse(usuarios)[id].churras);
        }
      } catch (e) {
        console.log(e);
      }
    }

    navigation.addListener("focus", (e) => {
      getUsuarios();
    });

    getUsuarios();
  }, [navigation]);

  return (
    <View style={styles.listarChurras}>
      <View style={styles.listaChurras}>
        <ScrollView>
          <View style={styles.viewScroll}>
            {listaChurras.length !== 0 ? (
              listaChurras.map((churras, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => goToCustos(churras.custos_outros)}
                    style={styles.churrasCriado}
                    activeOpacity={0.8}
                  >
                    <Image
                      source={require("../../../assets/carne.png")}
                      style={styles.imagemCarne}
                    />
                    <Text style={styles.dataChurras}>
                      Data do evento: {churras.data.dia}/{churras.data.mes}/
                      {churras.data.ano}
                    </Text>
                    <Text style={styles.responsavelChurras}>
                      Responsável: {churras.responsavel}
                    </Text>
                  </TouchableOpacity>
                );
              })
            ) : (
              <View>
                <Text>Você não possui nenhum churrasco</Text>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.buttonCriar} onPress={goToCriarChurras}>
          <Text style={styles.buttonMais}>+</Text>
          <Text style={styles.buttonTexto}>Novo Churrasco</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewScroll: {
    paddingTop: 50,
    width: "100%",
    alignItems: "center",
  },
  listarChurras: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingBottom: 50,
  },
  listaChurras: {
    height: "75%",
    width: "100%",
  },
  viewButton: {
    width: "100%",
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  churrasCriado: {
    width: "80%",
    backgroundColor: "#340C0C",
    padding: 20,
    marginBottom: 20,
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
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
    marginTop: 10,
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
