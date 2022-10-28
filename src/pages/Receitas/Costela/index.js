
import { View, Text, Image, StyleSheet } from 'react-native';


export default function Costela() {
    return(
        <View style={styles.card}>
                <Text style={styles.title}>Costela</Text>
                <View style={styles.divIcons}>
                    <View style={styles.divTempo}>
                        <Image source={require('../../../../assets/watch.png')} style={styles.icon} /> 
                        <Text style={styles.textIcon}>3h</Text>
                    </View>
                    <View style={styles.divPorcao}>
                        <Image source={require('../../../../assets/prato.png')} style={styles.icon} />
                        <Text style={styles.textIcon}>7 porções</Text>
                    </View>
                </View>
                <Text style={styles.titleIngredientes}>Ingredientes</Text>
                <View style={styles.listIngredientes}>
                    <Text>• 1 1/2 kg de costela de porco (peça) </Text>
                    <Text>• 1/2 colher (café) de sal </Text>
                    <Text>• 2 dentes de alho descascados e moídos </Text>
                    <Text>• 1 pitada de noz-moscada </Text>
                    <Text>• 1 colher (chá) de salsinha picada  </Text>
                    <Text>• 1 copo (americano) de cerveja escura </Text>

                    
                </View>
                <Text style={styles.titleModoPreparo}>Modo de preparo</Text>
                <View style={styles.listmodoPreparo}>
                    <Text style={styles.textListModoPreparo}><strong>1 </strong> 
                         Depois de descongelada, deixe a costela marinando na mistura dos temperos durante 2 horas em temperatura ambiente.
                    </Text>
                    <Text style={styles.textListModoPreparo}><strong>2 </strong> 
                        Na hora de assar, coloque a peça inteira sobre a grelha em forma de cúpula já bem quente, com os ossos voltados para o fogo.
                    </Text>
                    <Text style={styles.textListModoPreparo}><strong>3 </strong> 
                        Deixe 20 minutos.
                    </Text>
                    <Text style={styles.textListModoPreparo}><strong>4 </strong> 
                        Vire a costela e deixe mais 20 minutos.
                    </Text>
                    <Text style={styles.textListModoPreparo}><strong>5 </strong> 
                        Sirva guarnecida com fatias de abacaxi grelhadas.
                    </Text>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    card: {
       width: 330,
       height: 700,
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
        maxWidth: 250,
    },
    textListModoPreparo: {
        marginTop: 10,
    },    
   
}); 