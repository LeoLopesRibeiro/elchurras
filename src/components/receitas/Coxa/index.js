import { View, Text, Image, StyleSheet } from "react-native";
import {useFonts, Poppins_700Bold, Poppins_500Medium} from "@expo-google-fonts/poppins";

export default function Coxa() {
   let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Coxa Frango</Text>
      <View style={styles.divIcons}>
        <View style={styles.divTempo}>
          <Image
            source={require("../../../../assets/watch.png")}
            style={styles.icon}
          />
          <Text style={styles.textIcon}>50min</Text>
        </View>
        <View style={styles.divPorcao}>
          <Image
            source={require("../../../../assets/prato.png")}
            style={styles.icon}
          />
          <Text style={styles.textIcon}>6 porções</Text>
        </View>
      </View>
      <Text style={styles.titleIngredientes}>Ingredientes</Text>
      <View style={styles.listIngredientes}>
        <Text style={styles.textIngredientes}>• 1 kg coxinha da asa do frango </Text>
        <Text style={styles.textIngredientes}>• 1 saquinho de sopa de cebola </Text>
        <Text style={styles.textIngredientes}>• 300 g de alho bem picadinho </Text>
        <Text style={styles.textIngredientes}>• 1 frasco de mostarda mostarda </Text>
        <Text style={styles.textIngredientes}>• Sal a gosto </Text>
        <Text style={styles.textIngredientes}>• Molho de pimenta </Text>
      </View>
      <Text style={styles.titleModoPreparo}>Modo de preparo</Text>
      <View style={styles.listmodoPreparo}>
        <Text style={styles.textListModoPreparo}>
          <Text style={styles.strong}>• </Text>
            Tempere as coxas a gosto.
        </Text>
        <Text style={styles.textListModoPreparo}>
          <Text style={styles.strong}>• </Text>
            Colocar na churrasqueira e deixar assando por cerca de 20minutos. É
            importante virar o frango, para que ele asse por completo.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 330,
    borderRadius: 10,
    backgroundColor: "#EED0A2",
    marginTop: 50,
    marginBottom: 50,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
    padding: 10,
  },
  icon: {
    width: 25,
    height: 25,
  },
  divIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  divTempo: {
    flexDirection: "row",
    alignItems: "center",
  },
  divPorcao: {
    flexDirection: "row",
    alignItems: "center",
  },
  textIcon: {
    marginLeft: 5,
    fontFamily: 'Poppins_700Bold',
  },
  titleIngredientes: {
    fontFamily: 'Poppins_700Bold',
    padding: 20,
  },
  listIngredientes: {
    marginLeft: 30,
  },
  titleModoPreparo: {
     fontFamily: 'Poppins_700Bold',
    padding: 20,
  },
  listmodoPreparo: {
    marginLeft: 30,
    maxWidth: 250,
  },
  textListModoPreparo: {
    marginTop: 10,
    fontFamily: 'Poppins_500Medium'
  },
  strong: {
    fontFamily: 'Poppins_700Bold'
  },
  textIngredientes:{
    fontFamily: 'Poppins_500Medium'
  }
});
