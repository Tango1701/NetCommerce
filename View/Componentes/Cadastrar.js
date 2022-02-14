import { Text, StyleSheet, View, TextInput, Alert, TouchableOpacity } from 'react-native'
// import Firebase from "../firebase/Firebase"
import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Cadastrar = () => {

    const [email, setEmail ] = useState("");
    const [nome, setNome ] = useState("");
    const [senha, setSenha ] = useState("");
   
     const dados = {
            email,
            nome,
            senha,
        }

    const salvaUser = (e) => {
        // e.preventDefault();

        //Pega a referência da tabela no firebase
        // const userRef = Firebase.database().ref();

        // O que vai ser enviado
        // const dados = {
        //     email,
        //     nome,
        //     senha,
        // }

        // Mandar na Base de dados
        // userRef.push(dados);

        // console.log(dados)

        Alert.alert ("Usuario Cadastrado");
    };
    
    return (
    <View style={styles.container}>
     
      <TextInput
        style={styles.input}
        placeholder="Digite o seu email " 
        value={email} required 
        onChange={ (e) => {setEmail(e.target.value)}}
        />
          
      <TextInput
        style={styles.input}
        placeholder="Digite o seu nome " 
        value={nome} required 
        onChange={ (e) => {setNome(e.target.value)}}
        />

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Digite a sua senha " 
        value={senha} required 
        onChange={ (e) => {setSenha(e.target.value)}}
        />

      <TouchableOpacity
        style={styles.botao}
        onPress={
          async () => {
            try {
              await AsyncStorage.setItem( "user", JSON.stringify(dados))
              alert ("Usuario Cadastrado");

            } catch (e) {
              alert('erro')
            }
          }
           }
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

