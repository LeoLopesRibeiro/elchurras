import { View, Text, Image, StyleSheet } from "react-native";
import React, {useRef} from 'react';
import YoutubePlayer from "react-native-youtube-iframe";
import {
  useFonts,
  Poppins_700Bold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
export default function Lombo() {

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
        <Text style={styles.title}>Lombo</Text>
        <View style={styles.divIcons}>
          <View style={styles.divTempo}>
            <Image
              source={require("../../../../assets/watch.png")}
              style={styles.icon}
            />
            <Text style={styles.textIcon}>3min</Text>
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
          <Text style={styles.textIngredientes}>• 1 kg de lombo de porco </Text>
          <Text style={styles.textIngredientes}>• Sal grosso a gosto</Text>
          <Text style={styles.textIngredientes}>• 100 gr de queijo ralado</Text>
          <Text style={styles.textIngredientes}>• Óleo de soja a gosto</Text>
        </View>
        <Text style={styles.titleModoPreparo}>Modo de preparo</Text>
        <View style={styles.listmodoPreparo}>
          <Text style={styles.textListModoPreparo}>
            <Text style={styles.strong}>• </Text>
            Tempere o lombo com sal grosso e coloque-o no espeto. Leve à
            churrasqueira em fogo médio e deixe dourar. Depois retire o sal
            grosso, pincele com óleo e cubra-o com queijo ralado. Leve de volta a
            churrasqueira, até que fique crocante.
          </Text>
        </View>
      </View>
      <View style={styles.video}>
        <YoutubePlayer
          ref={playerRef}
          height={330}
          width={330}
          videoId={'xdoos4cqWvg'}
          webViewStyle={ {opacity:0.99} }
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
