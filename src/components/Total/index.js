import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
  } from "react-native";



export default function Total({data}){
    return(
    <View style={styles.ViewResultado}>
        <View style={styles.ViewTotal}>
          <Text style={styles.textTotal}>Total: </Text>
          <Text style={styles.textNumero}>
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(data.preco_total)}
          </Text>
        </View>
        <View style={styles.ViewTotal}>
          <Text style={styles.textNumeroRateio}>Rateio:</Text>
          <Text style={styles.textNumero}>
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(data.rateio)}
          </Text>
        </View>
      </View>
    )
}

const styles= StyleSheet.create({
    textTotal: {
        color: "#fff",
        fontSize: 25,
        marginLeft: 10,
        textTransform: "capitalize",
        fontFamily: "Poppins_700Bold",
      },
      ViewResultado: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: 20,
        padding: 10,
      },
      ViewTotal: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
      },
      textNumero: {
        color: "#ffffff",
        fontFamily: "Poppins_700Bold",
      },
      textNumeroRateio: {
        color: "#ffffff",
        marginLeft: 10,
        fontFamily: "Poppins_700Bold",
      },
})