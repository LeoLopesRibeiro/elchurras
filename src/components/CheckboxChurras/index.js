import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";

export default function CheckboxChurras({
  data,
  setValue,
  value,
  width,
}) {
  function setValueHandler() {
    if (data.value) {
      setValue(
        value.map((carne) => {
          if (carne.id === data.id) {
            return { ...carne, value: false };
          } else {
            return { ...carne };
          }
        })
      );
    } else {
      setValue(
        value.map((carne) => {
          if (carne.id === data.id) {
            return { ...carne, value: true };
          } else {
            return { ...carne };
          }
        })
      );
    }
  }

  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[styles.checkboxLabel, { width: width }]}>
      <Checkbox
        value={data.value}
        style={{ padding: 10 }}
        onValueChange={setValueHandler}
        color={data.value ? "#EED0A2" : undefined}
      />
      <TouchableOpacity onPress={setValueHandler} activeOpacity={0.8}>
        <Text style={styles.itemNome}>{data.nome}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxLabel: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  itemNome: {
    color: "#FFF",
    fontSize: 14,
    fontFamily: "Poppins_700Bold",
    marginLeft: 5,
    textTransform: "capitalize",
  },
});
