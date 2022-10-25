import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import api from "../../service/api";
import Constants from "expo-constants";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import "../../../assets/carvao.png";

import * as Location from "expo-location";

function Outros() {
  const [teste1, setTeste1] = useState([]);
  const [location, setLocation] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [acougue, setAcougue] = useState([]);
  const [mercado, setMercado] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      // let address = await Location.reverseGeocodeAsync(location);
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

  useEffect(() => {
    const teste =
      '{"carnes": [{"icon":  "../../../assets/vaca.png","nome": "picanha","kg": 10,"preco": 100},{"icon":  "../../../assets/vaca.png","nome": "linguiça","kg": 10,"preco": 100},{"icon":"../../../assets/vaca.png","nome": "coxinha","kg": 10,"preco": 100}],"bebidas": [{"icon":  "../../../assets/cerveja.png","nome": "cerveja","garrafas": 1,"preco": 30},{"icon":  "../../../assets/cerveja.png","nome": "agua","garrafas": 3,"preco": 10},{"icon":  "../../../assets/cerveja.png","nome": "refrigerante","garrafas": 2,"preco": 20}],"outros": {"geral": [{"icon": "carvao.png","nome": "carvão","kg": 10,"preco": 30},{"icon": "carvao.png","nome": "sal grosso","kg": 1,"preco": 10}],"acompanhamentos": [{"icon": "carvao.png","nome": "arroz","kg": 10,"preco": 50},{"icon": "carvao.png","nome": "farofa","kg": 1,"preco": 10},{"icon": "carvao.png","nome": "pão","kg": 1,"preco": 10}]},"locacao": {"rua": "blabla","numero": "10","bairro":"tururu"}}';
    const Json = JSON.parse(teste);

    setTeste1(Json);
  }, []); //eslint-disable-line

  // console.log(latitude);
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
          {teste1.length != 0
            ? teste1.outros.geral.map((itens, index) => {
                return (
                  <View style={styles.view} key={index}>
                    <View style={styles.teste}>
                      {/* <Image source={} style={{ width: 30, height: 30 }}/> */}
                      <Text style={styles.textMap}>{itens.nome}</Text>
                    </View>
                    <View style={styles.viewMap}>
                      <Text style={styles.textMapAside}>
                        Preço: {itens.preco}
                      </Text>
                      <Text style={styles.textMapAside}>Kg: {itens.kg}</Text>
                    </View>
                  </View>
                );
              })
            : null}
          <View style={styles.viewAcompanhamentos}>
            <Text style={styles.acompanhamentos}>Acompahamentos</Text>
          </View>
          {teste1.length != 0
            ? teste1.outros.acompanhamentos.map((itens, index) => {
                return (
                  <View style={styles.view} key={index}>
                    <View style={styles.teste}>
                      {/* <Image source={require(itens.icon)} style={{ width: 30, height: 30 }}/> */}
                      <Text style={styles.textMap}>{itens.nome}</Text>
                    </View>
                    <View style={styles.viewMap}>
                      <Text style={styles.textMapAside}>
                        Preço: {itens.preco}
                      </Text>
                      <Text style={styles.textMapAside}>Kg: {itens.kg}</Text>
                    </View>
                  </View>
                );
              })
            : null}
          <View style={styles.viewAcompanhamentos}>
            <Text style={styles.Locais}>Locais indicados para compra</Text>
          </View>
          {acougue.length != 0
            ? acougue.map((itens, index) => {
                return (
                  <View style={styles.view} key={index}>
                    <View style={styles.viewTittle}>
                      <Text style={styles.textAcougue}>{itens.title}</Text>
                          <Text style={styles.textAcougueGrande}>{itens.address.street}, {itens.address.houseNumber}, {itens.address.district}</Text>

                    </View>
                        <View style={styles.viewMap} >
                          <Text style={styles.textAcougueGrande}>Distância: {itens.distance}m</Text>
                        { itens.contacts != undefined ?
                            <Text style={styles.textAcougueGrande}>Tel: {itens.contacts[0].phone[0].value}</Text>
                          
                            : null}
                        </View>
          
                  </View>
                );
              })
            : null}
             {mercado.length != 0
            ? mercado.map((itens, index) => {
                return (
                  <View style={styles.view} key={index}>
                    <View style={styles.viewTittle}>
                      <Text style={styles.textAcougue}>{itens.title}</Text>
                          <Text style={styles.textAcougueGrande}>{itens.address.street}, {itens.address.houseNumber}, {itens.address.district}</Text>

                    </View>
                        <View style={styles.viewMap} >
                          <Text style={styles.textAcougueGrande}>Distância: {itens.distance}m</Text>
                        { itens.contacts != undefined ?
                            <Text style={styles.textAcougueGrande}>Tel: {itens.contacts[0].phone[0].value}</Text>
                          
                            : null}
                        </View>
          
                  </View>
                );
              })
            : null}
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
    height: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textMap: {
    color: "#fff",
    fontSize: 15,
    textTransform: "capitalize",
    marginLeft: 10,
    fontFamily: "Poppins_700Bold",
  },
  textMapAside: {
    fontFamily: "Poppins_700Bold",
    color: "#fff",
  },
  viewMap: {
    display: "flex",
    flexDirection: 'column',
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
  viewTittle:{
  display: 'flex',
  flexDirection: 'column',
  width:  '70%',
},
 textAcougue:{
   color: '#fff',
  fontFamily: 'Poppins_700Bold',
  fontSize: 12,
  marginBottom: 3,
},
 Locais:{
 fontSize: 18,
  color: '#fff',
  fontFamily: 'Poppins_700Bold',

},
viewCarne:{
  height: '100%',
  width: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
},
textAcougueGrande:{
  color: '#fff',
  fontFamily: 'Poppins_700Bold',
  fontSize: 9,
  marginBottom: 3,
}
});
export default Outros;