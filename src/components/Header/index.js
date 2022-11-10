import { Platform, Text, View, StyleSheet, Image } from "react-native";
import {useFonts, HeptaSlab_500Medium} from '@expo-google-fonts/hepta-slab'

function Header() {
  let [fontsLoaded] = useFonts({
    HeptaSlab_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.header}>
      <View style={styles.header}>
        <Text style={styles.texto}>EL Churras</Text>
        <Image
          source={require("../../../assets/logo.png")}
          style={{ width: 30, height: 30 }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    color: "#fff",
    display: "flex",
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0,
    borderColor: "#fff",
  },
  texto: {
    marginRight: 20,
    color: "#fff",
    fontSize: 20,
    fontFamily: "HeptaSlab_500Medium",
    textTransform: 'uppercase'
  },
});
export default Header;
