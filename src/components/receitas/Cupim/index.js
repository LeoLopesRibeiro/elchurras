import { View, Text, Image, StyleSheet } from "react-native";
import React, {useRef} from 'react';
import YoutubePlayer from "react-native-youtube-iframe";
import {
  useFonts,
  Poppins_700Bold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
export default function Cupim() {

  const playerRef = useRef();

  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.title}>Cupim</Text>
        <View style={styles.divIcons}>
          <View style={styles.divTempo}>
            <Image
              source={require("../../../../assets/watch.png")}
              style={styles.icon}
            />
            <Text style={styles.textIcon}>5h30min</Text>
          </View>
          <View style={styles.divPorcao}>
            <Image
              source={require("../../../../assets/prato.png")}
              style={styles.icon}
            />
            <Text style={styles.textIcon}>30 porções</Text>
          </View>
        </View>
        <Text style={styles.titleIngredientes}>Ingredientes</Text>
        <View style={styles.listIngredientes}>
          <Text style={styles.textIngredientes}>• 3,5 kg de cupim bovino </Text>
          <Text style={styles.textIngredientes}>
            • 1 xícara (chá) de sal grosso{" "}
          </Text>
          <Text style={styles.textIngredientes}>
            • 4 dentes de alho triturados{" "}
          </Text>
          <Text style={styles.textIngredientes}>• 800 gr de provolone </Text>
        </View>
        <Text style={styles.titleModoPreparo}>Modo de preparo</Text>
        <View style={styles.listmodoPreparo}>
          <Text style={styles.textListModoPreparo}>
            <Text style={styles.strong}>• </Text>
            Compre o provolone numa única peça e depois fatie em tiras no formato
            “batata palito”, só que um pouco mais grossas.
          </Text>
          <Text style={styles.textListModoPreparo}>
            <Text style={styles.strong}>• </Text>
            Depois, faça alguns furos na peça de cupim com o auxílio de uma faca
            fina e bem afiada, ou de um outro objeto perfurante, que permita
            retirar a tira de carne de dentro do buraco (se você apenas perfurar a
            carne com a ponta da faca, na hora de assar as fibras da carne vão se
            contrair, fechar o furo e espremer o provolone para fora).
          </Text>
          <Text style={styles.textListModoPreparo}>
            <Text style={styles.strong}>• </Text>
            Depois, tempere a peça com o sal grosso misturado com o alho triturado
            e embrulhe em seis voltas de papel celofane especial para churrasco.
          </Text>
          <Text style={styles.textListModoPreparo}>
            <Text style={styles.strong}>• </Text>
            Na hora de assar, não tenha pressa: leve à grelha a uma distância de
            60 centímetros do braseiro vivo e deixe por pelo menos 4 horas,
            virando a peça 1 vez a cada hora. Depois, retire o papel celofane e
            coloque a peça de volta à grelha por mais 7 minutos de cada lado
            apenas para dourar a parte externa da carne.
          </Text>
        </View>
      </View>
      <View style={styles.video}>
        <YoutubePlayer
          ref={playerRef}
          height={330}
          width={330}
          videoId={'oozfbXjIn8M'}
        />
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
    fontFamily: "Poppins_700Bold",
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
    fontFamily: "Poppins_700Bold",
  },
  titleIngredientes: {
    fontFamily: "Poppins_700Bold",
    padding: 20,
  },
  listIngredientes: {
    marginLeft: 30,
  },
  titleModoPreparo: {
    fontFamily: "Poppins_700Bold",
    padding: 20,
  },
  listmodoPreparo: {
    marginLeft: 30,
    maxWidth: 250,
  },
  textListModoPreparo: {
    marginTop: 10,
    fontFamily: "Poppins_500Medium",
  },
  strong: {
    fontFamily: "Poppins_700Bold",
  },
  textIngredientes: {
    fontFamily: "Poppins_500Medium",
  },
});
