import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AdicionarUsuarios from "../pages/AdicionarUsuarios";
import SelecionarUsuarios from "../pages/SelecionarUsuarios";


const { Screen, Navigator} = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Adicionar"
          component={AdicionarUsuarios} 
          options={{headerShown:false}}
        />
        <Screen
          name="SelecionarUsuarios"
          component={SelecionarUsuarios}
        />
      </Navigator>
    </NavigationContainer>
  );
}