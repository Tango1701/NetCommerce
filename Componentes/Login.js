import React from 'react'
import { Text, StyleSheet, View, TextInput, Image, TouchableOpacity } from 'react-native'


export default class Login extends React.Component {
  render() {
    return (<View style={styles.container}>

      <Image style={{ width: 100, height: 100, margin: 30 }} source={require('../assets/aa.png')} />


      <Text style={styles.botaoText2}>Bem-Vindo ao NetCommerce</Text>




      <TextInput
        style={styles.input}
        placeholder="Digite o seu email " />

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Digite a sua senha " />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => { this.clicou() }}
      >
        <Text style={styles.botaoText}>Login</Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao1}
        onPress={() => { this.clicou() }}
      >
        {/* <Text style={styles.botaoText}>Fazer Cadastro</Text> */}

        <Image style={{ width: 50, height: 50, margin: 0 }} source={require('../assets/aaa.png')} />
      </TouchableOpacity>


    </View>)
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'

  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  input: {
    marginTop: 10,
    width: 300,
    // backgroundColor: 'rgb(30, 30, 30)',
    fontSize: 16,
    marginBottom: 20,
    borderBottomColor: 'rgb(30, 30, 30)',
    color: 'white',
    borderBottomWidth: 1,
    //fontWeight: 'bold',
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
    width: 80,
    height: 80,
    borderColor:'rgb(30, 30, 30)',
    backgroundColor: 'white',
    marginTop: 50+"%",
    marginLeft: 50+"%",
    borderRadius: 40,
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
    fontWeight: 'bold',
    color: 'rgb(30, 30, 30)',
    

  }
})
