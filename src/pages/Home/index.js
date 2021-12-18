import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import {useNavigation} from '@react-navigation/native';
import MenuInferior from '../../../Componentes/MenuInferior';

import Shoes from '../../component/Shoes';
import Pub from '../../component/Pub';
import Dados from '../../component/Dados';

export default function Home() {
  const navigation = useNavigation();
 return (
   <View style={styles.container}>
     <ScrollView>
        <View style={styles.header}>
            
              <Image
              source={require('../../assets/banner.png')}
              style={styles.image}
              />

              <View style={styles.textContainer}>
                    <Text style={styles.text}>TÊNIS</Text>
                    <Text style={styles.text, {color: '#CECECF'}}> - </Text>
                    <Text style={styles.text, {color: '#CECECF'}}>MASCULINO</Text>
            
                    <TouchableOpacity style={{ right: 0, alignSelf: 'center', position: 'absolute'}}>
                        <MaterialIcons
                        name="filter-list"
                        size={24}
                        color="#000"
                        />
                    </TouchableOpacity>
              </View>

          </View>

          <View style={styles.line}/>

          <ScrollView>
              <Text style={styles.text}>LANÇAMENTO</Text>

              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                  <Shoes img={require('../../assets/1.png')} cost="20.000 KZ" onClick={()=> navigation.navigate('Compra')}>
                      Nike Air Max Dia
                  </Shoes>

                  <Shoes img={require('../../assets/2.png')} cost="28.000 KZ" onClick={()=> navigation.navigate('Compra')}>
                      Nike Downshifer 10
                    </Shoes>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                  <Shoes img={require('../../assets/3.png')} cost="30.000 KZ" onClick={()=> navigation.navigate('Compra')}>
                    Nike Squidward Tentacles
                  </Shoes>

                  <Shoes img={require('../../assets/4.png')} cost="18.000 KZ" onClick={()=> navigation.navigate('Compra')}>
                    Nike Epic React Flyknit 2
                    </Shoes>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                  <Shoes img={require('../../assets/5.png')} cost="33.000 KZ" onClick={()=> navigation.navigate('Compra')}>
                    Nike nova
                  </Shoes>

                  <Shoes img={require('../../assets/6.png')} cost="60.000 KZ" onClick={()=> navigation.navigate('Compra')}>
                    Nike Epic new
                    </Shoes>
              </View>
    
              <Pub/>
              <MenuInferior/>
          </ScrollView>
          
     </ScrollView>
      
     

   </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      width: '100%',
      backgroundColor: '#FFF'
    },
    header:{
      marginBottom: 8
    },
    image:{
      width: '100%'
    },
    textContainer:{
      flexDirection: 'row',
      marginVertical: '5%',
      marginHorizontal: '5%'
    },
    text:{
      fontFamily: '',
      fontSize: 26,
      marginHorizontal: '1%'
    },
    line:{
      borderBottomColor: '#d8d8d8',
      borderBottomWidth: 2,
    }

});