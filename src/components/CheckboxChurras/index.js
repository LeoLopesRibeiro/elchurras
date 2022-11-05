import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";

export default function CheckboxChurras({
  data,
  setValue,
  value,
  chave,
  width,
}) {
  function setValueHandler() {
    if (data.value) {
      setValue({
        ...value,
        [chave]: { ...data, value: false },
      });
    } else {
      setValue({
        ...value,
        [chave]: { ...data, value: true },
      });
    }
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
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
    textTransform: "capitalize",
  },
});
