import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Shoes from '../Shoes';
import { useNavigation } from '@react-navigation/native';

export default function Pub() {
    const navigation = useNavigation();
 return (
   <View>
       <Text style={styles.title}>SCROLLVIEW HORIZONTAL</Text>
       <View style={{flexDirection: 'row'}}>
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{marginHorizontal: 10}}>
                    <Shoes img={require('../../assets/1.png')} cost="40.000 KZ" onClick={()=> navigation.navigate('Compra')}>
                        Nike Air Max Dia
                    </Shoes>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Shoes img={require('../../assets/5.png')} cost="28.000 KZ" onClick={()=> navigation.navigate('Compra')}>
                        Nike nova
                    </Shoes>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Shoes img={require('../../assets/3.png')} cost="26.000 KZ" onClick={()=> navigation.navigate('Compra')}>
                        Nike Squidward Tentacles
                    </Shoes>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Shoes img={require('../../assets/2.png')} cost="45.000 KZ" onClick={()=> navigation.navigate('Compra')}>
                        Nike kingjames
                    </Shoes>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Shoes img={require('../../assets/4.png')} cost="35.000 KZ" onClick={()=> navigation.navigate('Compra')}>
                        Nike Squidward Tentacles
                    </Shoes>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Shoes img={require('../../assets/6.png')} cost="20.000 KZ" onClick={()=> navigation.navigate('Compra')}>
                        Nike kingjames
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