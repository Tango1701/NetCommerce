
// Componentes Nativos
import React, { useRef } from "react";
import { StyleSheet, TouchableOpacity, Image,  DrawerLayoutAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Meus Componentes
import { Formulario } from './Componentes/Formulario';
import HomeScreen from './Componentes/HomeScreen';
import Venda from './Componentes/Venda';
import Perfil from "./Componentes/Perfil";
import Compra from "./Componentes/Compra";
import Pagar from "./Componentes/Pagar";
import Cadastrar from "./Componentes/Cadastrar";
import Login from "./Componentes/Login"
import Home from "./src/pages/Home";


// Cria uma nova pilha de janelas para a navegação
const Stack = createNativeStackNavigator();

export default function App() {

  // Estilo Gaveta
  const navigationView = () => (
    <Perfil/>
  );

  const drawer = useRef(null);

  return (
    <DrawerLayoutAndroid ref={drawer} drawerWidth={300} drawerPosition={"right"} renderNavigationView={navigationView}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastrar" component={Cadastrar} />
          <Stack.Screen name="Home" component={Home}/>

          

          <Stack.Screen name="Venda" component={Venda} />
          <Stack.Screen name="Compra" component={Compra}/>
          <Stack.Screen name="Carrinho" component={Pagar} options={{
          // headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => alert('Pressiona pagar para continuar')}
              style={styles.button}
            >
               <Image 
                style={{ width: 30, height: 30, margin: 0 }} 
                source={require('./assets/img/carrinho_black.png')} 
                resizeMode = "stretch"
                />
            </TouchableOpacity>
          ),
        }} />
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
  button: {
    fontSize: 30,
    width: 40+"%",
    backgroundColor: '#fff',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 70+"%",
    width: 40+"%",
  }
});
