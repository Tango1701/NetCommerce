

import React from 'react';
import { StyleSheet, Text, FlatList, View, Image, TouchableOpacity} from 'react-native';

const NovaTela = ({navigation, route}) => {

    const parametros = route.params

    return (
        <View>
            <Text style = {style.text}>{parametros.letra}</Text>
            <Image 
                source = {parametros.img} 
                style = {style.img}
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
    })
export default NovaTela;