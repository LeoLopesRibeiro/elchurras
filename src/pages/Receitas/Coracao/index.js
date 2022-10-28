
import { View, Text, Image, StyleSheet } from 'react-native';


export default function Coracao() {
    return(
        <View style={styles.card}>
                <Text style={styles.title}>Coração</Text>
                <View style={styles.divIcons}>
                    <View style={styles.divTempo}>
                        <Image source={require('../../../../assets/watch.png')} style={styles.icon} /> 
                        <Text style={styles.textIcon}>20min</Text>
                    </View>
                    <View style={styles.divPorcao}>
                        <Image source={require('../../../../assets/prato.png')} style={styles.icon} />
                        <Text style={styles.textIcon}>6 porções</Text>
                    </View>
                </View>
                <Text style={styles.titleIngredientes}>Ingredientes</Text>
                <View style={styles.listIngredientes}>
                    <Text>• 1 kg de coração de frango </Text>
                    <Text>• 8 folhas de louro </Text>
                    <Text>• 1 e 1/2 colheres de sopa de orégano </Text>
                    <Text>• 1 e 1/2 colheres de sopa de shoyo </Text>
                    <Text>• 1 colher de sopa de tempero pronto para carne  </Text>
                    <Text>• 1 colher de sopa de pimenta moída </Text>
                    <Text>• 1 colher de sopa de manteiga </Text>
                    <Text>• 1 copo com água morna </Text>

                    
                </View>
                <Text style={styles.titleModoPreparo}>Modo de preparo</Text>
                <View style={styles.listmodoPreparo}>
                    <Text style={styles.textListModoPreparo}><strong>1 </strong> 
                        Limpe os corações primeiro. Retire o grosso da gordura saturada e as veias mais grossas. Cuide para retirar qualquer resquício de sangue coagulado.
                    </Text>
                    <Text style={styles.textListModoPreparo}><strong>2 </strong> 
                        Coloque os corações numa tigela e adicione o restante dos ingredientes.
                    </Text>
                    <Text style={styles.textListModoPreparo}><strong>3 </strong> 
                        Misture bem (usando as mãos mesmo) e cubra, selando bem com plástico filme (PVC).
                    </Text>
                    <Text style={styles.textListModoPreparo}><strong>4 </strong> 
                        Deixar na geladeira de um dia para o outro, para o tempero penetrar bem.
                    </Text>
                    <Text style={styles.textListModoPreparo}><strong>5 </strong> 
                        Retirar e fazer espetinhos na hora de colocar no fogo.
                    </Text>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    card: {
       width: 330,
       height: 750,
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