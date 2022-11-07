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
  
  viewAlinhamento: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
export default Bebidas;
