import { View, Text, Image, StyleSheet } from "react-native";
import {useFonts, Poppins_700Bold, Poppins_500Medium} from "@expo-google-fonts/poppins";

export default function Asa() {

      let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Asinha Frango</Text>
      <View style={styles.divIcons}>
        <View style={styles.divTempo}>
          <Image
            source={require("../../../../assets/watch.png")}
            style={styles.icon}
          />
          <Text style={styles.textIcon}>10min</Text>
        </View>
        <View style={styles.divPorcao}>
          <Image
            source={require("../../../../assets/prato.png")}
            style={styles.icon}
          />
          <Text style={styles.textIcon}>1 porções</Text>
        </View>
      </View>
      <Text style={styles.titleIngredientes}>Ingredientes</Text>
      <View style={styles.listIngredientes}>
        <Text style={styles.textIngredientes}>• 1 kg de asinhas de frango com coxinhas ou tulipas </Text>
        <Text style={styles.textIngredientes}>• sal a gosto </Text>
        <Text style={styles.textIngredientes}>• 1 colher pimenta rosa </Text>
        <Text style={styles.textIngredientes}>• meio maço de salsinha </Text>
        <Text style={styles.textIngredientes}>• suco de 1 limão </Text>
        <Text style={styles.textIngredientes}>• 8 dentes de alho </Text>
        <Text style={styles.textIngredientes}>• 1 colher de pimenta do reino </Text>
        <Text style={styles.textIngredientes}>• 1/2 xicara de azeite </Text>
        <Text style={styles.textIngredientes}>• 1 colher de paprica ou colorau </Text>
        <Text style={styles.textIngredientes}>• 1 cebola grande </Text>
      </View>
      <Text style={styles.titleModoPreparo}>Modo de preparo</Text>
      <View style={styles.listmodoPreparo}>
        <Text style={styles.textListModoPreparo}>
          <Text style={styles.strong}>• </Text>
            No liquidificado coloque todos os ingredientes, menos o suco do
            limão. Bata até ficar bem pastoso.
        </Text>
        <Text style={styles.textListModoPreparo}>
          <Text style={styles.strong}>• </Text>
            Limpe as asinhas.
        </Text>
        <Text style={styles.textListModoPreparo}>
          <Text style={styles.strong}>• </Text>
            Passe o suco de limão.
          </Text>
        <Text style={styles.textListModoPreparo}>
          <Text style={styles.strong}>• </Text>
            Em uma vasilha coloque as asinhas e a mistura.
        </Text>
        <Text style={styles.textListModoPreparo}>
          <Text style={styles.strong}>• </Text>
            Colocar na churrasqueira e deixar assando por cerca de 10minutos. É
            importante virar a asa, para que ele asse por completo.
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
