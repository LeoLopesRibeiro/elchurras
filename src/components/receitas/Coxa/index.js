import { View, Text, Image, StyleSheet } from "react-native";

export default function Coxa() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Coxa Frango</Text>
      <View style={styles.divIcons}>
        <View style={styles.divTempo}>
          <Image
            source={require("../../../../assets/watch.png")}
            style={styles.icon}
          />
          <Text style={styles.textIcon}>50min</Text>
        </View>
        <View style={styles.divPorcao}>
          <Image
            source={require("../../../../assets/prato.png")}
            style={styles.icon}
          />
          <Text style={styles.textIcon}>6 porções</Text>
        </View>
      </View>
      <Text style={styles.titleIngredientes}>Ingredientes</Text>
      <View style={styles.listIngredientes}>
        <Text>• 1 kg coxinha da asa do frango </Text>
        <Text>• 1 saquinho de sopa de cebola </Text>
        <Text>• 300 g de alho bem picadinho </Text>
        <Text>• 1 frasco de mostarda mostarda </Text>
        <Text>• Sal a gosto </Text>
        <Text>• Molho de pimenta </Text>
      </View>
      <Text style={styles.titleModoPreparo}>Modo de preparo</Text>
      <View style={styles.listmodoPreparo}>
        <Text style={styles.textListModoPreparo}>
          <Text style={styles.strong}>1 </Text>
            Tempere as coxas a gosto.
        </Text>
        <Text style={styles.textListModoPreparo}>
          <Text style={styles.strong}>2 </Text>
            Colocar na churrasqueira e deixar assando por cerca de 20minutos. É
            importante virar o frango, para que ele asse por completo.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 330,
    height: 500,
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
    marginTop: 10,
  },
  strong: {
    fontWeight: "bold",
  }
});
