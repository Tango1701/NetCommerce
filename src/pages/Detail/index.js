import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Dot from '../../component/Dot';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';
import Footer from '../../component/Footer';
import Dados from '../../component/Dados';

export default function Detail({navigation}) {

  navigation.setOptions({
    headerTitle: 'Nike Downshifter 10'
  })
 return (
   
   <ScrollView style={styles.container}>
        
        <Image
        source={require('../../assets/detail.png')}
        style={StyleSheet.image}
        resizeMode="cover"
        />

        <View>
            <View>
              <Text style={StyleSheet.title, {fontSize: 24} }>R$299,99</Text>
            </View>
            <View opacity={0,4}>
              <Text style={StyleSheet.title, {fontSize: 30} }>Nike Dowshifter 10</Text>
            </View>

            <View style={styles.dotContainer}>
              <Dot color="#2379f4"/>
              <Dot color="#fb6e53"/>
              <Dot color="#ddd"/>
              <Dot color="#000"/>
            </View>

            <View style={{flexDirection: "row", width: '100%'}}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <SizeButton bgColor="#17181a" color="#FFF">40</SizeButton>
                <SizeButton>39</SizeButton>
                <SizeButton>38</SizeButton>
                <SizeButton>37</SizeButton>
              </ScrollView>
            </View>

            <View style={styles.textContent}>
                <Text style={styles.textTitle}>
                  Nike Downshifter 10
                </Text>
                <Text style={styles.textContent}>
                Poderíamos usar muitos superlativos para descrever o Nike Air Max 2021. Poderíamos dizer que incorporamos materiais reciclados para criar um tênis com pelo menos 20% de conteúdo reciclado. Ou que a nova unidade de amortecimento Air debaixo do pé é a mais revolucionária que temos. Talvez o chamemos de "o auge do conforto", falando bonito sobre a entressola de espuma com bolhas de ar que traz uma sensação mais leve e suave. Mas talvez apenas digamos que ele é a mistura do moderno com a técnica, carregado com o nosso DNA. Qual é a graça em revelar essas surpresas?
                </Text>
                <Text style={styles.textList}>
                  - Categoria: Amortecimento
                </Text>
                <Text style={styles.textList}>
                  - Material: Mesh
                </Text>
            </View>

            <Button/>

            <View style={styles.line}>
              <Footer/>
            </View>

    </View>
   </ScrollView>
   
   
   
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  image:{
    width: '100%'
  },
  title:{
    fontFamily: '',
    paddingHorizontal: '2%'
  },
  dotContainer:{
    flexDirection: 'row',
    marginVertical: '7%'
  },
  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle:{
    fontSize: 22,
    marginVertical: '2%'
  }, 
  textList:{
    fontSize: 16,
    lineHeight: 25,

  },
  line:{
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%',
  }
})