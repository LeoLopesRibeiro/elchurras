import { Platform, Text, View, StyleSheet, Image } from 'react-native';


function Header(){
    return(
        <View style={styles.header}> 
        <View style={styles.header}>
            <Text style={styles.texto}>El Churras</Text>
            <Image source={require('../../../assets/logo.png')} style={{width: 30, height: 30}}/>
        </View>
    
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        width: '100vw',
        color: '#fff',
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0,
        borderColor: '#fff'
    },
    texto:{
        marginRight: 20,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
})
export default Header;