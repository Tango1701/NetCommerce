

import React, { useState, useEffect } from "react";
import { StyleSheet, Text, FlatList, View, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const NovaTela = ({navigation, route}) => {

    const parametros = route.params

    const [gostos, setGostos] = useState([])


    function converte (){
      var result = Object.keys(gostos).map(function(key) {
          return gostos;
        });
        
      return result
    }

    useEffect( () => {
        busca()
     }, [])
 
     const busca = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('u0001')
          jsonValue != null ? setGostos(JSON.parse(jsonValue)) : null;
        } catch(e) {
          alert("Erro ao buscar " + e)
        }
    }

    

    return (
        <View style = {style.container}>
                            
            <Text style = {conteudo.h3}>{console.log(converte())}</Text>
               
            <FlatList
                    keyExtractor={(item) => item.Id_Produto}
                    data = {converte()} 
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
                                Imagem: item.Imagem,
                            })
                        }>

                       <Image 
                            source = {item.Imagem} 
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
         
            
            
        </View>
    );
};

    const style = StyleSheet.create(
    {
        text: {
          fontSize: 17,
          color: 'black',
          textAlign: 'left',
          fontWeight: "bold",
        },
        img: 
        {
          width: 90+"%",
          height: 80+"%",
          margin: 5+'%',
        },
        container: 
        {
          height: 100 + "%",
          width: 100 + "%",
          display: "flex",
          alignItems:'center',
        },
    })


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

export default NovaTela;