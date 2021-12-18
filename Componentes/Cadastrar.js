import React from 'react'
import { Text, StyleSheet, View, TextInput, Image, TouchableOpacity } from 'react-native'


const Cadastrar = () => {
    return (
    <View style={styles.container}>
     
      <TextInput
        style={styles.input}
        placeholder="Digite o seu email " />

      <TextInput
        style={styles.input}
        placeholder="Digite o seu email " />

      <TextInput
        style={styles.input}
        placeholder="Digite o seu email " />
          
      <TextInput
        style={styles.input}
        placeholder="Digite o seu nome " />


      <TextInput
        style={styles.input}
        placeholder="Digite a sua Cidade " />


      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Digite a sua senha " />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {  }}
      >
        <Text style={styles.botaoText}>Cadastrar</Text>

      </TouchableOpacity>
    
    </View>
    )
  }

export default Cadastrar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  input: {
    marginTop: 10,
    width: 300,
    fontSize: 16,
    marginBottom: 20,
    borderBottomColor: 'rgb(30, 30, 30)',
    color: 'black',
    borderBottomWidth: 1,
    borderRadius: 3,
    padding: 10
  },
  botao: {
    width: 300,
    height: 42,
    marginTop: 10,
    borderRadius: 4,
    backgroundColor: 'rgb(30, 30, 30)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  botao1: {
    width: 300,
    height: 42,
    marginTop: 10,
    borderRadius: 4,
    backgroundColor: 'rgb(30, 30, 30)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'

  },
  botaoText2: {
    fontSize: 25,
    margin: 40,
    fontWeight: 'bold',
    color: 'black'

  }
})

