
// Import do react
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, Image, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';


// Jamela de Vendas
const Venda = ({ navigation }) => {

    //Inicializa e permite alterar o valor selecionado do Piker 
    const [selectedValue, setSelectedValue] = useState();
    const [image, setImage] = useState(null);

    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [tempo, setTempo] = useState('')
    const [preco, setPreco] = useState('')
    const [descricao, setDescricao] = useState('')

    const [usuario, setUsuario] = useState('')

    useEffect( () => {
        busca()
     }, [])
  
     const busca = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('user')
          jsonValue != null ? setUsuario(JSON.parse(jsonValue)) : null;
          alert(jsonValue)
        } catch(e) {
          alert("Erro ao buscar " + e)
        }
    }
  
    
    const SalvarDados = () => {
 
        var  xmlhttp =  new XMLHttpRequest();
        
            let url = "https://localhost/NetCommerce/Model/SalvaProduto.php?"+
            "Id_Usuario="+usuario.id +"&marca="+marca +"&modelo="+modelo +"&tipo="+selectedValue +
            "&preco="+preco + "&descricao="+descricao +"&tempo="+tempo;
            xmlhttp.open('GET',url,true);
            xmlhttp.send();
            xmlhttp.onreadystatechange = () =>
            {
                 if(xmlhttp.readyState == 4) // Return Request
                {  
                   alert(xmlhttp.response)
                }
            }
    }


    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };



      return (
        <View style={formulario.fundo}>
           
           
            <ScrollView>    
                <View style={formulario.form}>
                     {/* DropDown para selecionbar o tipo de produto a venda */}
                     <Picker
                        selectedValue={selectedValue}
                        style={formulario.input}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Eletronicos" value="Eletronico" />
                        <Picker.Item label="Eletrodomesticos" value="Eletrodomesticos" />
                        <Picker.Item label="Viatura" value="Viatura" />
                        <Picker.Item label="Mobiliário" value="Mobiliario" />
                        <Picker.Item label="Casa" value="Casa" />
                    </Picker>

                    {/* Inputs dos detalhes */}
                    <TextInput style={formulario.input} placeholder = "Marca"
                        value={marca}
                        underlineColorAndroid='transparent'
                        onChangeText={text => setMarca(text)}
                    />
                    <TextInput style={formulario.input} placeholder = "Modelo"
                        value={modelo}
                        onChangeText={text => setModelo(text)}
                    />
                    <TextInput style={formulario.input} placeholder = "Tempo de uso"
                        value={tempo}
                        onChangeText={text => setTempo(text)}
                    />
                    <TextInput style={formulario.input} placeholder = "Informe o preço da venda"
                        value={preco}
                        onChangeText={text => setPreco(text)}
                    />
                    <TextInput style={formulario.descInput} placeholder = "Descrição abragente do produto."
                        value={descricao}
                        onChangeText={text => setDescricao(text)}
                    />

                    {/* Barra de opções de mídea  a ser carregada */}
                    <View style={formulario.imgBar}>
                        <Text>Adicionar Mídia</Text>
                        <TouchableOpacity style={formulario.buttonMedia} onPress = {pickImage} >
                            <Image source = {require("../img/Camera_dark.png")} style = {formulario.ImageButton_img} resizeMode = "stretch"/>
                        </TouchableOpacity>
                        <Image source = {require("../img/Add_Video.png")} style = {formulario.barImg} resizeMode = "stretch"/>
                        <Image source = {require("../img/Picture_Add.png")} style = {formulario.barImg} resizeMode = "stretch"/>
                        <Image source = {require("../img/Upload_Video.png")} style = {formulario.barImg} resizeMode = "stretch"/>
                    </View>
                    
                    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

                    {/* Botão de continuar. Ainda sem acção */}
                    <TouchableOpacity style={formulario.button} onPress = {SalvarDados} >
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
          height: 600,
          width: 350,
          backgroundColor: '#fff',
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          marginTop: 15,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          color: 'black',
          position: 'relative',
        },
        fundo: 
        {
            height: 100+"%",
            width: 100+"%",
            backgroundColor: '#fff',
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
            backgroundColor: 'rgb(0, 138, 230)',
            width: 80+'%',
            justifyContent: 'center',
            display: 'flex',
            height: 7+'%',
            borderRadius: 10,
            // bottom: 1+'%',
        },
        buttonMedia: {
            // backgroundColor: 'rgb(0, 138, 230)',
            width: 10+'%',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            height: 60+'%',
            borderRadius: 10,
            // marginTop: 1+'%',
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
            width: 90+'%',
            height: 90+'%',
        },
    }
)

export default Venda;