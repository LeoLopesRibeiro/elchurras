import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import MapItens from "../../components/MapItens";
import Total from "../../components/Total";

import * as Location from "expo-location";

function Outros({ route }) {
  const [errorMsg, setErrorMsg] = useState(null);
  const [acougue, setAcougue] = useState([]);
  const [mercado, setMercado] = useState([]);
 
  const { resultados } = route.params;

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location.coords);

      const responseMercado = await api.get(
        `discover?at=${location.coords.latitude},${location.coords.longitude}&limit=3&q=supermercado&apiKey=gNuRT103voDtjaiyCV_rdniV-szQ4iKt7WpFbQBTT64`
      );

      const responseAcougue = await api.get(
        `discover?at=${location.coords.latitude},${location.coords.longitude}&limit=3&q=acougue&apiKey=gNuRT103voDtjaiyCV_rdniV-szQ4iKt7WpFbQBTT64`
      );
      setAcougue(responseAcougue.data.items);
      setMercado(responseMercado.data.items);
    })();
  }, []);

  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView>
      <View style={styles.background}>
        <View style={styles.whiteBackground}>
          <Text style={styles.text}>Gastos</Text>
        </View>
        <View style={styles.cor}>
          <MapItens data={resultados.outros.geral} />
          <View style={styles.viewAcompanhamentos}>
            <Text style={styles.acompanhamentos}>Acompahamentos</Text>
          </View>
          <MapItens data={resultados.outros.acompanhamentos} />
          <View style={styles.viewAcompanhamentos}>
            <Text style={styles.Locais}>Locais indicados para compra</Text>
          </View>
          {acougue.length == 0 && mercado.length == 0 ? (
            <View style={styles.indicator}>
              <ActivityIndicator size="large" color="#FFF" />
            </View>
          ) : null}
          {acougue.length != 0
            ? acougue.map((itens, index) => {
                return (
                  <View style={styles.view} key={index}>
                    <View style={styles.viewImage}>
                      <Image
                        source={require("../../../assets/carne.png")}
                        style={{ width: 30, height: 30 }}
                      />
                      <View style={styles.viewTittle}>
                        <Text style={styles.textAcougue}>{itens.title}</Text>
                        <Text style={styles.textAcougueGrande}>
                          {itens.address.street}, {itens.address.houseNumber},{" "}
                          {itens.address.district}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.viewContato}>
                      <Text style={styles.textAcougueGrande}>
                        Distância: {itens.distance}m
                      </Text>
                      {itens.contacts != undefined ? (
                        <Text style={styles.textAcougueGrande}>
                          Tel: {itens.contacts[0].phone[0].value}
                        </Text>
                      ) : null}
                    </View>
                  </View>
                );
              })
            : null}
          {mercado.length != 0
            ? mercado.map((itens, index) => {
                return (
                  <View style={styles.view} key={index}>
                    <View style={styles.viewImage}>
                      <Image
                        source={require("../../../assets/mercado.png")}
                        style={{ width: 30, height: 30 }}
                      />
                      <View style={styles.viewTittle}>
                        <Text style={styles.textAcougue}>{itens.title}</Text>
                        <Text style={styles.textAcougueGrande}>
                          {itens.address.street}, {itens.address.houseNumber},{" "}
                          {itens.address.district}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.viewContato}>
                      <Text style={styles.textAcougueGrande}>
                        Distância: {itens.distance}m
                      </Text>
                      {itens.contacts != undefined ? (
                        <Text style={styles.textAcougueGrande}>
                          Tel: {itens.contacts[0].phone[0].value}
                        </Text>
                      ) : null}
                    </View>
                  </View>
                );
              })
            : null}
       <Total data={resultados}/>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cor: {
    height: "100%",
    backgroundColor: "#340C0C",
  },
  text: {
    fontSize: 40,
    fontFamily: "Poppins_700Bold",
  },
  background: {
    height: "100%",
  },
  whiteBackground: {
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  viewContato: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  view: {
    padding: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#EED0A2",
  },
  acompanhamentos: {
    fontSize: 20,
    fontFamily: "Poppins_700Bold",
    color: "#fff",
  },
  viewAcompanhamentos: {
    height: 100,
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  viewTittle: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    marginLeft: 10,
  },
  textAcougue: {
    color: "#fff",
    fontFamily: "Poppins_700Bold",
    fontSize: 12,
    marginBottom: 3,
  },
  
  Locais: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "Poppins_700Bold",
  },
  textAcougueGrande: {
    color: "#fff",
    fontFamily: "Poppins_700Bold",
    fontSize: 9,
    marginBottom: 3,
  },
  viewImage: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  indicator: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
    paddingTop: 10,
  },
});
export default Outros;
