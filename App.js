import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import { useEffect, useState } from "react";
import { StackRoutes } from "./src/routes/stack.routes";
import MapView, { Marker } from "react-native-maps";
import api from "./src/services/api";

export default function App() {
  const [renderMap, setRenderMap] = useState(null);

  const jsonteste = JSON.parse(
    '{"carnes": [{"icon":"./assets/carne","nome": "picanha","kg": 10,"preco": 100},{"icon":  "./assets/carne","nome": "linguiça","kg": 10,"preco": 100},{"icon":"./assets/carne","nome": "coxinha","kg": 10,"preco": 100}],"bebidas": [{"icon":"./assets/cerveja","nome": "cerveja","garrafas": 1,"preco": 30},{"icon":"./assets/agua","nome": "agua","garrafas": 3,"preco": 10},{	"icon":  "./assets/refrigerante","nome": "refrigerante","garrafas": 2,"preco": 20}],"outros": {"geral": [{	"icon": "homem","nome": "carvão","kg": 10,"preco": 30},{	"icon": "./assets/sal_grosso","nome": "sal grosso","kg": 1,"preco": 10}],"acompanhamentos": [{	"icon": "./assets/arroz","nome": "arroz","kg": 10,"preco": 50},{	"icon": "./assets/farofa","nome": "farofa","kg": 1,"preco": 10},{	"icon": "./assets/pao","nome": "pão","kg": 1,"preco": 10}]},"locacao": {"rua": "amleto marchi","numero": "10","bairro": "parque fernanda"}}'
  );

  useEffect(() => {
    (async () => {
      const localidade = jsonteste.locacao;
      const response = await api.get(
        `geocode?q=${localidade.numero}+${localidade.rua}+${localidade.bairro}&lang=pt-br&apiKey=gNuRT103voDtjaiyCV_rdniV-szQ4iKt7WpFbQBTT64`
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
          style={{ width: "100%", height: "80%" }}
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

  return (
    <View style={styles.container}>
      <StackRoutes />
      {/* {renderMap} */}
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
