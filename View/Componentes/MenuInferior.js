import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function MenuInferior() {
 return (
    <View style={Home.container}>
       
        
        <View style={MenuBar.container}>
            <TouchableOpacity style={Home.button}>
                <Image 
                    source = {require("../assets/img/Home.png")} 
                    style = {MenuBar.img} resizeMode = "stretch"
                />
            </TouchableOpacity>
            <TouchableOpacity style={Home.button} onPress={() => navigation.navigate('Venda')}>
                <Image 
                    source = {require("../assets/img/Money.png")} 
                    style = {MenuBar.img} 
                    resizeMode = "stretch" 
                />
            </TouchableOpacity>
            <TouchableOpacity style={Home.button}>
                <Image 
                    source = {require("../assets/img/Search_white.png")} 
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
    </View>
  );
};

// Estilo da Barra de Menu
const MenuBar = StyleSheet.create(
    {
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#1e1e1e',
            width: 70+'%',
            height: 8+'%',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 20,
            bottom: 3+'%',
            position: 'absolute',
        },
        img: {
            width: 60+'%',
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
})





