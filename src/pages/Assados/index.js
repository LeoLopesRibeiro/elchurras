import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import MapItens from "../../components/MapItens/index";
import Total from "../../components/Total/index";

function Assados({ navigation, route }) {
  const { resultados } = route.params;

  function goToReceitas() {
    const carnes = [];

    resultados.carnes.forEach((carne) => {
      carnes.push(carne.nome);
    });

    navigation.navigate("Receitas", { carnes: carnes });
  }

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
            <MapItens data={resultados.carnes} />
            <View style={styles.ViewResultado}>
              <View style={styles.viewReceitas}>
                <TouchableOpacity
                  style={styles.borderReceitas}
                  onPress={goToReceitas}
                >
                  <Text style={styles.receitas}>Receitas</Text>
                </TouchableOpacity>
              </View>
              <Total data={resultados} />
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
  textNumeroRateio: {
    color: "#ffffff",
    fontFamily: "Poppins_700Bold",
    marginLeft: 10,
  },
  receitas: {
    color: "#fff",
    fontFamily: "Poppins_700Bold",
  },
  ViewResultado: {
    display: "flex",
    paddingRight: 10,
    justifyContent: "space-between",
    marginTop: 50,
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
