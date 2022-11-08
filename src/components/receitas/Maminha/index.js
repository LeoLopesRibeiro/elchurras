import { View, Text, Image, StyleSheet } from "react-native";

export default function Maminha() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Maminha</Text>
      <View style={styles.divIcons}>
        <View style={styles.divTempo}>
          <Image
            source={require("../../../../assets/watch.png")}
            style={styles.icon}
          />
          <Text style={styles.textIcon}>20min</Text>
        </View>
        <View style={styles.divPorcao}>
          <Image
            source={require("../../../../assets/prato.png")}
            style={styles.icon}
          />
          <Text style={styles.textIcon}>4 porções</Text>
        </View>
      </View>
      <Text style={styles.titleIngredientes}>Ingredientes</Text>
      <View style={styles.listIngredientes}>
        <Text>• 250 g de alcatra em cubos </Text>
        <Text>• 1 colher (chá) de MAGGI® Gril</Text>
        <Text>• 2 colheres (sopa) de molho inglês</Text>
        <Text>• 1 cenoura cozida em rodelas</Text>
        <Text>• 1 batata cozida em cubos</Text>
        <Text>• 4 azeitonas verdes sem caroço</Text>
      </View>
      <Text style={styles.titleModoPreparo}>Modo de preparo</Text>
      <View style={styles.listmodoPreparo}>
        <Text style={styles.textListModoPreparo}>
            <Text style={styles.strong}>1 </Text>
              Em um recipiente tempere a carne com o MAGGI Gril e o molho inglês.{" "}
        </Text>
        <Text style={styles.textListModoPreparo}>
          <Text style={styles.strong}>2 </Text>
            Espete, alternadamente, cubos de carne, cenoura, batata e azeitona
            em palitos para churrasco.{" "}
        </Text>
        <Text style={styles.textListModoPreparo}>
          <Text style={styles.strong}>3 </Text>
            Coloque-os em uma forma refratária e leve-os para assar no
            micro-ondas por 10 minutos, em potência alta. Sirva a seguir
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 330,
    minHeight: 550,
    borderRadius: 10,
    backgroundColor: "#EED0A2",
    marginTop: 50,
    marginBottom: 50,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
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
  },
  titleIngredientes: {
    fontWeight: "bold",
    padding: 20,
  },
  listIngredientes: {
    marginLeft: 30,
  },
  titleModoPreparo: {
    fontWeight: "bold",
    padding: 20,
  },
  listmodoPreparo: {
    marginLeft: 30,
    maxWidth: 250,
  },
  textListModoPreparo: {
    marginTop: 5,
  },
  strong: {
    fontWeight: "bold",
  }
});
