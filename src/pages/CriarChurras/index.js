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
import { useState } from 'react';
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


  function calcularChurras() {}

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
});
