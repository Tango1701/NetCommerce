
import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, StyleSheet, View, TextInput, Image, TouchableOpacity } from 'react-native'


const  Login = ({navigation}) => {

  const [credenciais, setCredenciais] = useState([])

    const [email, setEmail ] = useState("");
    const [senha, setSenha ] = useState("")


  useEffect( () => {
      busca()
   }, [])

   const busca = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('user')
        jsonValue != null ? setCredenciais(JSON.parse(jsonValue)) : null;
      } catch(e) {
        alert("Erro ao buscar " + e)
      }
  }

  const emailVerificado = credenciais.email
  const senhaVerificada = credenciais.senha

   
    return (
    <View style={styles.container}>
      {/* <Image style={{ width: 100, height: 100, margin: 30 }} source={require('../assets/aa.png')} /> */}
      <Text style={styles.botaoText2}>NetCommerce</Text>

      <TextInput style={styles.input} placeholder="Digite o seu email " value={email} required 
        onChange={ (e) => {setEmail(e.target.value)}} />

      <TextInput style={styles.input} secureTextEntry={true} placeholder="Digite a sua senha " 
        value={senha} required 
        onChange={ (e) => {setSenha(e.target.value)}}
      />

      <TouchableOpacity style={styles.botao} onPress={() => {
         if(emailVerificado == email && senhaVerificada == senha){
          navigation.navigate('Home')
        }else{
          alert("Email ou senha incorrecto!")
        }
        
         }} >
        <Text style={styles.botaoText}>Iniciar Sessão</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao1} onPress={() =>  { navigation.navigate('Cadastrar')} }>
        <Image style={{ width: 40, height: 40, margin: 0 }} source={require('../img/add_user.png')} />
      </TouchableOpacity>
    </View>)

}

export default  Login

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
    color: "black",
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
    // borderColor:'rgb(30, 30, 30)',
    backgroundColor: 'rgb(30, 30, 30)',
    marginTop: 10+"%",
    marginLeft: 60+"%",
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
    marginBottom: 5+'%',

  }
})
