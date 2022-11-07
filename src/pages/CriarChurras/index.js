import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";
import CheckboxChurras from "../../components/CheckboxChurras";
import InputConvidados from "../../components/InputConvidados";
import CalcularChurras from "../../functions/CalcularChurras";
// import Container, { Toast } from "toastify-react-native";
import Toast from "react-native-toast-message";

export default function CriarChurras({ navigation, route }) {
  const parametros = route.params;
  const [goBack, setGoBack] = useState(false);
  const [responsavel, setResponsavel] = useState(null);

  const [countHomem, setCountHomem] = useState(0);
  const [countMulher, setCountMulher] = useState(0);
  const [countCrianca, setCountCrianca] = useState(0);

  const [date, setDate] = useState(new Date());
  const [exibirCalendario, setExibirCalendario] = useState(false);

  function dateHandler(event, selectedDate) {
    setExibirCalendario(false);
    setDate(selectedDate);
  }

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

  const [bovino, setBovino] = useState({
    maminha: {
      nome: "Maminha",
      value: false,
      preco: 0.042,
      kg: 0,
    },
    cupim: {
      nome: "Cupim",
      value: false,
      preco: 0.035,
      kg: 0,
    },
    picanha: {
      nome: "Picanha",
      value: false,
      preco: 0.06,
      kg: 0,
    },
  });

  const [suino, setSuino] = useState({
    linguica: {
      nome: "Linguiça",
      value: false,
      preco: 0.032,
      kg: 0,
    },
    lombo: {
      nome: "Lombo",
      value: false,
      preco: 0.04,
      kg: 0,
    },
    costela: {
      nome: "Costela",
      value: false,
      preco: 0.03,
      kg: 0,
    },
  });

  const [frango, setFrango] = useState({
    coxa: {
      nome: "Coxa",
      value: false,
      preco: 0.02,
      kg: 0,
    },
    coracao: {
      nome: "Coração",
      value: false,
      preco: 0.036,
      kg: 0,
    },
    asa: {
      nome: "Asa",
      value: false,
      preco: 0.023,
      kg: 0,
    },
  });

  const [bebidas, setBebidas] = useState({
    refrigerante: {
      icon: "refri",
      nome: "Refrigerante",
      value: false,
      preco: 7.5,
      litragem: 2000,
      garrafa: 2000,
      alcolico: false,
    },
    cerveja: {
      icon: "cerveja",
      nome: "Cerveja",
      value: false,
      preco: 2.5,
      litragem: 350,
      garrafa: 350,
      alcolico: true,
    },
    agua: {
      icon: "agua",
      nome: "Água",
      value: false,
      preco: 2,
      litragem: 500,
      garrafa: 500,
      alcolico: false,
    },
    suco: {
      icon: "refri",
      nome: "Suco",
      value: false,
      preco: 6,
      litragem: 1000,
      garrafa: 1000,
      alcolico: false,
    },
    vinho: {
      icon: "vinho",
      nome: "Vinho",
      value: false,
      preco: 45,
      litragem: 750,
      garrafa: 750,
      alcolico: true,
    },
    whisky: {
      icon: "whisky",
      nome: "Whisky",
      value: false,
      preco: 80,
      litragem: 1000,
      garrafa: 1000,
      alcolico: true,
    },
  });

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

    Object.keys(bovino).forEach((key) => {
      if (bovino[key].value == true) {
        bovino[key].icon = "bovino";
        carnesSelecionadas.push(bovino[key]);
      }
    });

    Object.keys(suino).forEach((key) => {
      if (suino[key].value == true) {
        suino[key].icon = "suino";
        carnesSelecionadas.push(suino[key]);
      }
    });

    Object.keys(frango).forEach((key) => {
      if (frango[key].value == true) {
        frango[key].icon = "frango";
        carnesSelecionadas.push(frango[key]);
      }
    });

    Object.keys(bebidas).forEach((key) => {
      if (bebidas[key].value == true) {
        bebidasSelecionadas.push(bebidas[key]);
      }
    });

    if (countHomem + countMulher === 0) {
      console.log("teste");
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
      return string.charAt(0).toUpperCase() + string.slice(1)
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
    };

    setChurrasStorage(resultado);

    navigation.navigate("Resultados", resultado.custos_outros);
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
                  {Object.keys(bovino).map((key) => {
                    return (
                      <CheckboxChurras
                        key={key}
                        data={bovino[key]}
                        value={bovino}
                        chave={key}
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
                  {Object.keys(suino).map((key) => {
                    return (
                      <CheckboxChurras
                        key={key}
                        data={suino[key]}
                        value={suino}
                        chave={key}
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
                  {Object.keys(frango).map((key) => {
                    return (
                      <CheckboxChurras
                        key={key}
                        data={frango[key]}
                        value={frango}
                        chave={key}
                        setValue={(e) => setFrango(e)}
                        width="35%"
                      />
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
                      <CheckboxChurras
                        key={key}
                        data={bebidas[key]}
                        value={bebidas}
                        chave={key}
                        setValue={(e) => setBebidas(e)}
                      />
                    );
                  }
                })}
              </View>
              <View style={styles.checkboxesRight}>
                {Object.keys(bebidas).map((key, index) => {
                  if (index > 2) {
                    return (
                      <CheckboxChurras
                        key={key}
                        data={bebidas[key]}
                        value={bebidas}
                        chave={key}
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
                <Text style={{ color: "#FFF", fontWeight: "bold" }}>
                  {date.toJSON().substring(8, 10)}/
                  {date.toJSON().substring(5, 7)}/
                  {date.toJSON().substring(0, 4)}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.buttonDate}
                onPress={() => setExibirCalendario(true)}
              >
                <Text style={styles.textButtonDate}>
                  Selecionar data do evento
                </Text>
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
  textButtonDate: {
    color: "#FFF",
    fontWeight: "bold",
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
  },
  inputsLocal: {
    backgroundColor: "#FFF",
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    borderRadius: 10,
    fontWeight: "bold",
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
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 20,
  },
});