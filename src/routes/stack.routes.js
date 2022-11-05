import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ListarChurras from "../pages/ListarChurras";
import CriarChurras from "../pages/CriarChurras";
import SelecionarUsuarios from "../pages/SelecionarUsuarios";
import AdicionarUsuarios from "../pages/AdicionarUsuarios";
import Receitas from "../pages/Receitas";
import TabRoutes from "./tab.routes";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="SelecionarUsuarios"
          component={SelecionarUsuarios}
          options={{
            title: "Selecionar Usuários",
          }}
        />
        <Screen
          name="AdicionarUsuarios"
          component={AdicionarUsuarios}
          options={{
            title: "Adicionar Usuários",
          }}
        />
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
        <Screen
          name="Receitas"
          component={Receitas}
          options={{
            title: "Receitas",
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
