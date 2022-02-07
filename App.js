
// Componentes Nativos
import React, { useRef } from "react";
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Meus Componentes
import Home from './View/Componentes/HomeScreen';
import Venda from './View/Componentes/Venda';
import Compra from "./View/Componentes/Compra";
import Pagar from "./View/Componentes/Pagar";
import Cadastrar from "./View/Componentes/Cadastrar";
import Login from "./View/Componentes/Login"
import Splash from "./View/Componentes/Splash";
import NovaTela from "./View/Componentes/NovaTela";
import { View } from "react-native-web";


// Cria uma nova pilha de janelas para a navegação
const Stack = createNativeStackNavigator();

export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Bem-Vindo" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastrar" component={Cadastrar} />
          <Stack.Screen name="Venda" component={Venda} />
          <Stack.Screen name="Compra" component={Compra} options={{
          title:  "Comprar",
          headerRight: () => (
          <View style = {styles.buttons}>            
         
             <TouchableOpacity
              onPress={() => alert('Pressiona pagar para continuar')}
              style={styles.button}
            >
               <Image 
                style={{ width: 30, height: 30, margin: 0 }} 
                source={require('./View/img/like.png')} 
                resizeMode = "stretch"
                />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => alert('Pressiona pagar para continuar')}
              style={styles.button}
            >
               <Image 
                style={{ width: 30, height: 30, margin: 0 }} 
                source={require('./View/img/carrinho_black.png')} 
                resizeMode = "stretch"
                />
            </TouchableOpacity>
          </View>
          ),
        }} />
          <Stack.Screen name="NovaTela" component={NovaTela}/>
          <Stack.Screen name="Carrinho" component={Pagar} options={{
          // headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => alert('Pressiona pagar para continuar')}
              style={styles.button}
            >
               <Image 
                style={{ width: 30, height: 30, margin: 0 }} 
                source={require('./View/img/carrinho_black.png')} 
                resizeMode = "stretch"
                />
            </TouchableOpacity>
          ),
        }} />
        </Stack.Navigator>
      </NavigationContainer>
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
  buttons: {
    width: 50+"%",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
