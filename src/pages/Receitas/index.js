import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import { ScrollView } from "react-native-web";
import Cupim from "./Cupim";
// import Picanha from "./Picanha";
// import Lombo from "./Lombo";
// import Maminha from "./Maminha";
// import Linguica from "./Linguica";
// import Coxa from "./Coxa";
// import Costela from "./Costela";
// import Coracao from "./Coracao";
// import Asa from "./Asa";

function Receitas(){
    return(
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.whiteBackground}>
                <Text style={styles.textReceitas}>Receitas</Text>
            </View>      
            <Cupim />
            {/* <Picanha />
            <Linguica />
            <Maminha />
            <Lombo />
            <Coxa />
            <Costela />
            <Coracao />
            <Asa /> */}
        </View>
        </ScrollView>
    )
}

export default Receitas;

const styles = StyleSheet.create({
    container:{
        minHeight: '100%',
        alignItems: "center",
        height: '100%',
        backgroundColor: '#340C0C',
    },
    whiteBackground: {
        height: 100,
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
    },
    textReceitas: {
        fontWeight: 'bold',
        fontSize: 32,
    },
})