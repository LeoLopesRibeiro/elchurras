import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function ModalChurras({ genPdf, delChurras }) {
  return (
    <View style={styles.modalChurras}>
      <View>
        <TouchableOpacity style={styles.botao}>
          <View style={styles.viewBotao}>
            <Text style={styles.textBotoes} onPress={() => genPdf()}>
              Compartilhar{" "}
            </Text>
            <Image
              source={require("../../../assets/share.png")}
              style={{ width: 15, height: 15, marginBottom: 5 }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.botao} onPress={() => delChurras()}>
          <View style={styles.viewBotao}>
            <Text style={styles.textBotoes}>Deletar churras
            
            </Text>
            <Image
              source={require("../../../assets/lixo.png")}
              style={{ width: 15, height: 15, marginBottom: 5 }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalChurras: {
    backgroundColor: "#FFF",
    width: "90%",
    height: 110,
    padding: 10,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  botao: {
    backgroundColor: "#DF1D1D",
    borderRadius: 10,
    padding: 5,
    display: "flex",
    width: "100%",
  },
  viewBotao: {
    flexDirection: "row",
    width: '100%',
    alignItems: "center",
    justifyContent: "center"
  },
  textBotoes: {
    color: "#FFF",
    fontFamily: "Poppins_700Bold",
    marginRight: 8
  },
});
