import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Keyboard,
    ProgressViewIOSComponent,
  } from 'react-native';
  import { useEffect, useState } from 'react';
  import * as ImagePicker from 'expo-image-picker';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import AdicionarUsuarios from '../AdicionarUsuarios';
  
  export default function SelecionarUsuarios() {
    const [card, setCard] = useState([]);
  
    useEffect(() => {
      async function CardUsuario() {
        try {
          let usuariosNovo = await AsyncStorage.getItem('usuarios');
          setCard(JSON.parse(usuariosNovo));
          console.log(JSON.parse(usuariosNovo));
        } catch (e) {
          alert(e);
        }
      }
  
      CardUsuario();
    }, []);
  
    return (
      <View style={styles.teste}>
            {card.length !== 0 ?
            card.map((itens, index)=>{
              return(
                <View key={index}>
                  <TouchableOpacity onPress={() =>  ''}>
                    <Text style={styles.texto}>{itens.nome}</Text>
                    <Image style={styles.ImgCamera} source={ { uri: itens.uri } }/>
                  </TouchableOpacity>
                </View>
              )
            }) : null}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    teste: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    ImgCamera: {
      width: 125,
      height: 125,
      borderRadius: 100,
    },
  
    texto: {
      textAlign: 'center',
    },
  });
  