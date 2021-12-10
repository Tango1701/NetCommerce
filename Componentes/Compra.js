
// Import do react
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';


const Compra = () => {

    const DescricaoProduto = () => {
        return (
            <View style={descricaoProduto.fundo}>
                <View style={descricaoProduto.form}>
                        <Image 
                            source = {require("../assets/img/Mercedes_Shoes.jpg")} 
                            style = {descricaoProduto.img} 
                            resizeMode = "stretch"
                        />
                <Text style={descricaoProduto.dados}>Marca</Text>
                <Text style={descricaoProduto.dados}>Mercedes</Text>
                <Text style={descricaoProduto.dados}>Preço</Text>
                <Text style={descricaoProduto.dados}>13.000 kz</Text>


                </View>


                
            </View>
        )
    }

    const Detalhes = () => {
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
                <TouchableOpacity style={MenuBar.button}>
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
            <Detalhes/>
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
            height: 60+'%',
            borderRadius: 10,
        },
          text: {
            fontSize: 11,
            color: 'black',
            textAlign: 'center',
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