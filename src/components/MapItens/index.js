import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";

export default function MapItens({ data }) {
  const images = {
    bovino: require("../../../assets/vaca.png"),
    suino: require("../../../assets/porco.png"),
    frango: require("../../../assets/galinha.png"),
    agua: require("../../../assets/agua.png"),
    cerveja: require("../../../assets/cerveja.png"),
    refri: require("../../../assets/refrigerante.png"),
    vinho: require("../../../assets/vinho.png"),
    whisky: require("../../../assets/whisky.png"),
    suco: require("../../../assets/suco.png"),
    carvao: require("../../../assets/carvao.png"),
    sal: require("../../../assets/sal.png"),
    arroz: require("../../../assets/arroz.png"),
    farofa: require("../../../assets/farofa.png"),
    pao: require("../../../assets/pao.png"),
  };

  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      {data != undefined
        ? data.map((itens, index) => {
            return (
              <View style={styles.view} key={index}>
                <View style={styles.teste}>
                  <Image
                    source={images[itens.icon]}
                    style={{ width: 30, height: 30 }}
                  />
                  <Text style={styles.textMap}>{itens.nome}</Text>
                </View>

        
                  {itens.kg !== undefined ? (
                  <View style={styles.format2}>
                    
                      <View style={styles.viewTextMap}>
                        <View style={styles.viewTextLeft}>
                          <Text style={styles.textMapAside}>Preço:</Text>
                        </View>
                        <View style={styles.viewMapAside}>
                          <Text style={styles.textMapAside}>
                            {Intl.NumberFormat("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            }).format(itens.preco)}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.viewTextMap}>
                        <View style={styles.viewTextLeft}>
                          <Text style={styles.textMapAside}>Kg:</Text>
                        </View>
                        <View style={styles.viewMapAside}>
                          <Text style={styles.textMapAside}>
                            {Intl.NumberFormat("pt-BR").format(itens.kg)}
                          </Text>
                        </View>
                      </View>
                    </View>
                   
                  ) : (
                    <View style={styles.format}>
                    
                    <View style={styles.viewTextMap}>
                      <View style={styles.viewTextLeft}>
                        <Text style={styles.textMapAside}>Preço:</Text>
                      </View>
                      <View style={styles.viewMapAside}>
                        <Text style={styles.textMapAside}>
                          {Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          }).format(itens.preco)}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.viewTextMap}>
                      <View style={styles.viewTextLeft}>
                        <Text style={styles.textMapAside}><Text style={styles.textMapAside}>
                          Unidades (
                          {itens.litragem < 1000
                            ? itens.litragem
                            : itens.litragem / 1000}{" "}
                          {itens.litragem < 1000 ? "ml" : "L"}):
                        </Text></Text>
                      </View>
                      <View style={styles.viewMapAside}>
                        <Text style={styles.textMapAside}>
                          {Intl.NumberFormat("pt-BR").format(itens.garrafa)}
                        </Text>
                      </View>
                    </View>
                  </View>
                 
                  )}
                </View>
              
            );
          })
        : null}
    </View>
  );
}
const styles = StyleSheet.create({
  textMap: {
    color: "#fff",
    display: "flex",
    fontSize: 15,
    textTransform: "capitalize",
    marginLeft: 10,
    fontFamily: "Poppins_700Bold",
  },
  textMapAside: {
    fontFamily: "Poppins_700Bold",
    color: "#fff",
  },
  viewTeste: {
    justifyContent: "space-between",
    flexDirection: 'column',
    width: "100%",
  },
  viewTextLeft: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  viewMap: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewMapAside: {
    display: "flex",
    alignItems: "flex-end",
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
  format:{
    justifyContent: "space-between",
    display: 'flex',
    width: '50%',
  },
  format2:{
    justifyContent: "space-between",
    display: 'flex',
    width: '40%',
  },
  viewTextMap:{
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    
  }
});
