import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Shoes(props) {


    function filterDesc(desc){
        if(desc.lenght <27){
            return desc;
        }

        return `${desc.substring(0, 22)}...`;
    }


 return (
   
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
        <Image
        source={props.img}
        style={StyleSheet.shoesImg}
        resizeMode='stretch'
        />
        <Text style={StyleSheet.shoesText}>  
            {filterDesc(props.children)}  
        </Text>
        <View opacity={0,4}>
            <Text style={StyleSheet.shoesText}> {props.cost} </Text>
        </View>
        
    </TouchableOpacity>
    
   
  );
} 

const styles = StyleSheet.create({
    container:{
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shoesImg:{ 
        width: 175,
        height: 175,
     
    },
    shoesText:{
        fontSize: 16
    }
})