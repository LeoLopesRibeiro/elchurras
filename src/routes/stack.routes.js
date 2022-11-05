import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ListarChurras from "../pages/ListarChurras";
import CriarChurras from "../pages/CriarChurras";
import TabRoutes from "./tab.routes";

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
        <Screen
          name="Resultados"
          component={TabRoutes}
          options={{ headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
