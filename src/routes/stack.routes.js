import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ListarChurras from "../pages/ListarChurras";
import CriarChurras from "../pages/CriarChurras";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="ListarChurras"
          component={ListarChurras}
          options={{
            title: "Listar Churras",
          }}
        />
        <Screen
          name="CriarChurras"
          component={CriarChurras}
          options={{
            title: "Criar Churras",
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
