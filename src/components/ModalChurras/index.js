import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function ModalChurras({ genPdf, delChurras }) {
  return (
    <View style={styles.modalChurras}>
      <View>
        <TouchableOpacity style={styles.botaoCompartilhar}>
          <Text style={styles.textBotoes} onPress={() => genPdf()}>
            Compartilhar{" "}
            <Image
              source={require("../../../assets/share.png")}
              style={{ width: 15, height: 15 }}
            />
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.botaoCompartilhar}
          onPress={() => delChurras()}
        >
          <Text style={styles.textBotoes}>Deletar churras</Text>
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
  botaoCompartilhar: {
    backgroundColor: "#DF1D1D",
    borderRadius: 10,
    padding: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  textBotoes: {
    color: "#FFF",
    fontFamily: "Poppins_700Bold",
    width: "100%",
    textAlign: "center",
  },
});
