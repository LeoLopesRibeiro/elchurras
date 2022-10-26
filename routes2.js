import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Assados from "./src/pages/Assados";
import Routes from "./routes";
import Receitas from "./src/pages/Receitas";



const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Resultados"
          component={Routes} 
          options={{headerShown:false}}
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