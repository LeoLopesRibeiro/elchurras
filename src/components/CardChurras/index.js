import {
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  View,
} from "react-native";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useState, useEffect } from "react";
import ModalChurras from "../ModalChurras";
import GerarPDF from "../../functions/GerarPDF";

export default function CardChurras({ churras, goTo, delChurras }) {
  const [statusModal, setStatusModal] = useState(false);

  const [modal, setModal] = useState(null);

  useEffect(() => {
    if (statusModal) {
      setModal(
        <ModalChurras
          genPdf={() =>
            GerarPDF(churras.custos_outros, churras.data, churras.responsavel)
          }
          delChurras={() => delChurras()}
        />
      );
    } else {
      setModal(null);
    }
  }, [statusModal]); // eslint-disable-line

  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.churrasCriado}>
      <Image
        source={require("../../../assets/carne.png")}
        style={styles.imagemCarne}
      />
      <Text style={styles.dataChurras}>
        Data do evento: {churras.data.dia}/{churras.data.mes}/{churras.data.ano}
      </Text>
      <Text style={styles.responsavelChurras}>
        Responsável: {churras.responsavel}
      </Text>
      <View style={styles.botoes}>
        <TouchableOpacity
          onPress={() => goTo(churras.custos_outros)}
          style={styles.botaoVer}
        >
          <Text style={styles.textBotoes}>Ver churrasco</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.moreButton}>
        <View>
          <TouchableOpacity
            onPress={() =>
              statusModal ? setStatusModal(false) : setStatusModal(true)
            }
          >
            <Image
              source={require("../../../assets/pontos.png")}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>
        {modal}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  churrasCriado: {
    width: "80%",
    backgroundColor: "#340C0C",
    padding: 20,
    marginBottom: 20,
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
  },
  imagemCarne: {
    width: 52,
    height: 43,
    marginBottom: 20,
    marginTop: 10,
  },
  dataChurras: {
    color: "#FFF",
    fontSize: 14,
    fontFamily: "Poppins_700Bold",
  },
  responsavelChurras: {
    color: "#FFF",
    fontFamily: "Poppins_700Bold",
    fontSize: 14,
    textTransform: "capitalize",
    marginTop: 10,
  },
  botoes: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  textBotoes: {
    color: "#FFF",
    fontFamily: "Poppins_700Bold",
  },
  botaoVer: {
    backgroundColor: "#DF1D1D",
    padding: 5,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  moreButton: {
    position: "absolute",
    right: 15,
    top: 6,
    width: "100%",
    alignItems: "flex-end",
  },
});
