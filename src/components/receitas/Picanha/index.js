import { View, Text, Image, StyleSheet } from "react-native";
import React, {useRef} from 'react';
import YoutubePlayer from "react-native-youtube-iframe";
import {
  useFonts,
  Poppins_700Bold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
export default function Picanha() {

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
        <Text style={styles.title}>Picanha</Text>
        <View style={styles.divIcons}>
          <View style={styles.divTempo}>
            <Image
              source={require("../../../../assets/watch.png")}
              style={styles.icon}
            />
            <Text style={styles.textIcon}>17min</Text>
          </View>
          <View style={styles.divPorcao}>
            <Image
              source={require("../../../../assets/prato.png")}
              style={styles.icon}
            />
            <Text style={styles.textIcon}>5 porções</Text>
          </View>
        </View>
        <Text style={styles.titleIngredientes}>Ingredientes</Text>
        <View style={styles.listIngredientes}>
          <Text style={styles.textIngredientes}>
            • 1 unidade de picanha bovina{" "}
          </Text>
          <Text style={styles.textIngredientes}>• Óleo de soja a gosto</Text>
          <Text style={styles.textIngredientes}>• Alho amassado(s) a gosto</Text>
          <Text style={styles.textIngredientes}>• Sal a gosto</Text>
        </View>
        <Text style={styles.titleModoPreparo}>Modo de preparo</Text>
        <View style={styles.listmodoPreparo}>
          <Text style={styles.textListModoPreparo}>
            <Text style={styles.strong}>• </Text>
            Salpique a carne com um sal médio (sal grosso batido no pilão). A
            parte, faça um molho de óleo com alho socado. Passe a carne neste
            molho e escorra antes de levá-la para a brasa. Ao virar a carne, volte
            a salpicá-la e coloque um pouco do molho (sem que escorra muito para o
            braseiro). Para saber se a carne já está macia use a parte lateral do
            garfo ou a parte sem corte da faca. Não fure a carne, pois ela perde o
            sangue e resseca (vire-a com a lateral da faca ou uma espátula
            própria).
          </Text>
        </View>
      </View>
      <View style={styles.video}>
        <YoutubePlayer
          ref={playerRef}
          height={330}
          width={330}
          videoId={'L-DTcYqe4nI'}
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
