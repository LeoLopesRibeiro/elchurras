import react from "react";
import { StyleSheet, Text, View, Button, Image } from 'react-native';


export default function Header() {
    return (
            <View style={styles.header}>

                <View style={styles.container_logo}>
                    <Text style={styles.titulo_header}>EL CHURRAS</Text>
                </View>

                <View style={styles.container_titulo}>
                    <Image source={require('../../assets/favicon.png')} />
                </View>

            </View>
    );
}

const styles = StyleSheet.create({

    header: {
        display: "flex",
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 55,
        backgroundColor: '#340C0C',
        justifyContent: 'space-around',
        alignItems: 'center', 
        flexDirection: 'row',  
    },

    container_logo: {
        display: "flex"
    },

    container_titulo: {
        display: 'flex',
        color: '#fff',
    },

    titulo_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    }

})