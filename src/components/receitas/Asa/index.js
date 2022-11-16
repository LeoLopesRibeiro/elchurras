import { View, Text, Image, StyleSheet } from "react-native";
import React, {useRef} from 'react';
import YoutubePlayer from "react-native-youtube-iframe";

import {
  useFonts,
  Poppins_700Bold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";

export default function Asa() {

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
          <Text>• 1 kg de asinhas de frango com coxinhas ou tulipas </Text>
          <Text>• sal a gosto </Text>
          <Text>• 1 colher pimenta rosa </Text>
          <Text>• meio maço de salsinha </Text>
          <Text>• suco de 1 limão </Text>
          <Text>• 8 dentes de alho </Text>
          <Text>• 1 colher de pimenta do reino </Text>
          <Text>• 1/2 xicara de azeite </Text>
          <Text>• 1 colher de paprica ou colorau </Text>
          <Text>• 1 cebola grande </Text>
        </View>
        <Text style={styles.titleModoPreparo}>Modo de preparo</Text>
        <View style={styles.listmodoPreparo}>
          <Text style={styles.textListModoPreparo}>
            1 No liquidificado coloque todos os ingredientes, menos o suco do
            limão. Bata até ficar bem pastoso.
          </Text>
          <Text style={styles.textListModoPreparo}>2 Limpe as asinhas.</Text>
          <Text style={styles.textListModoPreparo}>3 Passe o suco de limão.</Text>
          <Text style={styles.textListModoPreparo}>
            4 Em uma vasilha coloque as asinhas e a mistura.
          </Text>
          <Text style={styles.textListModoPreparo}>
            5 Colocar na churrasqueira e deixar assando por cerca de 10minutos. É
            importante virar a asa, para que ele asse por completo.
          </Text>
        </View>
      </View>
      <View style={styles.video}>
        <YoutubePlayer
          ref={playerRef}
          height={330}
          width={330}
          videoId={'lsqLeI_EQYE'}
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
