import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Assados from '../pages/Assados';
import Bebidas from '../pages/Bebidas';
import Locacao from '../pages/Locacao';
import Header from '../components/Header';
import Outros from '../pages/Outros';

import { MaterialCommunityIcons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

function TabRoutes({ route }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#340C0C',
        },
        headerTitleStyle: {
          color: '#fff',
        },
        tabBarActiveTintColor: '#EED0A2',
        tabBarInactiveTintColor: '#F2F2F2',
        tabBarActiveBackgroundColor: '#340C0C',
        tabBarInactiveBackgroundColor: '#340C0C',
        tabBarStyle: [
          {
            borderTopColor: '#F2F2F2',
            backgroundColor: '#1B1D2E',
            display: 'flex',
            justifyContent: 'space-between',
          },
          null,
        ],
      }}>
      <Tab.Screen
        name="Assados"
        component={Assados}
        initialParams={{ resultados: route.params }}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return (
                <MaterialCommunityIcons
                  name="food-steak"
                  size={size}
                  color="#EED0A2"
                />
              );
            } else {
              return (
                <MaterialCommunityIcons
                  name="food-steak"
                  size={size}
                  color="#F2F2F2"
                />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="Bebidas"
        component={Bebidas}
        initialParams={{ resultados: route.params }}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return (
                <Ionicons name="beer-outline" size={size} color="#EED0A2" />
              );
            } else {
              return (
                <Ionicons name="beer-outline" size={size} color="#F2F2F2" />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="Outros"
        component={Outros}
        initialParams={{ resultados: route.params }}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return (
                <Ionicons
                  name="ellipsis-horizontal-outline"
                  size={size}
                  color="#EED0A2"
                />
              );
            } else {
              return (
                <Ionicons
                  name="ellipsis-horizontal-outline"
                  size={size}
                  color="#F2F2F2"
                />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="Locação"
        component={Locacao}
        initialParams={{ resultados: route.params }}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return (
                <Ionicons name="map-outline" size={size} color="#EED0A2" />
              );
            } else {
              return (
                <Ionicons name="map-outline" size={size} color="#F2F2F2" />
              );
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default TabRoutes;
