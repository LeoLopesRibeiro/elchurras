import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import "../../../assets/cerveja.png";
import  MapItens  from "../../components/MapItens";
import Total from "../../components/Total";
function Bebidas({ route }) {

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
          <MapItens data={resultados.bebidas}/>
          <Total data={resultados}/>
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
  textNumeroRateio: {
    color: "#ffffff",
    fontFamily: "Poppins_700Bold",
    marginLeft: 10,
  },
  ViewResultado: {
    display: "flex",
    padding: 10,
    justifyContent: "space-between",
    marginTop: 50,
  },
  ViewTotal: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
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
});
export default Bebidas;
