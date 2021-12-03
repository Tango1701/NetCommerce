
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export const Formulario = () => {
    return(
        <View style={formulario.form} >
            <View style={formulario.cabecalho}>
                <Text style={formulario.text}>Menu</Text>
            </View>
            
            <TextInput  /> 
      </View>
    )
}

const formulario = StyleSheet.create(
    {
        form: {
          height: 500,
          width: 90+"%",
          backgroundColor: '#fff',
          borderRadius: 5,
          // overflow: 'hidden',
          borderWidth: 1
        },
        cabecalho: {
          height: 10+"%",
          width: 100+"%",
          backgroundColor: 'rgb(0, 0, 150)',
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
          borderWidth: 1
        },
        text: {
          color: 'white',
          textAlign: 'right',
          fontSize: 22,
          marginRight: 10,
        },
        button: {
            fontSize: 20,
            backgroundColor: '#1e1e1e',
            textAlign: 'center',
            width: 80+'%',
            height: 8+'%',
            marginTop: 160+'%',
          }
    }
  )