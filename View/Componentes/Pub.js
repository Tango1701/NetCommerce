import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Shoes from './Shoes';
import Compra from './Compra';
import {useNavigation} from '@react-navigation/native';


export default function Pub() {
    const navigation = useNavigation();
 return (
   <View>
       <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
       <View style={{flexDirection: 'row'}}>
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{marginHorizontal: 10}}>
                    <Shoes img={require('../img/imgAjustado/im.jpg')} cost="240.000 KZ" onClick={()=> navigation.navigate('Compra')}>
                        Impressora HP
                    </Shoes>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Shoes img={require('../img/imgAjustado/apple-macbook-air-2018.jpg')} cost="850.000 KZ" onClick={()=> navigation.navigate('Compra')}>
                        Macbook Air 2018 semi novo
                    </Shoes>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Shoes img={require('../img/imgAjustado/bicicleta.jpg')} cost="22.000 KZ" onClick={()=> navigation.navigate('Compra')}>
                        bicicleta Aro
                    </Shoes>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Shoes img={require('../img/imgAjustado/h.jpg')} cost="10.000 KZ" onClick={()=> navigation.navigate('Compra')}>
                        HeadPhones
                    </Shoes>
                </View>
           </ScrollView>
               
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: '',
        marginVertical: '2%',
        paddingHorizontal: '2%',
        textAlign: 'center',
    }
})