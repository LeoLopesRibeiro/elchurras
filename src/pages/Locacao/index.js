import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import api from "../../service/api";

export default function Locacao() {
  const [mapRender, setRenderMap] = useState(null);

  const teste =
  '{"carnes": [{"icon":  "../../../assets/vaca.png","nome": "picanha","kg": 10,"preco": 100},{"icon":  "../../../assets/vaca.png","nome": "linguiça","kg": 10,"preco": 100},{"icon":"../../../assets/vaca.png","nome": "coxinha","kg": 10,"preco": 100}],"bebidas": [{"icon":  "../../../assets/cerveja.png","nome": "cerveja","garrafas": 1,"preco": 30},{"icon":  "../../../assets/cerveja.png","nome": "agua","garrafas": 3,"preco": 10},{"icon":  "../../../assets/cerveja.png","nome": "refrigerante","garrafas": 2,"preco": 20}],"outros": {"geral": [{"icon": "carvao","nome": "carvão","kg": 10,"preco": 30},{"icon": "sal","nome": "sal grosso","kg": 1,"preco": 10}],"acompanhamentos": [{"icon": "arroz","nome": "arroz","kg": 10,"preco": 50},{"icon": "farofa","nome": "farofa","kg": 1,"preco": 10},{"icon": "pao","nome": "pão","kg": 1,"preco": 10}]},"locacao": {"rua": "amleto marchi","numero": "10","bairro":"parque fernanda", "cidade": "sao paulo"}}';
  const Json = JSON.parse(teste);

  useEffect(() => {
    (async () => {
      const localidade = Json.locacao;
      const response = await api.get(
        `geocode?q=${localidade.numero}+${localidade.rua}+${localidade.bairro}+${localidade.cidade}&lang=pt-br&apiKey=gNuRT103voDtjaiyCV_rdniV-szQ4iKt7WpFbQBTT64`
      );

      const location = await response.data.items[0].position;

      setRenderMap(
        <MapView
          region={{
            latitude: location.lat,
            longitude: location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
          minZoomLevel={17}
        >
          <Marker
            coordinate={{
              latitude: location.lat,
              longitude: location.lng,
            }}
          />
        </MapView>
      );
    })();
  }, []);

  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.background}>
      <View style={styles.whiteBackground}>
        <Text style={styles.text}>Locação</Text>
      </View>
      {mapRender === null ? (
        <View style={styles.indicator}>
          <ActivityIndicator size="large" color="#FFF" />
        </View>
      ) : (
        <View style={styles.viewMapa}>{mapRender}</View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontFamily: "Poppins_700Bold",
  },
  background: {
    height: "100%",
    backgroundColor: "#340C0C"
  },
  whiteBackground: {
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  indicator: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "85%",
    width: "100%",
  },
  viewMapa: {
    width: "100%",
    height: "86%",
    borderTopColor: "#340C0C",
    borderTopWidth: 2,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
