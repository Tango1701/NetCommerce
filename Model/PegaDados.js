

import AsyncStorage from '@react-native-async-storage/async-storage';
import React from "react";


function busca (){
    async () => {
    const response = await fetch("http://localhost/NetCommerce/Model/BuscaProdutos.php")
    const dados = await response.json() 
    
    await AsyncStorage.setItem( "dados", JSON.stringify(dados))
    alert('Pegou')
    }
}

export default busca