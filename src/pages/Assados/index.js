import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import "../../../assets/vaca.png";

function Assados({ navigation }) {
  function goToReceitas() {
    navigation.navigate("Receitas");
  }

  const images = {
    bovino: require("../../../assets/vaca.png"),
    suino: require("../../../assets/porco.png"),
    frango: require("../../../assets/galinha.png"),
  };

  useEffect(() => {
    const teste =
      '{"carnes": [{"icon":  "bovino","nome": "picanha","kg": 10,"preco": 100},{"icon":  "suino","nome": "linguiça","kg": 10,"preco": 100},{"icon":"frango","nome": "coxinha","kg": 10,"preco": 100}],"bebidas": [{"icon":  "./assets/cerveja","nome": "cerveja","garrafas": 1,"preco": 30},{"icon":  "./assets/agua","nome": "agua","garrafas": 3,"preco": 10},{"icon":  "./assets/refrigerante","nome": "refrigerante","garrafas": 2,"preco": 20}],"outros": {"geral": [{"icon": "./assets/carvao","nome": "carvão","kg": 10,"preco": 30},{"icon": "./assets/sal_grosso","nome": "sal grosso","kg": 1,"preco": 10}],"acompanhamentos": [{"icon": "./assets/arroz","nome": "arroz","kg": 10,"preco": 50},{"icon": "./assets/farofa","nome": "farofa","kg": 1,"preco": 10},{"icon": "./assets/pao","nome": "pão","kg": 1,"preco": 10}]},"locacao": {"rua": "blabla","numero": "10","bairro":"tururu"}}';
    const Json = JSON.parse(teste);

    setTeste1(Json);
  }, []);
  console.log(teste1);

  const [teste1, setTeste1] = useState([]);
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.background}>
      <View style={styles.whiteBackground}>
        <Text style={styles.text}>Gastos</Text>
      </View>
      <View style={styles.cor}>
        <View style={styles.viewAlinhamento}>
          <View>
            {teste1.length != 0
              ? teste1.carnes.map((itens, index) => {
                  return (
                    <View style={styles.view} key={index}>
                      <View style={styles.teste}>
                        <Image
                          source={images[itens.icon]}
                          style={{ width: 30, height: 30 }}
                        />
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
          </View>

          <View style={styles.ViewResultado}>
            <View style={styles.viewReceitas}>
              <TouchableOpacity style={styles.borderReceitas}  onPress={goToReceitas}>
              <Text style={styles.receitas}>Receitas</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.ViewTotal}>
              <Text style={styles.textTotal}>Total: </Text>
              <Text style={styles.textNumero}>R$: 90,00 </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cor: {
    height: '80%',
    backgroundColor: "#340C0C",
  },
  text: {
    fontSize: 40,
    fontFamily: "Poppins_700Bold",
  },
  background: {
    height: "100%",
    backgroundColor: "#340C0C",
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  whiteBackground: {
    backgroundColor: '#fff',
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
  textTotal: {
    color: "#fff",
    fontSize: 25,
    textTransform: "capitalize",
    marginLeft: 10,
    fontFamily: "Poppins_700Bold",
  },
  receitas: {
    color: "#fff",
    fontFamily: "Poppins_700Bold",
  },
  ViewResultado: {
    display: "flex",
    padding: 10,
    justifyContent: "space-between",
  },
  ViewTotal: {
    display: "flex",
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewReceitas: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: 'flex-end',
  },
  viewAlinhamento:{
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textNumero:{
    color: "#ffffff",
    fontFamily: "Poppins_700Bold",
    
  },
  borderReceitas:{
    width: 100,
    alignItems: 'center',
    backgroundColor: '#DF1D1D',
    padding: 8,
    marginBottom: 20,
    borderRadius: 10,
    }
});
export default Assados;
