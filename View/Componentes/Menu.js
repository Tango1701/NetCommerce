import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';

export default function Menu({navigation}) {
 return (
   
    <View style={MenuBar.container}>
        <TouchableOpacity style={Home.button}>
            <Image 
                source = {require("../img/Home.png")} 
                style = {MenuBar.img} resizeMode = "stretch"
            />
        </TouchableOpacity>
        <TouchableOpacity style={Home.button} onPress={() => navigation.navigate('Venda')}>
            <Image 
                source = {require("../img//Money.png")} 
                style = {MenuBar.img} 
                resizeMode = "stretch" 
            />
        </TouchableOpacity>
        <TouchableOpacity style={Home.button}>
            <Image 
                source = {require("../img/Search_white.png")} 
                style = {MenuBar.img} 
                resizeMode = "stretch"
            />
        </TouchableOpacity>
        <TouchableOpacity style={Home.button}>
            <Image 
                source = {require("../assets/img/User.png")} 
                style = {MenuBar.img} 
                resizeMode = "stretch"
            />
        </TouchableOpacity>
    </View>

  );
}


// Estilo da Barra de Menu
const MenuBar = StyleSheet.create(
    {
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#1e1e1e',
            width: 100+'%',
            height: 9+'%',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 0,
            bottom: 0+'%',
            position: 'relative',
          
        },
        img: {
            width: 40+'%',
            height: 70+'%',
        }
    }
)

const Home = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      width: 100+'%',
      height: 100+'%',
    },
    text: {
      fontSize: 20,
      color: 'black',
      textAlign: 'center',
    },
    button: {
        fontSize: 20,
        width: 20+'%',      
        alignItems: 'center',
        justifyContent: 'center',
        height: 90+'%',
        marginTop: 0+'%',
      }
  });