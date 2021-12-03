import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';



const Venda = () => {
    return (
        <View style={formulario.fundo}>
            <View style={formulario.bar}>
                <Image 
                    source = {require("../assets/img/voltar_gray.png")} 
                    style = {formulario.img} 
                    resizeMode = "stretch"
                />
                <Text style={formulario.titulo}>Venda</Text>
            </View>
            
            <Text style={formulario.subTitulo}>Preencha o formulário abaixo</Text>
            <View style={formulario.form}>
                
                <TextInput style={formulario.input} placeholder="Tipo de produto"/>
                <TextInput style={formulario.input} placeholder="Marca"/>
                <TextInput style={formulario.input} placeholder="Modelo"/>
                <TextInput style={formulario.input} placeholder="Tempo de uso"/>
                <TextInput style={formulario.input} placeholder="Informe o preço da venda"/>
                <TextInput style={formulario.descInput} placeholder="Descrição abragente do produto."/>

                <View style={formulario.imgBar}>
                    <Image source = {require("../assets/img/Camera_dark.png")} style = {formulario.barImg} resizeMode = "stretch"/>
                    <Image source = {require("../assets/img/Add_Video.png")} style = {formulario.barImg} resizeMode = "stretch"/>
                    <Image source = {require("../assets/img/Picture_Add.png")} style = {formulario.barImg} resizeMode = "stretch"/>
                    <Image source = {require("../assets/img/Upload_Video.png")} style = {formulario.barImg} resizeMode = "stretch"/>
                    
                </View>
                
                
                <TouchableOpacity style={formulario.button}>
                    <Text style={formulario.label}>Continuar</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    );
};


const formulario = StyleSheet.create(
    {
        form: 
        {
          height: 88+'%',
          width: 100+"%",
          backgroundColor: '#fff',
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
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
        input: 
        {
          height: 10+"%",
          width: 90+"%",
          borderColor: 'rgb(150, 150, 150)',
          borderBottomWidth: 1
        },
        descInput: 
        {
          height: 20+"%",
          width: 90+"%",
          marginTop: 1+"%",
          borderColor: 'rgb(150, 150, 150)',
          borderWidth: 1
        },
        titulo: 
        {
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center'
        },
        subTitulo: 
        {
            color: 'white',
            textAlign: 'left',
            fontSize: 17,
            marginTop: 30,
            marginRight: 10
        },
        label: 
        {
            color: 'white',
            textAlign: 'center',
            fontSize: 17,
            marginRight: 10
        },
        img: {
            width: 12+'%',
            height: 100+'%',
            marginRight: 25+'%',
            marginLeft: 2+'%',
        },
        button: {
            fontSize: 20,
            backgroundColor: '#1e1e1e',
            width: 90+'%',
            justifyContent: 'center',
            display: 'flex',
            height: 8+'%',
            borderRadius: 20,
            marginTop: 1+'%',
        },
        bar: {
            fontSize: 20,
            backgroundColor: '#1e1e1e',
            width: 100+'%',
            display: 'flex',
            flexDirection: 'row',
            height: 5+'%',
            marginTop: 0,
        },
        imgBar: {
            fontSize: 20,
            backgroundColor: 'white',
            width: 90+'%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            height: 10+'%',
            marginTop: 15,
        },
        barImg: {
            width: 10+'%',
            height: 50+'%',
        },
          
    }
  )

export default Venda;