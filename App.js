
// Componentes Nativos
import React, { useRef } from "react";
import { StyleSheet,  DrawerLayoutAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Meus Componentes
import { Formulario } from './Componentes/Formulario';
import HomeScreen from './Componentes/HomeScreen';
import Venda from './Componentes/Venda';
import Perfil from "./Componentes/Perfil";

// Cria uma nova pilha de janelas para a navegação
const Stack = createNativeStackNavigator();

export default function App() {

  // Estilo Gaveta
  const navigationView = () => (
    <Perfil/>
  );

  const drawer = useRef(null);

  const abre = () => {
    drawer.current.openDrawer()
  } 
    
  return (
    <DrawerLayoutAndroid ref={drawer} drawerWidth={300} drawerPosition={"right"} renderNavigationView={navigationView}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Venda" component={Venda} />
        </Stack.Navigator>
      </NavigationContainer>
    </DrawerLayoutAndroid>
  );
}

// Estilo basico da pagina
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: '#1e1e1e',
    textAlign: 'center',
    color: 'white',
  }
});
