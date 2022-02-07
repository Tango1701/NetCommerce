
// Import do react
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';


const Compra = ({navigation, route}) => {

    const parametros = route.params

    const DescricaoProduto = () => {
        return (
                <View style={descricaoProduto.form}>


                     <Image style = {descricaoProduto.img} source = {parametros.Imagem} resizeMode = "strech"/> 

                    <View style={descricaoProduto.descricao}>
                         <View style={descricaoProduto.item}>
                            <Text style={descricaoProduto.dados}>Marca</Text>
                            <Text style={descricaoProduto.detalhe}>{parametros.Nome}</Text>
                        </View> 
                         <View style={descricaoProduto.item}>
                            <Text style={descricaoProduto.dados}>Preço</Text>
                            <Text style={descricaoProduto.detalhe}>{parametros.Preco}</Text>
                        </View> 
                         <View style={descricaoProduto.item}>
                            <Text style={descricaoProduto.dados}>Disponível até</Text>
                            <Text style={descricaoProduto.detalhe}>21/12/2021</Text>
                        </View>
                        <View style={descricaoProduto.desc}>
                            <Text style={descricaoProduto.dados}>Descrição</Text>
                            <Text style={descricaoProduto.text}>{parametros.Descricao}</Text>
                        </View>
                    </View> 
                    
                </View>
                
        )
    }

    return (
        <View style = {descricaoProduto.fundo}>
            <DescricaoProduto/>
        </View>
    );
};

const descricaoProduto = StyleSheet.create(
    {
        form: 
        {
          height: 90+'%',
          width: 100+"%",
          backgroundColor: 'white',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        //   paddingTop: 5+'%',
          marginTop: 2+'%',
          color: 'black',
        },
        descricao: 
        {
          height: 35+'%',
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
        desc: 
        {
          height: 35+'%',
          width: 100+"%",
          display: 'flex',
          flexDirection: 'column',
          paddingTop: 1+'%',
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
            height: 50+'%',
            borderRadius: 10,
        },
          text: {
            fontSize: 17,
            color: 'black',
          },
          detalhe: {
            fontSize: 17,
            color: 'black',
            paddingTop: 1+'%',
            marginLeft: 3+'%',
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
            bottom: 1+'%',
            left: 10+'%',
            position: 'absolute',
        },
        img: {
            width: 70+'%',
            height: 100+'%',
        },
        button: {
            fontSize: 20,
            width: 50,      
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            marginTop: 10+'%',
          }
    }
)
export default Compra;