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
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";
import CheckboxChurras from "../../components/CheckboxChurras";
import InputConvidados from "../../components/InputConvidados";

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

    let precoTotal = 0;

    // Contas carnes

    let kgHomem = 600 * countHomem;
    let kgMulher = 400 * countMulher;
    let kgCrianca = 250 * countCrianca;

    let kgCarneTotal = kgHomem + kgMulher + kgCrianca;

    let kgPorCarne = (kgCarneTotal / carnesSelecionadas.length).toFixed(2);

    carnesSelecionadas.forEach((carne) => {
      carne.preco = Number((carne.preco * kgPorCarne).toFixed(2));
      carne.kg = Number((kgPorCarne / 1000).toFixed(2));
      precoTotal += carne.preco;
    });

    // Contas bebidas

    let litrosAdulto = countHomem * 1500 + countMulher * 1500;
    let litrosCrianca = countHomem * 750;

    let alcolico = false;
    let quantBebidasAlcolicas = 0;

    bebidasSelecionadas.forEach((bebida) => {
      if (bebida.alcolico == true) {
        alcolico = true;
        quantBebidasAlcolicas++;
      }
    });

    if (alcolico) {
      let litrosBebidasPorAdulto = litrosAdulto / bebidasSelecionadas.length;
      let litrosBebidasPorCrianca =
        litrosCrianca / bebidasSelecionadas.length - quantBebidasAlcolicas;

      bebidasSelecionadas.forEach((bebida) => {
        if (bebida.alcolico == true) {
          bebida.garrafa = Math.ceil(litrosBebidasPorAdulto / bebida.garrafa);
        } else {
          bebida.garrafa = Math.ceil(
            (litrosBebidasPorAdulto + litrosBebidasPorCrianca) / bebida.garrafa
          );
        }

        bebida.preco = Number((bebida.preco * bebida.garrafa).toFixed(2));
        precoTotal += bebida.preco;
      });
    } else {
      let litrosTotais = litrosAdulto + litrosCrianca;
      let litrosPorBebida = litrosTotais / bebidasSelecionadas.length;

      bebidasSelecionadas.forEach((bebida) => {
        bebida.garrafa = Math.ceil(litrosPorBebida / bebida.garrafa);

        bebida.preco = Number((bebida.preco * bebida.garrafa).toFixed(2));
        precoTotal += bebida.preco;
      });
    }

    let convidadosTotais = countHomem + countMulher + countCrianca;
    let kgCarvao = (kgCarneTotal / 1000).toFixed(2);
    let sacoCarvao = Math.ceil(kgCarvao / 2);
    let salKg = (kgCarneTotal * 0.02) / 1000;
    let paoKg = (convidadosTotais * 2 * 50) / 1000;
    let arrozKg = (convidadosTotais * 100) / 1000;
    let sacoArroz = Math.ceil(arrozKg / 5);
    let farofaKg = (convidadosTotais * 70) / 1000;
    let sacoFarofa = Math.ceil(farofaKg / 0.5);

    const resultado = {
      responsavel: responsavel,
      data: dataSelecionada,
      custos_outros: {
        carnes: carnesSelecionadas,
        bebidas: bebidasSelecionadas,
        outros: {
          geral: [
            {
              icon: "carvao",
              nome: "Carvão",
              kg: Number(kgCarvao),
              preco: sacoCarvao * 17,
            },
            {
              icon: "sal",
              nome: "Sal",
              kg: salKg,
              preco: Math.ceil(salKg) * 5,
            },
          ],
          acompanhamentos: [
            {
              icon: "arroz",
              nome: "Arroz",
              kg: arrozKg,
              preco: sacoArroz * 20,
            },
            {
              icon: "farofa",
              nome: "Farofa",
              kg: farofaKg,
              preco: sacoFarofa * 8,
            },
            {
              icon: "pao",
              nome: "Pão",
              kg: paoKg,
              preco: convidadosTotais * 2 * 0.5,
            },
          ],
        },
        locacao: localidade,
        preco_total: precoTotal,
        rateio: 0,
      },
    };

    resultado.custos_outros.outros.geral.forEach((valor) => {
      resultado.custos_outros.preco_total += valor.preco;
    });

    resultado.custos_outros.outros.acompanhamentos.forEach((valor) => {
      resultado.custos_outros.preco_total += valor.preco;
    });

    let rateio =
      resultado.custos_outros.preco_total / (countHomem + countMulher);

    resultado.custos_outros.rateio = rateio;
    setChurrasStorage(resultado);

    navigation.navigate("Resultados", resultado.custos_outros);
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
                {date.toJSON().substring(8, 10)}/{date.toJSON().substring(5, 7)}
                /{date.toJSON().substring(0, 4)}
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
