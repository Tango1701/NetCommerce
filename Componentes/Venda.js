
// Import do react
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, Image, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';

// Jamela de Vendas
const Venda = ({ navigation }) => {
    
    //Inicializa e permite alterar o valor selecionado do Piker 
    const [selectedValue, setSelectedValue] = useState();

    return (
        <View style={formulario.fundo}>
           
            <Text style={formulario.subTitulo}>Preencha o formulário abaixo</Text>
            <ScrollView style={formulario.form}>
                <View style={formulario.content} >

                    {/* DropDown para selecionbar o tipo de produto a venda */}
                    <Picker
                        selectedValue={selectedValue}
                        style={formulario.input}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Eletronicos" value="eletronico" />
                        <Picker.Item label="Eletrodomesticos" value="eletrodomesticos" />
                        <Picker.Item label="Viatura" value="viatura" />
                        <Picker.Item label="Mobiliário" value="mobiliario" />
                        <Picker.Item label="Casa" value="casa" />
                    </Picker>

                    {/* Inputs dos detalhes */}
                    <TextInput style={formulario.input} placeholder="Marca"/>
                    <TextInput style={formulario.input} placeholder="Modelo"/>
                    <TextInput style={formulario.input} placeholder="Tempo de uso"/>
                    <TextInput style={formulario.input} placeholder="Informe o preço da venda"/>
                    <TextInput style={formulario.descInput} placeholder="Descrição abragente do produto."/>

                    {/* Barra de opções de mídea  a ser carregada */}
                    <View style={formulario.imgBar}>
                        <Text>Adicionar Mídia</Text>
                        <Image source = {require("../assets/img/Camera_dark.png")} style = {formulario.barImg} resizeMode = "stretch"/>
                        <Image source = {require("../assets/img/Add_Video.png")} style = {formulario.barImg} resizeMode = "stretch"/>
                        <Image source = {require("../assets/img/Picture_Add.png")} style = {formulario.barImg} resizeMode = "stretch"/>
                        <Image source = {require("../assets/img/Upload_Video.png")} style = {formulario.barImg} resizeMode = "stretch"/>
                    </View>
                    
                    {/* Botão de continuar. Ainda sem acção */}
                    <TouchableOpacity style={formulario.button}>
                        <Text style={formulario.label}>Continuar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};


const formulario = StyleSheet.create(
    {
        form: 
        {
          width: 100+"%",
          backgroundColor: '#fff',
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          display: 'flex',
          flexDirection: 'column',
          color: 'black',
        },
        content: 
        {
          height: 100+'%',
          width: 100+"%",
          backgroundColor: 'white',
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          paddingTop: 5+'%',
          color: 'black',
        },
        fundo: 
        {
            flex: 1,
            width: 100+"%",
            backgroundColor: '#1e1e1e',
            paddingTop: 3+'%',
            alignItems: 'center',
            color: 'white',
        },
        input: 
        {
          padding: 3+"%",
          width: 90+"%",
          borderColor: 'rgb(150, 150, 150)',
          borderBottomWidth: 1
        },
        descInput: 
        {
          padding: 20,
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
            height: 10+'%',
            borderRadius: 10,
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
        ImageButton: {
            fontSize: 20,
            width: 20+'%',      
            alignItems: 'center',
            justifyContent: 'center',
            height: 100+'%',
            marginTop: 0+'%',
        },
        ImageButton_img: {
            width: 60+'%',
            height: 100+'%',
            marginRight: 25+'%',
            marginLeft: 2+'%',
        },
    }
)

export default Venda;