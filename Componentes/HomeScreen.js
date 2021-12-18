
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import Info from '../Componentes/Info';

// Pagina inicial
const HomeScreen = ({ navigation, props }) => {

    //Conteudo a ser apresentado na tela inicial
    const Conteudo = () => {
        return(

            <View style={Home.container}>
                <ScrollView>

                    <TouchableOpacity style={conteudo.Banner} onPress={() => navigation.navigate('Compra')}>
                        <Image 
                            source = {require("../assets/img/Mercedes_Shoes.jpg")} 
                            style = {conteudo.img} 
                            resizeMode = "stretch"
                            
                        />
                    </TouchableOpacity>

                
                    <Text>LANÇAMENTO</Text>
                    <View style={conteudo.Card}>
                        <Info img={require('../assets/img/1.png')} cost="R$140,90" onClick={()=> navigation.navigate('Compra')}>
                            Nike Air Max Dia
                        </Info>
                    </View>

                   
               
                
                   
               
               
                    <View style={conteudo.miniCard}>
                        <Text style={Home.text}>Card Pequeno</Text>
                    </View> 
                </ScrollView>
            </View>
            
        )
    }

    // menu inferior
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
      //alignItems: 'center',
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

const styles = StyleSheet.create({
    container:{
      flex:1,
      width: '100%',
      backgroundColor: '#FFF'
    },
    header:{
      marginBottom: 8
    },
    image:{
      width: '100%'
    },
    textContainer:{
      flexDirection: 'row',
      marginVertical: '5%',
      marginHorizontal: '5%'
    },
    text:{
      fontFamily: '',
      fontSize: 26,
      marginHorizontal: '1%'
    },
    line:{
      borderBottomColor: '#d8d8d8',
      borderBottomWidth: 2,
    }

});

export default HomeScreen;