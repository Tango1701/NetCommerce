import { Text, StyleSheet, View, TextInput, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Cadastrar = () => {

    const [email, setEmail ] = useState("");
    const [nome, setNome ] = useState("");
    const [senha, setSenha ] = useState("");
    // const [id, setId ] = useState("");


        const SalvarUser = () => {
 
          var  xmlhttp =  new XMLHttpRequest();
          
              let url = "https://localhost/NetCommerce/Model/SalvaUser.php?"+
              "email="+email +"&nome="+nome +"&senha="+senha ;
              xmlhttp.open('GET', url, true);
              xmlhttp.send();
              xmlhttp.onreadystatechange = () =>
              {
                   if(xmlhttp.readyState == 4) // Return Request
                  {  
                     alert(xmlhttp.response)
                     var id = xmlhttp.response

                     const dados = {
                      email,
                      nome,
                      senha,
                      id
                    }

                     AsyncStorage.clear()
                     AsyncStorage.setItem("user", JSON.stringify(dados))
                     alert(id)
                  }
              }
      }
    
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

      <TouchableOpacity style={styles.botao} onPress={SalvarUser} >
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

