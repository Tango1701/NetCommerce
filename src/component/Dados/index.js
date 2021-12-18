import React from 'react';
import { render } from 'react-dom';
import { View, Text, ScrollView ,Image, Button} from 'react-native';

export default function Dados() {
 return (
    <ScrollView>
        {dados.map((dados, i) => (
            <View key={i}>
                <Image source={dados.imagem} />
                <Text>{dados.title}</Text>
                <Button onPress={() => this.props.navigation.navigate('telaExemplo', {
                 imagem: dados.imagem,
                 titulo: dados.titulo
            
                })} />
                </View>
        ))}
    </ScrollView>
                
                
            
    
  );
}

const dados =[
    {
        Image: require('../../assets/1.png'),
        titulo: 'Tenis 1',
    },
    {
        Image: require('../../assets/2.png'),
        titulo: 'Tenis 2',
    },
    {
        Image: require('../../assets/3.png'),
        titulo: 'Tenis 3',
    },
    {
        Image: require('../../assets/4.png'),
        titulo: 'Tenis 4',
    },
    {
        Image: require('../../assets/5.png'),
        titulo: 'Tenis 5',
    },
    {
        Image: require('../../assets/6.png'),
        titulo: 'Tenis 6',
    },

];