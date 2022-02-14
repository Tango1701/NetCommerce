
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


// import {TodosOsProdutos} from "../../Controller/Controller"


// Pagina inicial
const HomeScreen = ({ navigation, props }) => {


    const [produtos, setProdutos] = useState([])
    const [dados, setDados] = useState([])

    // alert(dados)

    useEffect( () => {
       a()
       busca()
    //    TodosOsProdutos()
    }, [])

    const a = async () => {
        const response = await fetch("http://localhost/NetCommerce/Model/BuscaProdutos.php")
        const dados = await response.json() 
        setProdutos(dados)
    }
    
    const busca = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('dados')
          jsonValue != null ? setDados(JSON.parse(jsonValue)) : null;
        } catch(e) {
          alert("Erro ao buscar " + e)
        }
    }

    //Banner a ser apresentado na tela inicial
    const Banner = () => {
        return(
                <TouchableOpacity style={conteudo.Banner} onPress={() => navigation.navigate('Compra')}>
                    <Image 
                        source = {require("../img/1.png")} 
                        style = {conteudo.img} 
                            // resizeMode = "stretch"
                    />
                    <Text style = {conteudo.h2}>Nike Air - 12.500 AOA </Text>
                   </TouchableOpacity>
        )
    }


    //Conteudo a ser apresentado na tela inicial
    const Conteudo = () => {
        return(
                <FlatList
                    keyExtractor={(item) => item.Id_Produto}
                    data={produtos} 
                    renderItem={({ item }) => (

                    <TouchableOpacity style={conteudo.Card} 
                        onPress={() => 
                            navigation.navigate('Compra', {
                                Nome: item.Nome,
                                Preco: item.Preco,
                                Tipo: item.Tipo,
                                Video: item.Video,
                                Descricao: item.Descricao,
                                Id_Produto: item.Id_Produto,
                                Imagem: "http://localhost/NetCommerce/Files/" + item.Id_Usuario + "/"+
                                item.Id_Produto + "/" + item.Imagem,
                            })
                        }>

                       <Image 
                            source = {"http://localhost/NetCommerce/Files/" + item.Id_Usuario + "/"+
                            item.Id_Produto + "/" + item.Imagem} 
                            style = {conteudo.img} 
                            // resizeMode = "stretch"
                        />
                        <View style={conteudo.detalhes}>
                            <Text style = {conteudo.h3}>{item.Nome}</Text>
                            <Text style = {conteudo.h5}>{item.Tipo}</Text>
                        </View>
                    </TouchableOpacity>
                    )}
                />
        )
    }

    // menu inferior
    return (
        <View style={Home.container}>
            {/* <Banner/> */}
            <View style={Home.container}>
                <Conteudo/>
            </View>
            <View style={MenuBar.container}>
                <TouchableOpacity style={Home.button}>
                    <Image 
                        source = {require("../img/Home.png")} 
                        style = {MenuBar.img} resizeMode = "stretch"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={Home.button} onPress={() => navigation.navigate('Venda')}>
                    <Image 
                        source = {require("../img/Money.png")} 
                        style = {MenuBar.img} 
                        resizeMode = "stretch" 
                    />
                </TouchableOpacity>
                <TouchableOpacity style={Home.button} onPress={() => navigation.navigate('Gostos')}>
                    <Image 
                        source = {require("../img/Search_white.png")} 
                        style = {MenuBar.img} 
                        resizeMode = "stretch"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={Home.button}>
                    <Image 
                        source = {require("../img/User.png")} 
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
            justifyContent: 'space-evenly',
            width: 100+'%',
            height: 100+'%',
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
          },
          banner: {
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'space-arround',
            width: 100+'%',
            display: 'flex',
            flexDirection: 'column',
            height: 150,
          },
          detalhes: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: 50+"%",
            height: 100+"%",
          },
          img: {
            width: 80,
            height: 120,
          },
          h2: {
            fontSize: 22,
            fontWeight: "bold",
            textAlign: "center",
          },
          h3: {
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
          },
          h5: {
            fontSize: 17,
            fontWeight: 100,
            textAlign: "center",
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