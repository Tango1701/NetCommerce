// Import do react
import React, { useState } from "react";
import { StyleSheet, Text, FlatList, View, Image, TouchableOpacity} from 'react-native';


const Pagar = () => {


  const [texto, setTexto] = useState([
    {letra: "Mercedes Design", id: "1", img: require("../assets/img/Mercedes_Car.jpg")},
    {letra: "B", id: "2", img: require("../assets/img/Mercedes_Shoes.jpg")},
    {letra: "C", id: "3", img: require("../assets/img/Mercedes_Shoes.jpg")}
  ])

  const ListaCompras = () => {
    return (
        <View style={pagamento.form}>
            <FlatList 
              keyExtractor={(item) => item.id}
              data={texto} 
              renderItem={({ item }) => (
                <View style={pagamento.item}>
                <Image 
                  source = {item.img} 
                  style = {pagamento.flatImg} 
                  resizeMode = "stretch"
                  />
                <Text style={pagamento.text}>{item.letra}</Text>

                </View>
              )}
            />

        </View>
    );
}

  
    const Fundo = () => {
        return (
            <View style={pagamento.form}>
                <ListaCompras/>

                
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
        flatImg: 
        {
          width: 25+"%",
          height: 100+"%",
          marginTop: 3+'%',
          marginRight: 5+'%',
        },
        item: 
        {
          width: 90+"%",
          paddingTop: 10,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
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
          fontSize: 15,
          color: 'white',
          textAlign: 'left',
          fontWeight: "100",
          // marginLeft: 25+'%',
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