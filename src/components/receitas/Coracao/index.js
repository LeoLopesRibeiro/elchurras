import { View, Text, Image, StyleSheet } from "react-native";
import {useFonts, Poppins_700Bold, Poppins_500Medium} from "@expo-google-fonts/poppins";

export default function Coracao() {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Coração</Text>
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
          <Text style={styles.textIcon}>6 porções</Text>
        </View>
      </View>
      <Text style={styles.titleIngredientes}>Ingredientes</Text>
      <View style={styles.listIngredientes}>
        <Text style={styles.textIngredientes}>• 1 kg de coração de frango </Text>
        <Text style={styles.textIngredientes}>• 8 folhas de louro </Text>
        <Text style={styles.textIngredientes}>• 1 e 1/2 colheres de sopa de orégano </Text>
        <Text style={styles.textIngredientes}>• 1 e 1/2 colheres de sopa de shoyo </Text>
        <Text style={styles.textIngredientes}>• 1 colher de sopa de tempero pronto para carne </Text>
        <Text style={styles.textIngredientes}>• 1 colher de sopa de pimenta moída </Text>
        <Text style={styles.textIngredientes}>• 1 colher de sopa de manteiga </Text>
        <Text style={styles.textIngredientes}>• 1 copo com água morna </Text>
      </View>
      <Text style={styles.titleModoPreparo}>Modo de preparo</Text>
      <View style={styles.listmodoPreparo}>
        <Text style={styles.textListModoPreparo}>
          <Text style={styles.strong}>• </Text>
            Limpe os corações primeiro. Retire o grosso da gordura saturada e as
            veias mais grossas. Cuide para retirar qualquer resquício de sangue
            coagulado.
        </Text>
        <Text style={styles.textListModoPreparo}>
          <Text style={styles.strong}>• </Text>
            Coloque os corações numa tigela e adicione o restante dos
            ingredientes.
        </Text>
        <Text style={styles.textListModoPreparo}>
          <Text style={styles.strong}>• </Text>
            Misture bem (usando as mãos mesmo) e cubra, selando bem com plástico
            filme (PVC).
        </Text>
        <Text style={styles.textListModoPreparo}>
          <Text style={styles.strong}>• </Text>
            Deixar na geladeira de um dia para o outro, para o tempero penetrar
            bem.
        </Text>
        <Text style={styles.textListModoPreparo}>
          <Text style={styles.strong}>• </Text>
            Retirar e fazer espetinhos na hora de colocar no fogo.
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
