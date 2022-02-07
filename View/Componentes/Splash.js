// Import do react
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';


const Splash = ({navigation}) => {

    let tempo = 0;

        setInterval(() => {
            tempo++;
            if(tempo == 12)
                navigation.navigate("Login");
        }, 1000);

    const Fundo = () => {
        return (
            <View style={pagamento.form}>
                 <Image 
                        source = {require("../img/NetCommerce.gif")} 
                        style = {pagamento.img} 
                        resizeMode = "stretch"
                    />
                    {/* <View style={pagamento.overlay}>
                    <Text style={pagamento.text}>Bem vindo ao NetCommerce</Text>
                    </View> */}
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
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        //   paddingTop: 5+'%',
          color: 'black',
        },
        
        img: 
        {
          width: 100+"%",
          height: 100+"%",
        },
      
        text: {
          fontSize: 20,
          color: 'white',
          textAlign: 'center',
          fontWeight: 'bold',
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: 'white',
          width: 100+'%',
          height: 100+'%',
          position: 'absolute',
          paddingTop: 5+'%',
          zIndex: 5,
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
        }
    }
)

export default Splash