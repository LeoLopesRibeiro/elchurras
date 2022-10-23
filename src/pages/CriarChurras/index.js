import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import homemLogo from "../../../assets/homem.png";
import mulherLogo from "../../../assets/mulher.png";
import criancaLogo from "../../../assets/crianca.png";
import { useState } from "react";

export default function CriarChurras() {
  const [countHomem, setCountHomem] = useState(1);
  const [countMulher, setCountMulher] = useState(1);
  const [countCrianca, setCountCrianca] = useState(1);

  function calcularChurras() {}

  return (
    <View style={styles.criarChurras}>
      <View style={styles.viewConvidados}>
        <Text style={styles.viewTitulo}>Convidados</Text>
        <View style={styles.inputs}>
          <View style={styles.viewInput}>
            <View style={styles.viewImage}>
              <Image style={styles.inputImage} source={homemLogo} />
            </View>
            <View style={styles.inputField}>
              <TouchableOpacity
                onPress={() =>
                  setCountHomem(countHomem != 1 ? countHomem - 1 : 1)
                }
              >
                <Text style={styles.add_dec}>-</Text>
              </TouchableOpacity>
              <TextInput
                style={styles.input}
                value={`${countHomem}`}
                onChangeText={(text) => {
                  setCountHomem(Number(text));
                }}
                placeholderTextColor="#DEDEDE"
                keyboardType="number-pad"
                maxLength={3}
              />
              <TouchableOpacity
                onPress={() =>
                  setCountHomem(countHomem != 999 ? countHomem + 1 : 999)
                }
              >
                <Text style={styles.add_dec}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.viewInput}>
            <View style={styles.viewImage}>
              <Image style={styles.inputImage} source={mulherLogo} />
            </View>
            <View style={styles.inputField}>
              <TouchableOpacity
                onPress={() =>
                  setCountMulher(countMulher != 1 ? countMulher - 1 : 1)
                }
              >
                <Text style={styles.add_dec}>-</Text>
              </TouchableOpacity>
              <TextInput
                style={styles.input}
                value={`${countMulher}`}
                onChangeText={(text) => {
                  setCountMulher(Number(text));
                }}
                placeholderTextColor="#DEDEDE"
                keyboardType="number-pad"
                maxLength={3}
              />
              <TouchableOpacity
                onPress={() =>
                  setCountMulher(countMulher != 999 ? countMulher + 1 : 999)
                }
              >
                <Text style={styles.add_dec}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.viewInput}>
            <View style={styles.viewImage}>
              <Image style={styles.inputImage} source={criancaLogo} />
            </View>
            <View style={styles.inputField}>
              <TouchableOpacity
                onPress={() =>
                  setCountCrianca(countCrianca != 1 ? countCrianca - 1 : 1)
                }
              >
                <Text style={styles.add_dec}>-</Text>
              </TouchableOpacity>
              <TextInput
                style={styles.input}
                value={`${countCrianca}`}
                onChangeText={(text) => {
                  setCountCrianca(Number(text));
                }}
                placeholderTextColor="#DEDEDE"
                keyboardType="number-pad"
                maxLength={3}
              />
              <TouchableOpacity
                onPress={() =>
                  setCountCrianca(countCrianca != 999 ? countCrianca + 1 : 999)
                }
              >
                <Text style={styles.add_dec}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.viewCarnes}></View>
      <View style={styles.viewBebidas}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  criarChurras: {
    display: "flex",
    height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingTop: 30,
  },
  viewConvidados: {
    display: "flex",
    alignItems: "center",
    width: "90%",
    height: 250,
    backgroundColor: "#340C0C",
    borderRadius: 20,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  viewTitulo: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
  },
  inputs: {
    marginTop: 30,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    height: 90,
    backgroundColor: "#FFF",
    borderRadius: 50,
  },
  inputImage: {
    width: 80,
    height: 80,
  },
  inputField: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  add_dec: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
  },
});
