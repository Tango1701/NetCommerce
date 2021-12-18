// Import do react
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';


const Pagar = () => {

    const Fundo = () => {
        return (
            <View style={pagamento.form}>
                
                <TouchableOpacity style={pagamento.button} onPress={() => navigation.navigate('Carrinho')}>
                    <Text style={pagamento.btnText}>Pagar</Text>
                    <Image 
                        source = {require("../assets/img/carrinho_pay.png")} 
                        style = {pagamento.btnImg} 
                        resizeMode = "stretch"
                    />
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={pagamento.fundo}>
            <Fundo/>
        </View>
    );
};

const pagamento = StyleSheet.create(
    {
        form: 
        {
          height: 100+'%',
          width: 100+"%",
          backgroundColor: '#1e1e1e',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 5+'%',
          marginTop: 2+'%',
          color: 'black',
        },
        cabecalho: 
        {
          height: 10+'%',
          width: 100+"%",
        //   backgroundColor: '#fff',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          display: 'flex',
          flexDirection: 'row',
          paddingLeft: 5+'%',
        //   marginTop: 2+'%',
          color: 'black',
        },
        img: 
        {
          width: 10+"%",
          height: 70+"%",
          marginTop: 3+'%',
        },
        fundo: 
        {
            height: 100+'%',
            width: 100+"%",
            backgroundColor: '#fff',
            paddingTop: 5+'%',
            alignItems: 'center',
            color: 'white',
        },
        text: {
          fontSize: 20,
          color: 'white',
          textAlign: 'center',
          fontWeight: 'bold',
          marginLeft: 25+'%',
          marginTop: 4+'%',
        },
        btnText: {
          fontSize: 20,
          color: 'black',
          textAlign: 'center',
          fontWeight: 'bold',
        //   marginLeft: 25+'%',
          marginTop: 1+'%',
        },
        button: {
            fontSize: 20,
            width: 80+'%',      
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: 8+'%',
            bottom: 5+'%',
            position: 'absolute',
            backgroundColor: 'gold',
            borderRadius: 10,
        },
        btnImg: 
        {
          width: 10+"%",
          height: 80+"%",
          marginTop: 1+'%',
          marginLeft: 3+'%',
        },
    }
)

export default Pagar