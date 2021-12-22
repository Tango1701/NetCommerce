
// Import do react
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";


const Compra = ({navigation}) => {

    const Imagens = [
        require("../assets/img/1.png"),
        require("../assets/img/Mercedes_Shoes.jpg"),
        require("../assets/img/3.png"),
    ]

    const DescricaoProduto = () => {
        return (
            <View style={descricaoProduto.fundo}>
                <View style={descricaoProduto.form}>
                    <SliderBox images={Imagens} style={descricaoProduto.img}/>

                    <View style={descricaoProduto.descricao}>
                        <View style={descricaoProduto.item}>
                            <Text style={descricaoProduto.dados}>Marca</Text>
                            <Text style={descricaoProduto.detalhe}>Mercedes Shoes Cristal Design</Text>
                        </View>
                        <View style={descricaoProduto.item}>
                            <Text style={descricaoProduto.dados}>Preço</Text>
                            <Text style={descricaoProduto.detalhe}>13.000 kz</Text>
                        </View>
                        <View style={descricaoProduto.item}>
                            <Text style={descricaoProduto.dados}>Disponível até</Text>
                            <Text style={descricaoProduto.detalhe}>21/12/2021</Text>
                        </View>
                    </View>
                    
                </View>
                
            </View>
        )
    }

    const Opcoes = () => {
        return (
            <View style={MenuBar.container}>
                <TouchableOpacity style={MenuBar.button}>
                    <Image 
                        source = {require("../assets/img/like.png")} 
                        style = {MenuBar.img} resizeMode = "stretch"
                    />
                    <Text style={descricaoProduto.text}>Gosto</Text>

                </TouchableOpacity>
                <TouchableOpacity style={MenuBar.button} >
                    <Image 
                        source = {require("../assets/img/details.png")} 
                        style = {MenuBar.img} 
                        resizeMode = "stretch" 
                    />
                    <Text style={descricaoProduto.text}>Detalhes</Text>

                </TouchableOpacity>
                <TouchableOpacity style={MenuBar.button} onPress={() => navigation.navigate('Carrinho')}>
                    <Image 
                        source = {require("../assets/img/carrinho_black.png")} 
                        style = {MenuBar.img} 
                        resizeMode = "stretch"
                    />
                    <Text style={descricaoProduto.text}>Carrinho</Text>

                </TouchableOpacity>
                
            </View>
        )
    }
    
    return (
        <View>
            <DescricaoProduto/>
            <Opcoes/>
        </View>
    );
};

const descricaoProduto = StyleSheet.create(
    {
        form: 
        {
          height: 98+'%',
          width: 100+"%",
          backgroundColor: '#fff',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 5+'%',
          marginTop: 2+'%',
          color: 'black',
        },
        descricao: 
        {
          height: 98+'%',
          width: 100+"%",
          backgroundColor: '#fff',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          display: 'flex',
          flexDirection: 'column',
          paddingTop: 5+'%',
          paddingLeft: 5+'%',
          marginTop: 2+'%',
          color: 'black',
        },
        item: 
        {
          width: 100+"%",
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'row',
          paddingTop: 1+'%',
          color: 'black',
        },
        fundo: 
        {
            height: 100+'%',
            width: 100+"%",
            backgroundColor: '#1e1e1e',
            paddingTop: 5+'%',
            alignItems: 'center',
            color: 'white',
        },
        img: {
            width: 90+'%',
            height: 90+'%',
            marginLeft: 5+'%',
            borderRadius: 10,
        },
          text: {
            fontSize: 11,
            color: 'black',
            textAlign: 'center',
          },
          detalhe: {
            fontSize: 14,
            color: 'black',
            textAlign: 'center',
            paddingTop: 1+'%',
            marginLeft: 5+'%',
          },
          dados: {
            fontSize: 18,
            color: 'black',
            fontWeight: 'bold',
            color: 'rgb(30, 30, 30)',
          },
          button: {
              fontSize: 20,
              width: 20+'%',      
              alignItems: 'center',
              justifyContent: 'center',
              height: 90+'%',
              marginTop: 0+'%',
            }
            ,
        subTitulo: 
        {
            color: 'white',
            textAlign: 'left',
            fontSize: 17,
            marginTop: 30,
            marginRight: 10
        }
    }
)


// Estilo da Barra de Menu
const MenuBar = StyleSheet.create(
    {
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#fff',
            width: 80+'%',
            height: 7+'%',
            bottom: 3+'%',
            left: 10+'%',
            position: 'absolute',
        },
        img: {
            width: 70+'%',
            height: 100+'%',
        },
        button: {
            fontSize: 20,
            width: 20+'%',      
            alignItems: 'center',
            justifyContent: 'center',
            height: 90+'%',
            marginTop: 0+'%',
          }
    }
)
export default Compra;