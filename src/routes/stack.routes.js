import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ListarChurras from "../pages/ListarChurras";
import CriarChurras from "../pages/CriarChurras";
import SelecionarUsuarios from "../pages/SelecionarUsuarios";
import AdicionarUsuarios from "../pages/AdicionarUsuarios";
import Receitas from "../pages/Receitas";
import TabRoutes from "./tab.routes";
import Header from "../components/Header";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#340C0C",
          },
          headerTitleStyle: {
            color: "#fff",
          },
        }}
      >
        <Screen
          name="SelecionarUsuarios"
          component={SelecionarUsuarios}
          options={{
            headerTitle: () => <Header />,
            title: "Selecionar Usuários",
            headerTintColor: "#fff",
          }}
        />
        <Screen
          name="AdicionarUsuarios"
          component={AdicionarUsuarios}
          options={{
            headerTitle: () => <Header />,
            title: "Adicionar Usuários",
            headerTintColor: "#fff",
          }}
        />
        <Screen
          name="ListarChurras"
          component={ListarChurras}
          options={{
            title: "Listar Churras",
            headerTitle: () => <Header />,
            headerTintColor: "#fff",
          }}
        />
        <Screen
          name="CriarChurras"
          component={CriarChurras}
          options={{
            headerTitle: () => <Header />,
            headerTintColor: "#fff",
            title: "Criar Churras",
          }}
        />
        <Screen
          name="Resultados"
          component={TabRoutes}
          options={{
            headerTitle: () => <Header />,
            headerTintColor: "#fff",
          }}
        />
        <Screen
          name="Receitas"
          component={Receitas}
          options={{
            headerTitle: () => <Header />,
            title: "Receitas",
            headerTintColor: "#fff",
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
