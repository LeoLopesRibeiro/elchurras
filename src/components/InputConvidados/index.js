import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";

export default function InputConvidados({ count, setCount }) {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.inputField}>
      <TouchableOpacity onPress={() => setCount(count != 0 ? count - 1 : 0)}>
        <Text style={styles.add_dec}>-</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={`${count}`}
        onChangeText={(text) => {
          setCount(Number(text));
        }}
        placeholderTextColor="#DEDEDE"
        keyboardType="number-pad"
        maxLength={3}
      />
      <TouchableOpacity
        onPress={() => setCount(count != 999 ? count + 1 : 999)}
      >
        <Text style={styles.add_dec}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputField: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    color: "#FFF",
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
    textAlign: "center",
  },
  add_dec: {
    color: "#FFF",
    fontSize: 30,
    fontFamily: "Poppins_700Bold",
  },
});
