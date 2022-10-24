import { View, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

function Assados(){
    const [teste1, setTeste1] = useState([])
  
    useEffect(()=>{
    const teste =  '{"carnes": [{"icon":  "./assets/carne","nome": "picanha","kg": 10,"preco": 100},{"icon":  "./assets/carne","nome": "linguiça","kg": 10,"preco": 100},{"icon":"./assets/carne","nome": "coxinha","kg": 10,"preco": 100}],"bebidas": [{"icon":  "./assets/cerveja","nome": "cerveja","garrafas": 1,"preco": 30},{"icon":  "./assets/agua","nome": "agua","garrafas": 3,"preco": 10},{"icon":  "./assets/refrigerante","nome": "refrigerante","garrafas": 2,"preco": 20}],"outros": {"geral": [{"icon": "./assets/carvao","nome": "carvão","kg": 10,"preco": 30},{"icon": "./assets/sal_grosso","nome": "sal grosso","kg": 1,"preco": 10}],"acompanhamentos": [{"icon": "./assets/arroz","nome": "arroz","kg": 10,"preco": 50},{"icon": "./assets/farofa","nome": "farofa","kg": 1,"preco": 10},{"icon": "./assets/pao","nome": "pão","kg": 1,"preco": 10}]},"locacao": {"rua": "blabla","numero": "10","bairro":"tururu"}}'
    const Json = JSON.parse(teste);

    setTeste1(Json)
  }, [])
  console.log(teste1)

        
    return(
        <View style={styles.cor}>

    {teste1.length != 0 ? (
            teste1.carnes.map((itens, index)=>{
                return(
                    <View key={index}>
                        <Text>{itens.nome}</Text>
                        <Text>Preço{itens.preco}</Text>
                        <Text>Kg: {itens.kg}</Text>
                    </View>
                )
            })
          ) : (
            null
          )
        }

        </View>
    )
}

const styles = StyleSheet.create({
    cor:{
        height: '100%',
        backgroundColor: '#340C0C'
    }
})
export default Assados