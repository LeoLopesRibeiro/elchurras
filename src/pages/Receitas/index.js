import { View, Text, StyleSheet, ScrollView } from "react-native";
import Cupim from "../../components/receitas/Cupim/index";
import Picanha from "../../components/receitas/Picanha";
import Lombo from "../../components/receitas/Lombo";
import Maminha from "../../components/receitas/Maminha";
import Linguica from "../../components/receitas/Linguica";
import Coxa from "../../components/receitas/Coxa";
import Costela from "../../components/receitas/Costela";
import Coracao from "../../components/receitas/Coracao";
import Asa from "../../components/receitas/Asa";

export default function Receitas({ route }) {
  const { carnes } = route.params;

  const receitas = {
    Asa: <Asa />,
    Maminha: <Maminha />,
    Cupim: <Cupim />,
    Picanha: <Picanha />,
    Linguiça: <Linguica />,
    Costela: <Costela />,
    Lombo: <Lombo />,
    Coxa: <Coxa />,
    Coração: <Coracao />,
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.whiteBackground}>
          <Text style={styles.textReceitas}>Receitas</Text>
        </View>
        {carnes.map((carne, index) => {
          return <View key={index}>{receitas[carne]}</View>;
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#340C0C",
  },
  whiteBackground: {
    height: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  textReceitas: {
    fontWeight: "bold",
    fontSize: 32,
  },
});