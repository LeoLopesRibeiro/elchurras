import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import api from "../../services/api";

export default function Locacao({ route }) {
  const [mapRender, setRenderMap] = useState(null);

  useEffect(() => {
    (async () => {
      const localidade = route.params?.resultados.locacao;
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
  }, []); //eslint-disable-line

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
    backgroundColor: "#340C0C",
  },
  whiteBackground: {
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
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
