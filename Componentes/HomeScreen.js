
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const HomeScreen = () => {
    return (
        <View style={Home.container}>
            <StatusBar></StatusBar> 
            
            <View style={MenuBar.container}>
                <Image 
                    source = {require("../assets/img/Home.png")} 
                    style = {MenuBar.img} 
                    resizeMode = "stretch"
                />
                <Image 
                    source = {require("../assets/img/Money.png")} 
                    style = {MenuBar.img} 
                    resizeMode = "stretch"
                />
                <Image 
                    source = {require("../assets/img/Search_white.png")} 
                    style = {MenuBar.img} 
                    resizeMode = "stretch"
                />
                <Image 
                    source = {require("../assets/img/User.png")} 
                    style = {MenuBar.img} 
                    resizeMode = "stretch"
                />
            </View>
            
            {/* <TouchableOpacity style={Home.button}>
                <Text style={Home.text}>Ok</Text>
            </TouchableOpacity> */}
        </View>
    );
};

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
            width: 16+'%',
            height: 60+'%',
        }
    }
    
)

const Home = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    //   justifyContent: 'center',
      width: 100+'%',
      height: 100+'%',
    },
    text: {
      fontSize: 20,
      color: '#fff',
      textAlign: 'center',
    },
    button: {
        fontSize: 20,
        backgroundColor: '#1e1e1e',
        textAlign: 'center',
        width: 80+'%',
        height: 8+'%',
        marginTop: 160+'%',
      }
  });

export default HomeScreen;