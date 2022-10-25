import { View, Text, StyleSheet, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { useFonts, Poppins_700Bold} from '@expo-google-fonts/poppins';
import "../../../assets/cerveja.png"

function Bebidas(){


    useEffect(()=>{
    const teste =  '{"carnes": [{"icon":  "../../../assets/vaca.png","nome": "picanha","kg": 10,"preco": 100},{"icon":  "../../../assets/vaca.png","nome": "linguiça","kg": 10,"preco": 100},{"icon":"../../../assets/vaca.png","nome": "coxinha","kg": 10,"preco": 100}],"bebidas": [{"icon":  "../../../assets/cerveja.png","nome": "cerveja","garrafas": 1,"preco": 30},{"icon":  "../../../assets/cerveja.png","nome": "agua","garrafas": 3,"preco": 10},{"icon":  "../../../assets/cerveja.png","nome": "refrigerante","garrafas": 2,"preco": 20}],"outros": {"geral": [{"icon": "./assets/carvao","nome": "carvão","kg": 10,"preco": 30},{"icon": "./assets/sal_grosso","nome": "sal grosso","kg": 1,"preco": 10}],"acompanhamentos": [{"icon": "./assets/arroz","nome": "arroz","kg": 10,"preco": 50},{"icon": "./assets/farofa","nome": "farofa","kg": 1,"preco": 10},{"icon": "./assets/pao","nome": "pão","kg": 1,"preco": 10}]},"locacao": {"rua": "blabla","numero": "10","bairro":"tururu"}}'
    const Json = JSON.parse(teste);

    setTeste1(Json)
  }, [])
  console.log(teste1);

    const [teste1, setTeste1] = useState([]);
    let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });
    if (!fontsLoaded) {
    return null;
  }
    return(
    <View style={styles.background}>
      <View style={styles.whiteBackground}>
            <Text style={styles.text}>Gastos</Text>
      </View>
          <View style={styles.cor}>

      {teste1.length != 0 ? (
              teste1.bebidas.map((itens, index)=>{
                  return(
                      <View style={styles.view} key={index}>
                        <View style={styles.teste}>
                          <Image source={require(itens.icon)} style={{ width: 30, height: 30 }}/>
                          <Text style={styles.textMap}>{itens.nome}</Text>
                        </View>
                        <View style={styles.viewMap} >
                          <Text style={styles.textMapAside}>Preço: {itens.preco}</Text>
                          <Text style={styles.textMapAside}>Garrafas: {itens.garrafas}</Text>
                        </View>
                      </View>
                  )
              })
            ) : (
              null
            )
          }

        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    cor:{
        height: '100%',
        backgroundColor: '#340C0C',
    },
    text:{
      fontSize: 40,
      fontFamily: 'Poppins_700Bold',
    },
    background:{
      height: '100%',
    },
    whiteBackground:{
      height: 150,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    textMap:{
      color: '#fff',
      fontSize: 15,
      textTransform: 'capitalize',
      marginLeft: 10,
      fontFamily: 'Poppins_700Bold',
    },
    textMapAside:{
      fontFamily: 'Poppins_700Bold',
      color: '#fff'
    },
    viewMap:{
      display: 'flex',
     
    },
    teste:{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center'
    },
    view:{
      padding: 10,
      width: '100%',
      display:'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: '#EED0A2'

    }

 
})
export default Bebidas