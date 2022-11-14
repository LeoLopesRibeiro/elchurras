import { View, Text, Image, StyleSheet } from "react-native";
import React, {useRef} from 'react';
import YoutubePlayer from "react-native-youtube-iframe";
import {
  useFonts,
  Poppins_700Bold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";

export default function Costela() {

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
        <Text style={styles.title}>Costela</Text>
        <View style={styles.divIcons}>
          <View style={styles.divTempo}>
            <Image
              source={require("../../../../assets/watch.png")}
              style={styles.icon}
            />
            <Text style={styles.textIcon}>3h</Text>
          </View>
          <View style={styles.divPorcao}>
            <Image
              source={require("../../../../assets/prato.png")}
              style={styles.icon}
            />
            <Text style={styles.textIcon}>7 porções</Text>
          </View>
        </View>
        <Text style={styles.titleIngredientes}>Ingredientes</Text>
        <View style={styles.listIngredientes}>
          <Text style={styles.textIngredientes}>
            • 1 1/2 kg de costela de porco (peça){" "}
          </Text>
          <Text style={styles.textIngredientes}>• 1/2 colher (café) de sal </Text>
          <Text style={styles.textIngredientes}>
            • 2 dentes de alho descascados e moídos{" "}
          </Text>
          <Text style={styles.textIngredientes}>• 1 pitada de noz-moscada </Text>
          <Text style={styles.textIngredientes}>
            • 1 colher (chá) de salsinha picada{" "}
          </Text>
          <Text style={styles.textIngredientes}>
            • 1 copo (americano) de cerveja escura{" "}
          </Text>
        </View>
        <Text style={styles.titleModoPreparo}>Modo de preparo</Text>
        <View style={styles.listmodoPreparo}>
          <Text style={styles.textListModoPreparo}>
            <Text style={styles.strong}>• </Text>
            Depois de descongelada, deixe a costela marinando na mistura dos
            temperos durante 2 horas em temperatura ambiente.
          </Text>
          <Text style={styles.textListModoPreparo}>
            <Text style={styles.strong}>• </Text>
            Na hora de assar, coloque a peça inteira sobre a grelha em forma de
            cúpula já bem quente, com os ossos voltados para o fogo.
          </Text>
          <Text style={styles.textListModoPreparo}>
            <Text style={styles.strong}>• </Text>
            Deixe 20 minutos.
          </Text>
          <Text style={styles.textListModoPreparo}>
            <Text style={styles.strong}>• </Text>
            Vire a costela e deixe mais 20 minutos.
          </Text>
          <Text style={styles.textListModoPreparo}>
            <Text style={styles.strong}>• </Text>
            Sirva guarnecida com fatias de abacaxi grelhadas.
          </Text>
        </View>
      </View>
      <View style={styles.video}>
        <YoutubePlayer
          ref={playerRef}
          height={330}
          width={330}
          videoId={'iNcxb8yZrvk'}
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
