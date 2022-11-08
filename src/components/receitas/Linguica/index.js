import { View, Text, Image, StyleSheet } from "react-native";

export default function Linguica() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Linguiça</Text>
      <View style={styles.divIcons}>
        <View style={styles.divTempo}>
          <Image
            source={require("../../../../assets/watch.png")}
            style={styles.icon}
          />
          <Text style={styles.textIcon}>17min</Text>
        </View>
        <View style={styles.divPorcao}>
          <Image
            source={require("../../../../assets/prato.png")}
            style={styles.icon}
          />
          <Text style={styles.textIcon}>5 porções</Text>
        </View>
      </View>
      <Text style={styles.titleIngredientes}>Ingredientes</Text>
      <View style={styles.listIngredientes}>
        <Text>• 1 kg de linguiça </Text>
      </View>
      <Text style={styles.titleModoPreparo}>Modo de preparo</Text>
      <View style={styles.listmodoPreparo}>
        <Text style={styles.textListModoPreparo}>
          <Text style={styles.strong}>1 </Text>
            Para fazer o churrasco é a coisa mais simples que tem: é só deixar
            grelhar a 15cm da brasa.
        </Text>
        <Text style={styles.textListModoPreparo}>
          <Text style={styles.strong}>2 </Text>
            Não precisa furar e nem colocar outro tempero.
        </Text>
        <Text style={styles.textListModoPreparo}>
          <Text style={styles.strong}>3 </Text>
            Sirva com um pão bem fresquinho e bom apetite!.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 330,
    height: 450,
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
