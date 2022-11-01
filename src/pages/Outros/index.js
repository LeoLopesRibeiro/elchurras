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

import * as Location from "expo-location";

function Outros({ route }) {
  const [errorMsg, setErrorMsg] = useState(null);
  const [acougue, setAcougue] = useState([]);
  const [mercado, setMercado] = useState([]);
  const images = {
    carvao: require("../../../assets/carvao.png"),
    sal: require("../../../assets/sal.png"),
    arroz: require("../../../assets/arroz.png"),
    farofa: require("../../../assets/farofa.png"),
    pao: require("../../../assets/pao.png"),
  };

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
          {resultados.length != 0
            ? resultados.outros.geral.map((itens, index) => {
                return (
                  <View style={styles.view} key={index}>
                    <View style={styles.teste}>
                      <Image
                        source={images[itens.icon]}
                        style={{ width: 30, height: 30 }}
                      />
                      <Text style={styles.textMap}>{itens.nome}</Text>
                    </View>
                    <View style={styles.viewTeste}>
                        <View style={styles.viewMap}>
                          <View style={styles.viewTextLeft}>
                            <Text style={styles.textMapAside}>Preço:</Text>
                          </View>
                          <View style={styles.viewMapAside}>
                            <Text style={styles.textMapAside}>
                              {itens.preco}
                            </Text>
                          </View>
                          </View>
                          <View style={styles.viewMap}>
                            <View style={styles.viewTextLeft}>
                              <Text style={styles.textMapAside}>Kg:</Text>
                            </View>
                            <View style={styles.viewMapAside}>
                              <Text style={styles.textMapAside}>
                                {itens.kg}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                );
              })
            : null}
          <View style={styles.viewAcompanhamentos}>
            <Text style={styles.acompanhamentos}>Acompahamentos</Text>
          </View>
          {resultados.length != 0
            ? resultados.outros.acompanhamentos.map((itens, index) => {
                return (
                  <View style={styles.view} key={index}>
                    <View style={styles.teste}>
                      <Image
                        source={images[itens.icon]}
                        style={{ width: 30, height: 30 }}
                      />
                      <Text style={styles.textMap}>{itens.nome}</Text>
                    </View>
                    <View style={styles.viewTeste}>
                        <View style={styles.viewMap}>
                          <View style={styles.viewTextLeft}>
                            <Text style={styles.textMapAside}>Preço:</Text>
                          </View>
                          <View style={styles.viewMapAside}>
                            <Text style={styles.textMapAside}>
                              {itens.preco}
                            </Text>
                          </View>
                          </View>
                          <View style={styles.viewMap}>
                            <View style={styles.viewTextLeft}>
                              <Text style={styles.textMapAside}>Kg:</Text>
                            </View>
                            <View style={styles.viewMapAside}>
                              <Text style={styles.textMapAside}>
                                {itens.kg}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                );
              })
            : null}
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
                    <View style={styles.viewMap}>
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
                    <View style={styles.viewMap}>
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
          <View style={styles.ViewResultado}>
            <View style={styles.ViewTotal}>
              <Text style={styles.textTotal}>Total: </Text>
              <Text style={styles.textNumero}>{(resultados.preco_total).toFixed(2)}</Text>
            </View>
            <View style={styles.viewReceitas}></View>
          </View>
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
  textMap: {
    color: '#fff',
    fontSize: 15,
    textTransform: 'capitalize',
    marginLeft: 10,
    fontFamily: 'Poppins_700Bold',
  },
  textMapAside: {
    fontFamily: 'Poppins_700Bold',
    color: '#fff',
  },
  viewTeste:{
    justifyContent: 'space-between',
     width: '35%'
  },
  viewTextLeft: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  viewMap: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewMapAside: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  teste: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
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
  viewCarne: {
    height: "100%",
    width: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  textTotal: {
    color: "#fff",
    fontSize: 25,
    textTransform: "capitalize",
    fontFamily: "Poppins_700Bold",
  },
  receitas: {
    color: "#fff",
    fontFamily: "Poppins_700Bold",
  },
  ViewResultado: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20,
    paddingRight: 10,
    paddingLeft: 20,
  },
  ViewTotal: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  viewReceitas: {
    display: "flex",
    justifyContent: "flex-end",
  },
  viewAlinhamento: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  textNumero: {
    color: "#ffffff",
    fontFamily: "Poppins_700Bold",
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
