import { View, Text, Image, StyleSheet } from "react-native";

export default function Picanha() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Picanha</Text>
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
        <Text>• 1 unidade de picanha bovina </Text>
        <Text>• Óleo de soja a gosto</Text>
        <Text>• Alho amassado(s) a gosto</Text>
        <Text>• Sal a gosto</Text>
      </View>
      <Text style={styles.titleModoPreparo}>Modo de preparo</Text>
      <View style={styles.listmodoPreparo}>
        <Text style={styles.textListModoPreparo}>
          1 Salpique a carne com um sal médio (sal grosso batido no pilão). A
          parte, faça um molho de óleo com alho socado. Passe a carne neste
          molho e escorra antes de levá-la para a brasa. Ao virar a carne, volte
          a salpicá-la e coloque um pouco do molho (sem que escorra muito para o
          braseiro). Para saber se a carne já está macia use a parte lateral do
          garfo ou a parte sem corte da faca. Não fure a carne, pois ela perde o
          sangue e resseca (vire-a com a lateral da faca ou uma espátula
          própria).
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 330,
    height: 600,
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
    maxWidth: 260,
  },
  textListModoPreparo: {
    marginTop: 5,
  },
});
