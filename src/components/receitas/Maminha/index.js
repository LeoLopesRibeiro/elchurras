import { View, Text, Image, StyleSheet } from "react-native";
import {useFonts, Poppins_700Bold, Poppins_500Medium} from "@expo-google-fonts/poppins";
export default function Maminha() {
   let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Maminha</Text>
      <View style={styles.divIcons}>
        <View style={styles.divTempo}>
          <Image
            source={require("../../../../assets/watch.png")}
            style={styles.icon}
          />
          <Text style={styles.textIcon}>20min</Text>
        </View>
        <View style={styles.divPorcao}>
          <Image
            source={require("../../../../assets/prato.png")}
            style={styles.icon}
          />
          <Text style={styles.textIcon}>4 porções</Text>
        </View>
      </View>
      <Text style={styles.titleIngredientes}>Ingredientes</Text>
      <View style={styles.listIngredientes}>
        <Text style={styles.textIngredientes}>• 250 g de alcatra em cubos </Text>
        <Text style={styles.textIngredientes}>• 1 colher (chá) de MAGGI® Gril</Text>
        <Text style={styles.textIngredientes}>• 2 colheres (sopa) de molho inglês</Text>
        <Text style={styles.textIngredientes}>• 1 cenoura cozida em rodelas</Text>
        <Text style={styles.textIngredientes}>• 1 batata cozida em cubos</Text>
        <Text style={styles.textIngredientes}>• 4 azeitonas verdes sem caroço</Text>
      </View>
      <Text style={styles.titleModoPreparo}>Modo de preparo</Text>
      <View style={styles.listmodoPreparo}>
        <Text style={styles.textListModoPreparo}>
            <Text style={styles.strong}>• </Text>
              Em um recipiente tempere a carne com o MAGGI Gril e o molho inglês.{" "}
        </Text>
        <Text style={styles.textListModoPreparo}>
          <Text style={styles.strong}>• </Text>
            Espete, alternadamente, cubos de carne, cenoura, batata e azeitona
            em palitos para churrasco.{" "}
        </Text>
        <Text style={styles.textListModoPreparo}>
          <Text style={styles.strong}>• </Text>
            Coloque-os em uma forma refratária e leve-os para assar no
            micro-ondas por 10 minutos, em potência alta. Sirva a seguir
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
