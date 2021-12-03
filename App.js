import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, } from 'react-native';
import { Formulario } from './Componentes/Formulario';
import HomeScreen from './Componentes/HomeScreen';
import Venda from './Componentes/Venda';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen/> */}
      {/* <Formulario/> */}
      <Venda/>
      <StatusBar style="auto" />
    </View>
  );
}


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
  }
});
