
import { View, Text, Image, StyleSheet } from 'react-native';


export default function Lombo() {
    return(
        <View style={styles.card}>
                <Text style={styles.title}>Lombo</Text>
                <View style={styles.divIcons}>
                    <View style={styles.divTempo}>
                        <Image source={require('../../../../assets/watch.png')} style={styles.icon} /> 
                        <Text style={styles.textIcon}>3min</Text>
                    </View>
                    <View style={styles.divPorcao}>
                        <Image source={require('../../../../assets/prato.png')} style={styles.icon} />
                        <Text style={styles.textIcon}>4 porções</Text>
                    </View>
                </View>
                <Text style={styles.titleIngredientes}>Ingredientes</Text>
                <View style={styles.listIngredientes}>
                    <Text>• 1 kg de lombo de porco </Text>
                    <Text>• Sal grosso a gosto</Text>
                    <Text>• 100 gr de queijo ralado</Text>
                    <Text>• Óleo de soja a gosto</Text>
                    
                </View>
                <Text style={styles.titleModoPreparo}>Modo de preparo</Text>
                <View style={styles.listmodoPreparo}>
                    <Text style={styles.textListModoPreparo}><strong>1 </strong> 
                        Tempere o lombo com sal grosso e coloque-o no espeto. Leve à churrasqueira em fogo médio e deixe dourar. 
                        Depois retire o sal grosso, pincele com óleo e cubra-o com queijo ralado. Leve de volta a churrasqueira, 
                        até que fique crocante.
                    </Text>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    card: {
       width: 330,
       height: 500,
       borderRadius: 10,
       backgroundColor: '#EED0A2',
       marginTop: 50,
       marginBottom: 50,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold",
        padding: 10,
    },
    icon: {
        width: 25,
        height: 25,
    },
    divIcons: {
        flexDirection: 'row', 
        justifyContent: 'space-around',
        marginTop: 15, 
    },
    divTempo: {
        flexDirection: "row",
        alignItems: "center"
    },
    divPorcao: {
        flexDirection: "row",
        alignItems: "center",
    },
    textIcon: {
        marginLeft: 5,
    },
    titleIngredientes: {
        fontWeight: 'bold',
        padding: 20,
    },
    listIngredientes: {
        marginLeft: 30,
    },
    titleModoPreparo: {
        fontWeight: 'bold',
        padding: 20,  
    },
    listmodoPreparo: {
        marginLeft: 30,
        maxWidth: 250
    },
    textListModoPreparo: {
        marginTop: 5,
    },    
   

})