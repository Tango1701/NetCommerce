
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

// Pagina inicial
const HomeScreen = ({ navigation, props }) => {

    const faz = () => {
        props.abrePai
    }

    const Conteudo = () => {
        return(
            <>
                <View style={conteudo.Banner}>
                    <Image 
                        source = {require("../assets/img/Mercedes_Shoes.jpg")} 
                        style = {conteudo.img} 
                        resizeMode = "stretch"
                    />
                </View>
                <View style={conteudo.Card}>
                    <Text style={Home.text}>Card Medio</Text>
                </View>
                <View style={conteudo.miniCard}>
                    <Text style={Home.text}>Card Pequeno</Text>
                </View>
            </>
        )
    }

    return (
        <View style={Home.container}>
            <StatusBar></StatusBar> 
            <View style={Home.container}>
                <Conteudo/>
            </View>
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
                <TouchableOpacity style={Home.button} onPress={faz}>
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
            width: 70+'%',
            height: 80+'%',
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

const conteudo = StyleSheet.create(
    {
        Card: {
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            width: 50+'%',
            height: 30+'%',
            margin: 5+'%',
            borderRadius: 20,
            borderWidth: 1,
            borderColor: 'black',
          },
          Banner: {
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100+'%',
            height: 30+'%',
            // borderRadius: 5,
            // borderWidth: 1,
            // borderColor: 'black',
          },
          miniCard: {
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 100,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: 'black',
          },
          img: {
            width: 100+'%',
            height: 100+'%',
          },
    }
)

export default HomeScreen;