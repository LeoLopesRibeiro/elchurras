import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import "../../../assets/cerveja.png";

function Bebidas({ route }) {
  const images = {
    agua: require("../../../assets/agua.png"),
    cerveja: require("../../../assets/cerveja.png"),
    refri: require("../../../assets/refrigerante.png"),
    vinho: require("../../../assets/vinho.png"),
    whisky: require("../../../assets/whisky.png"),
  };

  const { resultados } = route.params;

  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.cor}>
      <View style={styles.background}>
        <View style={styles.whiteBackground}>
          <Text style={styles.text}>Gastos</Text>
        </View>
        <View style={styles.cor}>
          <View style={styles.viewAlinhamento}>
            <View>
              {resultados.length != 0
                ? resultados.bebidas.map((itens, index) => {
                    return (
                      <View style={styles.view} key={index}>
                        <View style={styles.teste}>
                          <Image
                            source={images[itens.icon]}
                            style={{ width: 30, height: 30 }}
                          />
                          <Text style={styles.textMap}>{itens.nome}</Text>
                        </View>
                        <View style={styles.viewTeste}>
                          <View style={styles.viewMap}>
                            <View style={styles.viewTextLeft}>
                              <Text style={styles.textMapAside}>Preço:</Text>
                            </View>
                            <View style={styles.viewMapAside}>
                              <Text style={styles.textMapAside}>
                                {itens.preco}
                              </Text>
                            </View>
                          </View>
                          <View style={styles.viewMap}>
                            <View style={styles.viewTextLeft}>
                              <Text style={styles.textMapAside}>
                                Unidades (
                                {itens.litragem < 1000
                                  ? itens.litragem
                                  : itens.litragem / 1000}{" "}
                                {itens.litragem < 1000 ? "ml" : "L"})
                              </Text>
                            </View>
                            <View style={styles.viewMapAside}>
                              <Text style={styles.textMapAside}>
                                {itens.garrafa}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    );
                  })
                : null}
            </View>

            <View style={styles.ViewResultado}>
              <View style={styles.ViewTotal}>
                <Text style={styles.textTotal}>Total: </Text>
                <Text style={styles.textNumero}>
                  {resultados.preco_total.toFixed(2)}
                </Text>
              </View>
              <View style={styles.viewReceitas}></View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cor: {
    height: "90%",
    backgroundColor: "#340C0C",
  },
  text: {
    fontSize: 40,
    fontFamily: "Poppins_700Bold",
  },
  background: {
    height: "100%",
    backgroundColor: "#340C0C",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  whiteBackground: {
    backgroundColor: "#fff",
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textMap: {
    color: "#fff",
    fontSize: 15,
    textTransform: "capitalize",
    marginLeft: 10,
    fontFamily: "Poppins_700Bold",
  },
  textMapAside: {
    fontFamily: "Poppins_700Bold",
    color: "#fff",
  },
  viewTeste: {
    justifyContent: "space-between",
    width: "50%",
  },
  viewTextLeft: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  viewMap: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewMapAside: {
    display: "flex",
    alignItems: "flex-end",
  },
  teste: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  view: {
    padding: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#EED0A2",
  },
  textTotal: {
    color: "#fff",
    fontSize: 25,
    textTransform: "capitalize",
    marginLeft: 10,
    fontFamily: "Poppins_700Bold",
  },
  receitas: {
    color: "#fff",
    fontFamily: "Poppins_700Bold",
  },
  ViewResultado: {
    display: "flex",
    padding: 10,
    justifyContent: "space-between",
  },
  ViewTotal: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  viewReceitas: {
    display: "flex",
    justifyContent: "flex-end",
  },
  viewAlinhamento: {
    display: "flex",
    height: "80%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  textNumero: {
    color: "#ffffff",
    fontFamily: "Poppins_700Bold",
  },
});
export default Bebidas;
