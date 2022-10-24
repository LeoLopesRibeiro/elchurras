import Locacao from "./src/pages/Locacao";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Assados from "./src/pages/Assados";
import Bebidas from "./src/pages/Bebidas";
import Header from "./src/components/Header";
import Outros from "./src/pages/Outros";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
const Tab = createBottomTabNavigator()
function Routes(){
    return(
        <Tab.Navigator
        screenOptions={{
            headerStyle:{
             backgroundColor: '#340C0C',
            },
            headerTitleStyle: {
             color: '#fff', 
           },
           tabBarStyle: {
               
                borderTopColor: '#F2F2F2',

                
           },
           
         
             tabBarActiveTintColor: '#EED0A2',
             tabBarInactiveTintColor: '#F2F2F2',
             tabBarActiveBackgroundColor: '#340C0C',
             tabBarInactiveBackgroundColor: '#340C0C',
             // tabBarIcon:, 
                 tabBarStyle: [{
                       backgroundColor: '#1B1D2E',
                       display: 'flex',
                       justifyContent: 'space-between'
                 },
                 null
             ]
          }}
         >
           <Tab.Screen name="Assados" component={Assados} 
           options={{
             headerTitle: ()=> <Header />,
             tabBarIcon: ({size, focused})=>{
                 if (focused) {
                     return <MaterialCommunityIcons name="food-steak" size={24}  color="#EED0A2" />
                }else{
                     return <MaterialCommunityIcons name="food-steak" size={24}  color="#F2F2F2" />
                 }
             }
           }}/>
           <Tab.Screen name="Bebidas" component={Bebidas} 
           options={{
             headerTitle: ()=> <Header />,
             tabBarIcon: ({size, focused})=>{
                 if (focused) {
                     return <Ionicons name="beer-outline" size={size} color="#EED0A2"/>
                 }else{
                     return <Ionicons name="beer-outline" size={size} color="#F2F2F2"/>
                 }
             }
           }}/>
           <Tab.Screen name="Outros" component={Outros} 
           options={{
             headerTitle: ()=> <Header />,
             tabBarIcon: ({size, focused})=>{
                 if (focused) {
                     return <Ionicons name="ellipsis-horizontal-outline" size={size} color="#EED0A2"/>
                 }else{
                     return <Ionicons name="ellipsis-horizontal-outline" size={size} color="#F2F2F2"/>
                 }
             }
           }}/><Tab.Screen name="Locação" component={Locacao} 
           options={{
             headerTitle: ()=> <Header />,
             tabBarIcon: ({size, focused})=>{
                 if (focused) {
                     return <Ionicons name="map-outline" size={size} color="#EED0A2"/>
                 }else{
                     return <Ionicons name="map-outline" size={size} color="#F2F2F2"/>
                 }
             }
           }}/>
        </Tab.Navigator>
    )
}
export default Routes;