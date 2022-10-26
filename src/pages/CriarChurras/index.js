import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import Checkbox from "expo-checkbox";
import api from "../../services/api";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function CriarChurras() {
  const [countHomem, setCountHomem] = useState(0);
  const [countMulher, setCountMulher] = useState(0);
  const [countCrianca, setCountCrianca] = useState(0);

  const [date, setDate] = useState(new Date());
  const [exibirCalendario, setExibirCalendario] = useState(false);

  function dateHandler(event, selectedDate) {
    setDate(selectedDate);
    setExibirCalendario(false)
  }

  function showDatepicker() {
    setExibirCalendario(true);
  }

  const images = {
    homem: require("../../../assets/homem.png"),
    mulher: require("../../../assets/mulher.png"),
    crianca: require("../../../assets/crianca.png"),
  };

  const jsonteste = JSON.parse(
    '{"carnes": [{"icon":"./assets/carne","nome": "picanha","kg": 10,"preco": 100},{"icon":  "./assets/carne","nome": "linguiça","kg": 10,"preco": 100},{"icon":"./assets/carne","nome": "coxinha","kg": 10,"preco": 100}],"bebidas": [{"icon":"./assets/cerveja","nome": "cerveja","garrafas": 1,"preco": 30},{"icon":"./assets/agua","nome": "agua","garrafas": 3,"preco": 10},{	"icon":  "./assets/refrigerante","nome": "refrigerante","garrafas": 2,"preco": 20}],"outros": {"geral": [{	"icon": "homem","nome": "carvão","kg": 10,"preco": 30},{	"icon": "./assets/sal_grosso","nome": "sal grosso","kg": 1,"preco": 10}],"acompanhamentos": [{	"icon": "./assets/arroz","nome": "arroz","kg": 10,"preco": 50},{	"icon": "./assets/farofa","nome": "farofa","kg": 1,"preco": 10},{	"icon": "./assets/pao","nome": "pão","kg": 1,"preco": 10}]},"locacao": {"rua": "miguel martins mendes","numero": "10","bairro": "jardim santa tereza"}}'
  );

  const icon = jsonteste.outros.geral[0].icon;

  const [bovino, setBovino] = useState({
    maminha: {
      value: false,
    },
    cupim: {
      value: false,
    },
    picanha: {
      value: false,
    },
  });

  const [suino, setSuino] = useState({
    linguica: {
      nome: "Linguiça",
      value: false,
    },
    paleta: {
      value: false,
    },
    bisteca: {
      value: false,
    },
  });

  const [frango, setFrango] = useState({
    coxa: {
      value: false,
    },
    coracao: {
      nome: "Coração",
      value: false,
    },
    asa: {
      value: false,
    },
  });

  const [bebidas, setBebidas] = useState({
    refrigerante: {
      value: false,
    },
    cerveja: {
      value: false,
    },
    agua: {
      nome: "Água",
      value: false,
    },
    suco: {
      value: false,
    },
    vinho: {
      value: false,
    },
    whisky: {
      value: false,
    },
  });

  const [localidade, setLocalidade] = useState({
    rua: "",
    numero: "",
    bairro: "",
  });

  async function calcularChurras() {
    const response = await api.get(
      `geocode?q=${localidade.numero}+${localidade.rua}+${localidade.bairro}+embu das artes&lang=pt-br&apiKey=gNuRT103voDtjaiyCV_rdniV-szQ4iKt7WpFbQBTT64`
    );

    console.log(response.data.items[0]);
  }

  return (
    <ScrollView>
      <View style={styles.criarChurras}>
        <View style={styles.viewConvidados}>
          <Text style={styles.viewTitulo}>Convidados</Text>
          <View style={styles.inputs}>
            <View style={styles.viewInput}>
              <View style={styles.viewImage}>
                <Image
                  style={styles.inputImage}
                  source={require("../../../assets/homem.png")}
                />
              </View>
              <View style={styles.inputField}>
                <TouchableOpacity
                  onPress={() =>
                    setCountHomem(countHomem != 0 ? countHomem - 1 : 0)
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
                <Image
                  style={styles.inputImage}
                  source={require("../../../assets/mulher.png")}
                />
              </View>
              <View style={styles.inputField}>
                <TouchableOpacity
                  onPress={() =>
                    setCountMulher(countMulher != 0 ? countMulher - 1 : 0)
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
                <Image
                  style={styles.inputImage}
                  source={require("../../../assets/crianca.png")}
                />
              </View>
              <View style={styles.inputField}>
                <TouchableOpacity
                  onPress={() =>
                    setCountCrianca(countCrianca != 0 ? countCrianca - 1 : 0)
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
                    setCountCrianca(
                      countCrianca != 999 ? countCrianca + 1 : 999
                    )
                  }
                >
                  <Text style={styles.add_dec}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.viewCarnes}>
          <Text style={styles.viewTitulo}>Carnes</Text>
          <View style={styles.inputCarnes}>
            <View style={styles.carne}>
              <Text style={styles.carneTitulo}>Bovino:</Text>
              <View style={styles.checkboxes}>
                {Object.keys(bovino).map((key) => {
                  return (
                    <View key={key} style={styles.checkboxLabel}>
                      <Checkbox
                        value={bovino[key].value}
                        onValueChange={() => {
                          if (bovino[key].value) {
                            setBovino({
                              ...bovino,
                              [key]: { ...bovino[key], value: false },
                            });
                          } else {
                            setBovino({
                              ...bovino,
                              [key]: { ...bovino[key], value: true },
                            });
                          }
                        }}
                        color={bovino[key].value ? "#EED0A2" : undefined}
                      />
                      <Text style={styles.bebidaNome}>
                        {bovino[key].nome ? bovino[key].nome : key}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
            <View style={styles.carne}>
              <Text style={styles.carneTitulo}>Suino:</Text>
              <View style={styles.checkboxes}>
                {Object.keys(suino).map((key) => {
                  return (
                    <View key={key} style={styles.checkboxLabel}>
                      <Checkbox
                        value={suino[key].value}
                        onValueChange={() => {
                          if (suino[key].value) {
                            setSuino({
                              ...suino,
                              [key]: { ...suino[key], value: false },
                            });
                          } else {
                            setSuino({
                              ...suino,
                              [key]: { ...suino[key], value: true },
                            });
                          }
                        }}
                        color={suino[key].value ? "#EED0A2" : undefined}
                      />
                      <Text style={styles.bebidaNome}>
                        {suino[key].nome ? suino[key].nome : key}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
            <View style={styles.carne}>
              <Text style={styles.carneTitulo}>Frango:</Text>
              <View style={styles.checkboxes}>
                {Object.keys(frango).map((key) => {
                  return (
                    <View key={key} style={styles.checkboxLabel}>
                      <Checkbox
                        value={frango[key].value}
                        onValueChange={() => {
                          if (frango[key].value) {
                            setFrango({
                              ...frango,
                              [key]: { ...frango[key], value: false },
                            });
                          } else {
                            setFrango({
                              ...frango,
                              [key]: { ...frango[key], value: true },
                            });
                          }
                        }}
                        color={frango[key].value ? "#EED0A2" : undefined}
                      />
                      <Text style={styles.bebidaNome}>
                        {frango[key].nome ? frango[key].nome : key}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
        <View style={styles.viewBebidas}>
          <Text style={styles.viewTitulo}>Bebidas</Text>
          <View style={styles.checkboxesBebidas}>
            <View style={styles.checkboxesLeft}>
              {Object.keys(bebidas).map((key, index) => {
                if (index < 3) {
                  return (
                    <View key={key} style={styles.checkboxLabelBebidas}>
                      <Checkbox
                        value={bebidas[key].value}
                        onValueChange={() => {
                          if (bebidas[key].value) {
                            setBebidas({
                              ...bebidas,
                              [key]: { ...bebidas[key], value: false },
                            });
                          } else {
                            setBebidas({
                              ...bebidas,
                              [key]: { ...bebidas[key], value: true },
                            });
                          }
                        }}
                        color={bebidas[key].value ? "#EED0A2" : undefined}
                      />
                      <Text style={styles.bebidaNome}>
                        {bebidas[key].nome ? bebidas[key].nome : key}
                      </Text>
                    </View>
                  );
                }
              })}
            </View>
            <View style={styles.checkboxesRight}>
              {Object.keys(bebidas).map((key, index) => {
                if (index > 2) {
                  return (
                    <View key={key} style={styles.checkboxLabelBebidas}>
                      <Checkbox
                        value={bebidas[key].value}
                        onValueChange={() => {
                          if (bebidas[key].value) {
                            setBebidas({ ...bebidas, [key]: { value: false } });
                          } else {
                            setBebidas({ ...bebidas, [key]: { value: true } });
                          }
                        }}
                        color={bebidas[key].value ? "#EED0A2" : undefined}
                      />
                      <Text style={styles.bebidaNome}>{key}</Text>
                    </View>
                  );
                }
              })}
            </View>
          </View>
        </View>
        <View style={styles.viewOutros}>
          <Text style={styles.viewTitulo}>Outros</Text>
          <View style={styles.viewData}>
            <Text style={styles.textLocalidade}>Data do evento:</Text>
            <TouchableOpacity
              style={styles.buttonDate}
              onPress={showDatepicker}
            >
              <Text>Selecionar data do evento</Text>
            </TouchableOpacity>
            {exibirCalendario && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={dateHandler}
                
              />
            )}
          </View>
          <View style={styles.viewLocalidade}>
            <Text style={styles.textLocalidade}>Localidade:</Text>
            <View style={styles.inputLocal}>
              <View style={styles.inputsRua}>
                <TextInput
                  style={[styles.inputsLocal, { width: "68%" }]}
                  placeholder="Digite a rua."
                  value={localidade.rua}
                  onChangeText={(valor) =>
                    setLocalidade({ ...localidade, rua: valor })
                  }
                />
                <TextInput
                  style={[styles.inputsLocal, { width: "28%" }]}
                  placeholder="Número."
                  keyboardType="number-pad"
                  value={localidade.numero}
                  onChangeText={(valor) =>
                    setLocalidade({ ...localidade, numero: valor })
                  }
                />
              </View>
              <TextInput
                style={styles.inputsLocal}
                placeholder="Digite o bairro."
                value={localidade.bairro}
                onChangeText={(valor) =>
                  setLocalidade({ ...localidade, bairro: valor })
                }
              />
            </View>
          </View>
        </View>
        <View style={styles.viewCalcular}>
          <TouchableOpacity
            style={styles.buttonCalcular}
            onPress={() => calcularChurras()}
          >
            <Text style={styles.textCalcular}>Calcular</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  criarChurras: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingTop: 30,
    paddingBottom: 30,
  },
  viewConvidados: {
    display: "flex",
    alignItems: "center",
    width: "90%",
    backgroundColor: "#340C0C",
    borderRadius: 20,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    padding: 10,
  },
  viewTitulo: {
    color: "#FFF",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
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
  viewCarnes: {
    display: "flex",
    width: "90%",
    backgroundColor: "#340C0C",
    borderRadius: 20,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    marginTop: 20,
  },
  inputCarnes: {
    display: "flex",
  },
  carne: {
    display: "flex",
    textAlign: "left",
    marginBottom: 20,
  },
  carneTitulo: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  checkboxes: {
    display: "flex",
    flexDirection: "row",
  },
  checkboxLabel: {
    display: "flex",
    flexDirection: "row",
    width: "35%",
    alignItems: "center",
    marginTop: 10,
  },
  carneNome: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
    textTransform: "capitalize",
  },
  viewBebidas: {
    display: "flex",
    width: "90%",
    backgroundColor: "#340C0C",
    borderRadius: 20,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    marginTop: 20,
  },
  checkboxesBebidas: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkboxLabelBebidas: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  bebidaNome: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
    textTransform: "capitalize",
  },
  viewOutros: {
    display: "flex",
    width: "90%",
    backgroundColor: "#340C0C",
    borderRadius: 20,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    marginTop: 20,
  },
  viewData: {
    marginTop: 15,
    marginBottom: 20,
  },
  viewLocalidade: {
    display: "flex",
    width: "100%",
  },
  textLocalidade: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
  },
  inputLocal: {
    display: "flex",
    marginTop: 10,
    marginBottom: 10,
  },
  inputsRua: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  inputsLocal: {
    backgroundColor: "#FFF",
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    borderRadius: 10,
    fontWeight: "bold",
  },
  viewCalcular: {
    width: "90%",
  },
  buttonCalcular: {
    width: "100%",
    height: 50,
    backgroundColor: "#DF1D1D",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    borderRadius: 20,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    marginTop: 20,
  },
  textCalcular: {
    display: "flex",
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 20,
  },
});
