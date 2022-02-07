import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, AsyncStorage, SafeAreaView, FlatList } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native';
import Compra from './Compra';

import Shoes from './Shoes';
import Pub from './Pub';
import Menu from './Menu';

export default function Home() {

  const navigation = useNavigation();
    return(
      <View style={styles.container}>
        <ScrollView>
              <View style={styles.header}>

                {/* Essas são as publicações da página inicial */}
                <TouchableOpacity onPress={() => navigation.navigate('Compra')}>
                    <Image
                    //source={require('../assets/img/banner.png')}
                    source={require('../assets/img/Pub/best-cheap-headphones.jpg')}
                    style={styles.image}
                    />  
                </TouchableOpacity>
                    
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Todas as Categorias</Text>
                    <Text style={styles.text, {color: '#CECECF'}}></Text>
                    <Text style={styles.text, {color: '#CECECF'}}></Text>
            
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
              <Text style={styles.text}>Novidades</Text>

            {/* Itens a ser apresentados na tela inicial  */}
              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Shoes img={require('../assets/img/imgAjustado/FrigorificoLg.jpg')} cost="1.000.000 KZ" onClick={()=> navigation.navigate('Compra')}>
                  Frigorífico LG
                </Shoes>

                <Shoes img={require('../assets/img/2.png')} cost="22.000 KZ" onClick={()=> navigation.navigate('Compra')}>
                  Nike Downshifer 10
                  </Shoes>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Shoes img={require('../assets/img/imgAjustado/in.jpg')} cost="300.000 KZ" onClick={()=> navigation.navigate('Compra')}>
                Iphone 8 PLus 64GB novo na caixa
              </Shoes>

              <Shoes img={require('../assets/img/imgAjustado/mLG.jpg')} cost="80.000 KZ" onClick={()=> navigation.navigate('Compra')}>
                Monitor LG
                </Shoes>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                  <Shoes img={require('../assets/img/imgAjustado/f.jpg')} cost="450.000 KZ" onClick={()=> navigation.navigate('Compra')}>
                    Fogão novo de 6 bocas
                  </Shoes>
                  <Shoes img={require('../assets/img/imgAjustado/ac_midea.jpg')} cost="120.000 KZ" onClick={()=> navigation.navigate('Compra')}>
                          AC Midea Novo
                  </Shoes>

             
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                  <Shoes img={require('../assets/img/imgAjustado/pc.jpg')} cost="300.000 KZ" onClick={()=> navigation.navigate('Compra')}>
                    Pc HP Semi novo
                  </Shoes>
                  <Shoes img={require('../assets/img/6.png')} cost="23.000 KZ" onClick={()=> navigation.navigate('Compra')}>
                     Adidas outfit
                  </Shoes> 
              </View>

              <Pub/>

            </ScrollView>
            
      </ScrollView>
      
      {/* Barra de Menu*/}
      <View style={MenuBar.container}>
        <TouchableOpacity style={Home1.button}>
            <Image 
                source = {require("../assets/img/Home.png")} 
                style = {MenuBar.img} resizeMode = "stretch"
            />
        </TouchableOpacity>
        <TouchableOpacity style={Home1.button} onPress={() => navigation.navigate('Venda')}>
            <Image 
                source = {require("../assets/img//Money.png")} 
                style = {MenuBar.img} 
                resizeMode = "stretch" 
            />
        </TouchableOpacity>
        <TouchableOpacity style={Home1.button}>
            <Image 
                source = {require("../assets/img/Search_white.png")} 
                style = {MenuBar.img} 
                resizeMode = "stretch"
            />
        </TouchableOpacity>
        <TouchableOpacity style={Home1.button}>
            <Image 
                source = {require("../assets/img/User.png")} 
                style = {MenuBar.img} 
                resizeMode = "stretch"
            />
        </TouchableOpacity>
    </View>

      

   </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      width: '100%',
      backgroundColor: '#FFF'
    },
    itemStyle:{
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
      height: 100,
      flex: 1
    },
    itemText:{
      fontSize: 50,
      color: 'white'
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
    },
    imagem:{
      width: 100,
      height: 100
    },

});

// ~Estilo do menu
const MenuBar = StyleSheet.create(
  {
      container: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#1e1e1e',
          width: 100+'%',
          height: 9+'%',
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 0,
          bottom: 0+'%',
          position: 'relative',
        
      },
      img: {
          width: 40+'%',
          height: 70+'%',
      }
  }
)


const Home1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: 100+'%',
    height: 100+'%',
  },
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  button: {
      fontSize: 20,
      width: 20+'%',      
      alignItems: 'center',
      justifyContent: 'center',
      height: 90+'%',
      marginTop: 0+'%',
    }
});