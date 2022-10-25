import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import homemLogo from '../../../assets/homem.png';
import mulherLogo from '../../../assets/mulher.png';
import criancaLogo from '../../../assets/crianca.png';
import { useState, useEffect } from 'react';
import Checkbox from 'expo-checkbox';

export default function CriarChurras() {
  const [countHomem, setCountHomem] = useState(0);
  const [countMulher, setCountMulher] = useState(0);
  const [countCrianca, setCountCrianca] = useState(0);

  const [maminha, setMaminha] = useState(false);
  const [cupim, setCupim] = useState(false);
  const [picanha, setPicanha] = useState(false);

  const [linguica, setLinguica] = useState(false);
  const [paleta, setPaleta] = useState(false);
  const [bisteca, setBisteca] = useState(false);

  const [coxa, setCoxa] = useState(false);
  const [coracao, setCoracao] = useState(false);
  const [asa, setAsa] = useState(false);

  const [refrigerante, setRefrigerante] = useState(false);
  const [cerveja, setCerveja] = useState(false);
  const [agua, setAgua] = useState(false);
  const [suco, setSuco] = useState(false);
  const [vinho, setVinho] = useState(false);
  const [whisky, setWhisky] = useState(false);

  const [checkboxBebidas, setCheckboxBebidas] = useState(null);

  const [bebidas, setBebidas] = useState([
    {
      nome: 'refrigerante',
      value: false,
    },
    {
      nome: 'cerveja',
      value: false,
    },
    {
      nome: 'agua',
      value: false,
    },
    {
      nome: 'suco',
      value: false,
    },
    {
      nome: 'vinho',
      value: false,
    },
    {
      nome: 'whisky',
      value: false,
    },
  ]);

  const [localidade, setLocalidade] = useState({
    rua: '',
    numero: '',
    bairro: '',
  });

  function calcularChurras() {
    console.log('teste');
  }

  useEffect(() => {
    setCheckboxBebidas(
      bebidas.map((bebida, index) => {
        return (
          <View>
            <Checkbox
              value={bebida.value}
              onValueChange={() => {
                console.log('teste');
                let bebidasTemp = bebidas;
                if (bebida.value) {
                  bebidasTemp[index].value = false;
                  setBebidas(bebidasTemp);
                } else {
                  bebidasTemp[index].value = true;
                  console.log(bebidasTemp);
                  setBebidas(bebidasTemp);
                  console.log(bebidas);
                }
              }}
              color={bebida.value ? '#EED0A2' : undefined}
            />
            <Text style={styles.carneNome}>{bebida.nome}</Text>
          </View>
        );
      })
    );
    console.log('mudou');
  }, [bebidas]);

  console.log(bebidas);

  return (
    <ScrollView>
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
                    setCountHomem(countHomem != 0 ? countHomem - 1 : 0)
                  }>
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
                  }>
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
                    setCountMulher(countMulher != 0 ? countMulher - 1 : 0)
                  }>
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
                  }>
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
                    setCountCrianca(countCrianca != 0 ? countCrianca - 1 : 0)
                  }>
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
                  }>
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
                <View style={styles.checkboxLabel}>
                  <Checkbox
                    value={maminha}
                    onValueChange={setMaminha}
                    color={maminha ? '#EED0A2' : undefined}
                    style={styles.checkbox}
                  />
                  <Text style={styles.carneNome}>Maminha</Text>
                </View>
                <View style={styles.checkboxLabel}>
                  <Checkbox
                    value={cupim}
                    onValueChange={setCupim}
                    color={cupim ? '#EED0A2' : undefined}
                  />
                  <Text style={styles.carneNome}>Cupim</Text>
                </View>
                <View style={styles.checkboxLabel}>
                  <Checkbox
                    value={picanha}
                    onValueChange={setPicanha}
                    color={picanha ? '#EED0A2' : undefined}
                  />
                  <Text style={styles.carneNome}>Picanha</Text>
                </View>
              </View>
            </View>
            <View style={styles.carne}>
              <Text style={styles.carneTitulo}>Suino:</Text>
              <View style={styles.checkboxes}>
                <View style={styles.checkboxLabel}>
                  <Checkbox
                    value={linguica}
                    onValueChange={setLinguica}
                    color={linguica ? '#EED0A2' : undefined}
                  />
                  <Text style={styles.carneNome}>Linguiça</Text>
                </View>
                <View style={styles.checkboxLabel}>
                  <Checkbox
                    value={paleta}
                    onValueChange={setPaleta}
                    color={paleta ? '#EED0A2' : undefined}
                  />
                  <Text style={styles.carneNome}>Paleta</Text>
                </View>
                <View style={styles.checkboxLabel}>
                  <Checkbox
                    value={bisteca}
                    onValueChange={setBisteca}
                    color={bisteca ? '#EED0A2' : undefined}
                  />
                  <Text style={styles.carneNome}>Bisteca</Text>
                </View>
              </View>
            </View>
            <View style={styles.carne}>
              <Text style={styles.carneTitulo}>Frango:</Text>
              <View style={styles.checkboxes}>
                <View style={styles.checkboxLabel}>
                  <Checkbox
                    value={coxa}
                    onValueChange={setCoxa}
                    color={coxa ? '#EED0A2' : undefined}
                  />
                  <Text style={styles.carneNome}>Coxa</Text>
                </View>
                <View style={styles.checkboxLabel}>
                  <Checkbox
                    value={coracao}
                    onValueChange={setCoracao}
                    color={coracao ? '#EED0A2' : undefined}
                  />
                  <Text style={styles.carneNome}>Coração</Text>
                </View>
                <View style={styles.checkboxLabel}>
                  <Checkbox
                    value={asa}
                    onValueChange={setAsa}
                    color={asa ? '#EED0A2' : undefined}
                  />
                  <Text style={styles.carneNome}>Asa</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.viewBebidas}>
          <Text style={styles.viewTitulo}>Bebidas</Text>
          <View style={styles.checkboxesBebidas}>
            <View style={styles.checkboxesLeft}>
              {/*checkboxBebidas */}

              <View style={styles.checkboxLabelBebidas}>
                <Checkbox
                  value={refrigerante}
                  onValueChange={setRefrigerante}
                  color={refrigerante ? '#EED0A2' : undefined}
                />
                <Text style={styles.carneNome}>Refrigerante</Text>
              </View>
              <View style={styles.checkboxLabelBebidas}>
                <Checkbox
                  value={cerveja}
                  onValueChange={setCerveja}
                  color={cerveja ? '#EED0A2' : undefined}
                />
                <Text style={styles.carneNome}>Cerveja</Text>
              </View>
              <View style={styles.checkboxLabelBebidas}>
                <Checkbox
                  value={agua}
                  onValueChange={setAgua}
                  color={agua ? '#EED0A2' : undefined}
                />
                <Text style={styles.carneNome}>Água</Text>
              </View>
            </View>
            <View style={styles.checkboxesRight}>
              <View style={styles.checkboxLabelBebidas}>
                <Checkbox
                  value={vinho}
                  onValueChange={setVinho}
                  color={vinho ? '#EED0A2' : undefined}
                />
                <Text style={styles.carneNome}>Vinho</Text>
              </View>
              <View style={styles.checkboxLabelBebidas}>
                <Checkbox
                  value={suco}
                  onValueChange={setSuco}
                  color={suco ? '#EED0A2' : undefined}
                />
                <Text style={styles.carneNome}>Suco</Text>
              </View>
              <View style={styles.checkboxLabelBebidas}>
                <Checkbox
                  value={whisky}
                  onValueChange={setWhisky}
                  color={whisky ? '#EED0A2' : undefined}
                />
                <Text style={styles.carneNome}>Whisky</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.viewLocalidade}>
          <Text style={styles.viewTitulo}>Localidade</Text>
          <View style={styles.inputLocal}>
            <View style={styles.inputsRua}>
              <TextInput
                style={[styles.inputsLocal, { width: '68%' }]}
                placeholder="Digite a rua."
                value={localidade.rua}
                onChangeText={(valor) =>
                  setLocalidade({ ...localidade, rua: valor })
                }
              />
              <TextInput
                style={[styles.inputsLocal, { width: '28%' }]}
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
        <View style={styles.viewCalcular}>
          <TouchableOpacity
            style={styles.buttonCalcular}
            onPress={() => calcularChurras()}>
            <Text style={styles.textCalcular}>Calcular</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  criarChurras: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingTop: 30,
    paddingBottom: 30,
  },
  viewConvidados: {
    display: 'flex',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#340C0C',
    borderRadius: 20,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    padding: 10,
  },
  viewTitulo: {
    color: '#FFF',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputs: {
    marginTop: 30,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 90,
    backgroundColor: '#FFF',
    borderRadius: 50,
  },
  inputImage: {
    width: 80,
    height: 80,
  },
  inputField: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  add_dec: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  viewCarnes: {
    display: 'flex',
    width: '90%',
    backgroundColor: '#340C0C',
    borderRadius: 20,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    marginTop: 20,
  },
  inputCarnes: {
    display: 'flex',
  },
  carne: {
    display: 'flex',
    textAlign: 'left',
    marginBottom: 20,
  },
  carneTitulo: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkboxes: {
    display: 'flex',
    flexDirection: 'row',
  },
  checkboxLabel: {
    display: 'flex',
    flexDirection: 'row',
    width: '35%',
    alignItems: 'center',
    marginTop: 10,
  },
  carneNome: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  viewBebidas: {
    display: 'flex',
    width: '90%',
    backgroundColor: '#340C0C',
    borderRadius: 20,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    marginTop: 20,
  },
  checkboxesBebidas: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkboxLabelBebidas: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  viewLocalidade: {
    display: 'flex',
    width: '90%',
    backgroundColor: '#340C0C',
    borderRadius: 20,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    marginTop: 20,
  },
  inputLocal: {
    display: 'flex',
    marginTop: 20,
    marginBottom: 10,
  },
  inputsRua: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  inputsLocal: {
    backgroundColor: '#FFF',
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    borderRadius: 10,
    fontWeight: 'bold',
  },
  viewCalcular: {
    width: '90%',
  },
  buttonCalcular: {
    width: '100%',
    height: 50,
    backgroundColor: '#DF1D1D',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    borderRadius: 20,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    marginTop: 20,
  },
  textCalcular: {
    display: 'flex',
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 20,
  },
});
