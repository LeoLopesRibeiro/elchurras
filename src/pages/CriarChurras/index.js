import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";
import CheckboxChurras from "../../components/CheckboxChurras";
import InputConvidados from "../../components/InputConvidados";
import CalcularChurras from "../../functions/CalcularChurras";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import Toast from "react-native-toast-message";

export default function CriarChurras({ navigation, route }) {
  const parametros = route.params;
  const [goBack, setGoBack] = useState(false);
  const [responsavel, setResponsavel] = useState(null);
  const [modalCarnesAtivo, setModalCarnesAtivo] = useState(false);

  const [contato, setContato] = useState("");

  const [countHomem, setCountHomem] = useState(0);
  const [countMulher, setCountMulher] = useState(0);
  const [countCrianca, setCountCrianca] = useState(0);

  const [date, setDate] = useState(new Date());
  const [exibirCalendario, setExibirCalendario] = useState(false);

  function dateHandler(event, selectedDate) {
    setExibirCalendario(false);
    setDate(selectedDate);
  }

  function mudarPrecoHandler(valor, index) {}

  async function setChurrasStorage(churras) {
    try {
      const usuariosJSON = await AsyncStorage.getItem("usuarios");

      if (usuariosJSON !== null) {
        const usuarios = JSON.parse(usuariosJSON);
        usuarios[parametros.id].churras.push(churras);

        await AsyncStorage.setItem("usuarios", JSON.stringify(usuarios));
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    async function getResponsavel() {
      try {
        const usuariosJSON = await AsyncStorage.getItem("usuarios");

        if (usuariosJSON !== null) {
          const usuarios = JSON.parse(usuariosJSON);
          setResponsavel(usuarios[parametros.id].nome);
        }
      } catch (e) {
        console.log(e);
      }
    }

    getResponsavel();

    navigation.addListener("focus", (e) => {
      if (goBack) {
        navigation.navigate("ListarChurras", { id: parametros.id });
      }

      setGoBack(true);
    });
  }, [navigation, goBack]); // eslint-disable-line

  const [bovino, setBovino] = useState([
    {
      id: 0,
      nome: "Maminha",
      value: false,
      preco: 0.042,
      kg: 0,
    },
    {
      id: 1,
      nome: "Cupim",
      value: false,
      preco: 0.035,
      kg: 0,
    },
    {
      id: 2,
      nome: "Picanha",
      value: false,
      preco: 0.06,
      kg: 0,
    },
  ]);

  const [suino, setSuino] = useState([
    {
      id: 3,
      nome: "Linguiça",
      value: false,
      preco: 0.032,
      kg: 0,
    },
    {
      id: 4,
      nome: "Lombo",
      value: false,
      preco: 0.04,
      kg: 0,
    },
    {
      id: 5,
      nome: "Costela",
      value: false,
      preco: 0.03,
      kg: 0,
    },
  ]);

  const [frango, setFrango] = useState([
    {
      id: 6,
      nome: "Coxa",
      value: false,
      preco: 0.02,
      kg: 0,
    },
    {
      id: 7,
      nome: "Coração",
      value: false,
      preco: 0.036,
      kg: 0,
    },
    {
      id: 8,
      nome: "Asa",
      value: false,
      preco: 0.023,
      kg: 0,
    },
  ]);

  const [bebidas, setBebidas] = useState([
    {
      id: 9,
      icon: "refri",
      nome: "Refrigerante",
      value: false,
      preco: 7.5,
      litragem: 2000,
      garrafa: 2000,
      alcolico: false,
    },
    {
      id: 10,
      icon: "cerveja",
      nome: "Cerveja",
      value: false,
      preco: 2.5,
      litragem: 350,
      garrafa: 350,
      alcolico: true,
    },
    {
      id: 11,
      icon: "agua",
      nome: "Água",
      value: false,
      preco: 2,
      litragem: 500,
      garrafa: 500,
      alcolico: false,
    },
    {
      id: 12,
      icon: "suco",
      nome: "Suco",
      value: false,
      preco: 6,
      litragem: 1000,
      garrafa: 1000,
      alcolico: false,
    },
    {
      id: 13,
      icon: "vinho",
      nome: "Vinho",
      value: false,
      preco: 45,
      litragem: 750,
      garrafa: 750,
      alcolico: true,
    },
    {
      id: 14,
      icon: "whisky",
      nome: "Whisky",
      value: false,
      preco: 80,
      litragem: 1000,
      garrafa: 1000,
      alcolico: true,
    },
  ]);

  const [localidade, setLocalidade] = useState({
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
  });

  async function calcularChurras() {
    const dataSelecionada = {
      dia: date.toJSON().substring(8, 10),
      mes: date.toJSON().substring(5, 7),
      ano: date.toJSON().substring(0, 4),
    };

    const carnesSelecionadas = [];
    const bebidasSelecionadas = [];

    bovino.forEach((carne) => {
      if (carne.value == true) {
        carne.icon = "bovino";
        carnesSelecionadas.push(carne);
      }
    });

    suino.forEach((carne) => {
      if (carne.value == true) {
        carne.icon = "suino";
        carnesSelecionadas.push(carne);
      }
    });

    frango.forEach((carne) => {
      if (carne.value == true) {
        carne.icon = "frango";
        carnesSelecionadas.push(carne);
      }
    });

    bebidas.forEach((bebida) => {
      if (bebida.value == true) {
        bebidasSelecionadas.push(bebida);
      }
    });

    if (countHomem + countMulher === 0) {
      Toast.show({
        type: "error",
        text1: "Selecione pelo menos um adulto!",
      });
      return;
    }

    if (carnesSelecionadas.length === 0) {
      Toast.show({
        type: "error",
        text1: "Selecione pelo menos uma carne!",
      });
      return;
    }

    if (bebidasSelecionadas.length === 0) {
      Toast.show({
        type: "error",
        text1: "Selecione pelo menos uma bebida!",
      });
      return;
    }

    const camposNaoPreenchidos = [];

    function captalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    Object.keys(localidade).forEach((key) => {
      if (localidade[key] == "") {
        camposNaoPreenchidos.push(captalize(key));
      }
    });

    if (camposNaoPreenchidos.length !== 0) {
      Toast.show({
        type: "error",
        text1: "Informe o local do evento!",
        text2: `Preencha o campo ${camposNaoPreenchidos[0]}`,
      });
      return;
    }

    if (contato.length !== 11) {
      Toast.show({
        type: "error",
        text1: "Informe um telefone de contato válido.",
      });
      return;
    }

    const items = {
      carnesSelecionadas,
      bebidasSelecionadas,
      countHomem,
      countMulher,
      countCrianca,
    };

    const custos = CalcularChurras(items);
    custos.locacao = localidade;

    const resultado = {
      responsavel: responsavel,
      data: dataSelecionada,
      custos_outros: custos,
      contato: contato,
    };

    setChurrasStorage(resultado);

    navigation.navigate("Resultados", resultado.custos_outros);
  }

  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
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
                <InputConvidados
                  count={countHomem}
                  setCount={(e) => setCountHomem(e)}
                />
              </View>
              <View style={styles.viewInput}>
                <View style={styles.viewImage}>
                  <Image
                    style={styles.inputImage}
                    source={require("../../../assets/mulher.png")}
                  />
                </View>
                <InputConvidados
                  count={countMulher}
                  setCount={(e) => setCountMulher(e)}
                />
              </View>
              <View style={styles.viewInput}>
                <View style={styles.viewImage}>
                  <Image
                    style={styles.inputImage}
                    source={require("../../../assets/crianca.png")}
                  />
                </View>
                <InputConvidados
                  count={countCrianca}
                  setCount={(e) => setCountCrianca(e)}
                />
              </View>
            </View>
          </View>
          <View style={styles.viewCarnes}>
            <Text style={styles.viewTitulo}>Carnes</Text>
            <View style={styles.inputCarnes}>
              <View style={styles.carne}>
                <Text style={styles.carneTitulo}>Bovino:</Text>
                <View style={styles.checkboxes}>
                  {bovino.map((carne) => {
                    return (
                      <CheckboxChurras
                        key={carne.id}
                        data={carne}
                        value={bovino}
                        setValue={(e) => setBovino(e)}
                        width="35%"
                      />
                    );
                  })}
                </View>
              </View>
              <View style={styles.carne}>
                <Text style={styles.carneTitulo}>Suino:</Text>
                <View style={styles.checkboxes}>
                  {suino.map((carne) => {
                    return (
                      <CheckboxChurras
                        key={carne.id}
                        data={carne}
                        value={suino}
                        setValue={(e) => setSuino(e)}
                        width="35%"
                      />
                    );
                  })}
                </View>
              </View>
              <View style={styles.carne}>
                <Text style={styles.carneTitulo}>Frango:</Text>
                <View style={styles.checkboxes}>
                  {frango.map((carne) => {
                    return (
                      <CheckboxChurras
                        key={carne.id}
                        data={carne}
                        value={frango}
                        setValue={(e) => setFrango(e)}
                        width="35%"
                      />
                    );
                  })}
                </View>
              </View>
            </View>
            <View style={styles.configCarnes}>
              <TouchableOpacity onPress={() => setModalCarnesAtivo(true)}>
                <Image
                  source={require("../../../assets/engrenagem.png")}
                  style={{ width: 25, height: 25 }}
                />
              </TouchableOpacity>
              <Modal
                visible={modalCarnesAtivo}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setModalCarnesAtivo(false)}
              >
                <View style={styles.outerView}>
                  <View style={styles.modalCarnes}>
                    <Text style={styles.tituloPrecos}>
                      Precificação das carnes
                    </Text>
                    <View style={styles.viewCarnesInputs}>
                      <ScrollView>
                        <View style={styles.viewScrollCarnes}>
                          <View style={styles.viewCarnesPreco}>
                            <Text style={styles.textoCarnePreco}>Bovinos</Text>
                            <View>
                              {bovino.map((carne) => {
                                return (
                                  <View
                                    key={carne.id}
                                    style={styles.cardTipoCarne}
                                  >
                                    <View style={styles.tipoCarne}>
                                      <Text style={styles.textoTipoCarne}>
                                        {carne.nome}
                                      </Text>
                                      <Text style={styles.textoTipoCarne}>
                                        (Kg):
                                      </Text>
                                    </View>
                                    <View style={styles.viewInputPreco}>
                                      <Text style={styles.textoTipoCarne}>
                                        R$
                                      </Text>
                                      <TextInput
                                        style={styles.inputPreco}
                                        value={`${carne.preco * 1000}`}
                                        onChangeText={(valor) =>
                                          setBovino(
                                            bovino.map((data) => {
                                              if (data.id === carne.id) {
                                                return {
                                                  ...data,
                                                  preco: Number(valor) / 1000,
                                                };
                                              } else {
                                                return { ...data };
                                              }
                                            })
                                          )
                                        }
                                        keyboardType="number-pad"
                                      />
                                    </View>
                                  </View>
                                );
                              })}
                            </View>
                          </View>
                          <View style={styles.viewCarnesPreco}>
                            <Text style={styles.textoCarnePreco}>Suínos</Text>
                            <View>
                              {suino.map((carne) => {
                                return (
                                  <View
                                    key={carne.id}
                                    style={styles.cardTipoCarne}
                                  >
                                    <View style={styles.tipoCarne}>
                                      <Text style={styles.textoTipoCarne}>
                                        {carne.nome}
                                      </Text>
                                      <Text style={styles.textoTipoCarne}>
                                        (Kg):
                                      </Text>
                                    </View>
                                    <View style={styles.viewInputPreco}>
                                      <Text style={styles.textoTipoCarne}>
                                        R$
                                      </Text>
                                      <TextInput
                                        style={styles.inputPreco}
                                        value={`${carne.preco * 1000}`}
                                        onChangeText={(valor) =>
                                          setSuino(
                                            suino.map((data) => {
                                              if (data.id === carne.id) {
                                                return {
                                                  ...data,
                                                  preco: Number(valor) / 1000,
                                                };
                                              } else {
                                                return { ...data };
                                              }
                                            })
                                          )
                                        }
                                        keyboardType="number-pad"
                                      />
                                    </View>
                                  </View>
                                );
                              })}
                            </View>
                          </View>
                          <View style={styles.viewCarnesPreco}>
                            <Text style={styles.textoCarnePreco}>Frango</Text>
                            <View>
                              {frango.map((carne) => {
                                return (
                                  <View
                                    key={carne.id}
                                    style={styles.cardTipoCarne}
                                  >
                                    <View style={styles.tipoCarne}>
                                      <Text style={styles.textoTipoCarne}>
                                        {carne.nome}
                                      </Text>
                                      <Text style={styles.textoTipoCarne}>
                                        (Kg):
                                      </Text>
                                    </View>
                                    <View style={styles.viewInputPreco}>
                                      <Text style={styles.textoTipoCarne}>
                                        R$
                                      </Text>
                                      <TextInput
                                        style={styles.inputPreco}
                                        value={`${carne.preco * 1000}`}
                                        onChangeText={(valor) =>
                                          setFrango(
                                            frango.map((data) => {
                                              if (data.id === carne.id) {
                                                return {
                                                  ...data,
                                                  preco: Number(valor) / 1000,
                                                };
                                              } else {
                                                return { ...data };
                                              }
                                            })
                                          )
                                        }
                                        keyboardType="number-pad"
                                      />
                                    </View>
                                  </View>
                                );
                              })}
                            </View>
                          </View>
                        </View>
                      </ScrollView>
                    </View>
                    <View style={styles.viewBotaoPrecos}>
                      <TouchableOpacity
                        style={styles.botaoFechar}
                        onPress={() => setModalCarnesAtivo(false)}
                      >
                        <Text style={styles.textoBotaoFechar}>Fechar</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
          <View style={styles.viewBebidas}>
            <Text style={styles.viewTitulo}>Bebidas</Text>
            <View style={styles.checkboxesBebidas}>
              <View style={styles.checkboxesLeft}>
                {bebidas.map((bebida, index) => {
                  if (index < 3) {
                    return (
                      <CheckboxChurras
                        key={bebida.id}
                        data={bebida}
                        value={bebidas}
                        setValue={(e) => setBebidas(e)}
                      />
                    );
                  }
                })}
              </View>
              <View style={styles.checkboxesRight}>
                {bebidas.map((bebida, index) => {
                  if (index > 2) {
                    return (
                      <CheckboxChurras
                        key={bebida.id}
                        data={bebida}
                        value={bebidas}
                        setValue={(e) => setBebidas(e)}
                      />
                    );
                  }
                })}
              </View>
            </View>
          </View>
          <View style={styles.viewOutros}>
            <Text style={styles.viewTitulo}>Outros</Text>
            <View style={styles.viewData}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={styles.textLocalidade}>Data do evento:</Text>
                <Text style={{ color: "#FFF", fontFamily: "Poppins_700Bold" }}>
                  {date.toJSON().substring(8, 10)}/
                  {date.toJSON().substring(5, 7)}/
                  {date.toJSON().substring(0, 4)}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.buttonDate}
                onPress={() => setExibirCalendario(true)}
              >
                <View style={styles.viewCalendario}>
                  <Text style={styles.textButtonDate}>
                    Selecionar data do evento
                  </Text>
                  <Image
                    style={{ width: 15, height: 15, marginBottom: 5 }}
                    source={require("../../../assets/calendario.png")}
                  />
                </View>
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
                <TextInput
                  style={styles.inputsLocal}
                  placeholder="Digite a cidade."
                  value={localidade.cidade}
                  onChangeText={(valor) =>
                    setLocalidade({ ...localidade, cidade: valor })
                  }
                />
              </View>
            </View>
            <View style={styles.viewContato}>
              <Text style={styles.textLocalidade}>Contato:</Text>
              <View style={styles.viewInputContato}>
                <TextInput
                  style={styles.inputsLocal}
                  placeholder="Tel Ex: 11987654321"
                  value={contato}
                  onChangeText={(valor) => setContato(valor)}
                  keyboardType="number-pad"
                  maxLength={11}
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
      <Toast />
    </View>
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
    fontSize: 32,
    fontFamily: "Poppins_700Bold",
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
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
  },
  checkboxes: {
    display: "flex",
    flexDirection: "row",
  },
  configCarnes: {
    position: "absolute",
    right: 15,
    top: 20,
  },
  outerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalCarnes: {
    width: "95%",
    height: "70%",
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 15,
  },
  tituloPrecos: {
    fontSize: 22,
    fontFamily: "Poppins_700Bold",
    textAlign: "center",
  },
  viewCarnesInputs: {
    height: "80%",
  },
  viewScrollCarnes: {
    paddingTop: 15,
  },
  viewCarnesPreco: {
    marginBottom: 20,
  },
  textoCarnePreco: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
  },
  cardTipoCarne: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  tipoCarne: {
    display: "flex",
    flexDirection: "row",
    width: "36%",
    justifyContent: "space-between",
  },
  textoTipoCarne: {
    fontFamily: "Poppins_700Bold",
  },
  viewInputPreco: {
    display: "flex",
    flexDirection: "row",
    width: "60%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputPreco: {
    backgroundColor: "#EEEDE7",
    width: "85%",
    textAlign: "center",
    padding: 3,
    borderRadius: 10,
    fontFamily: "Poppins_700Bold",
  },
  viewBotaoPrecos: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  botaoFechar: {
    width: "85%",
    height: 35,
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
  textoBotaoFechar: {
    fontFamily: "Poppins_700Bold",
    color: "#FFF",
  },
  viewBebidas: {
    display: "flex",
    width: "90%",
    backgroundColor: "#340C0C",
    borderRadius: 20,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
    marginTop: 20,
  },
  checkboxesBebidas: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
  buttonDate: {
    width: "100%",
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "#DF1D1D",
    borderRadius: 10,
  },
  viewCalendario: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textButtonDate: {
    color: "#FFF",
    fontFamily: "Poppins_700Bold",
    marginRight: 8,
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
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
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
  },
  inputsLocal: {
    backgroundColor: "#FFF",
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    borderRadius: 10,
    fontSize: 13,
    fontFamily: "Poppins_700Bold",
    marginBottom: 15,
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
    fontFamily: "Poppins_700Bold",
    color: "#FFF",
    fontSize: 18,
  },
  viewContato: {
    display: "flex",
    flexDirection: "column",
  },
  viewInputContato: {
    marginTop: 10,
    marginBottom: 10,
  },
});
