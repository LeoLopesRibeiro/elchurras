import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";

function Assados({ navigation, route }) {
  function goToReceitas() {
    navigation.navigate("Receitas");
  }

  const { resultados } = route.params;

  const images = {
    bovino: require("../../../assets/vaca.png"),
    suino: require("../../../assets/porco.png"),
    frango: require("../../../assets/galinha.png"),
  };

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
              {resultados != undefined
                ? resultados.carnes.map((itens, index) => {
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
                                {Intl.NumberFormat("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                }).format(itens.preco)}
                              </Text>
                            </View>
                          </View>
                          <View style={styles.viewMap}>
                            <View style={styles.viewTextLeft}>
                              <Text style={styles.textMapAside}>Kg:</Text>
                            </View>
                            <View style={styles.viewMapAside}>
                              <Text style={styles.textMapAside}>
                                {Intl.NumberFormat("pt-BR").format(itens.kg)}
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
              <View style={styles.viewReceitas}>
                <TouchableOpacity
                  style={styles.borderReceitas}
                  onPress={goToReceitas}
                >
                  <Text style={styles.receitas}>Receitas</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ViewTotal}>
                <Text style={styles.textTotal}>Total: </Text>
                <Text style={styles.textNumero}>{Intl.NumberFormat("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                }).format(resultados.preco_total)}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
import Intl from "intl";

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
    width: "40%",
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
    alignItems: "flex-end",
  },
  viewAlinhamento: {
    display: "flex",
    height: "97%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  textNumero: {
    color: "#ffffff",
    fontFamily: "Poppins_700Bold",
  },
  borderReceitas: {
    width: 100,
    alignItems: "center",
    backgroundColor: "#DF1D1D",
    padding: 8,
    marginBottom: 20,
    borderRadius: 10,
  },
});
export default Assados;
