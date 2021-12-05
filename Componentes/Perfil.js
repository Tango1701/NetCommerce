
// Imports do Native
import React, { useState } from "react";
import { TouchableOpacity, Image, StyleSheet, View, Text} from "react-native";
import { Table, Row, Rows } from 'react-native-table-component';

const Perfil = () => {

    // Cria o lugar onde fica a foto de perfil do ususario
    const FotoPerfil = () => {
        return (
            <View style={styles.fotoPerfil}>
              <Image 
                    source = {require("../assets/img/nubia2.jpg")} 
                    style = {styles.img} 
                    resizeMode = "stretch"
                />
            </View> 
        );
    }

    // Lista de opções do perfil
    const ToolBox = () => {
        return (
            <View style={styles.toolBox}>
              <Image 
                    source = {require("../assets/img/editar_perfil.png")} 
                    style = {styles.tools} 
                    resizeMode = "stretch"
                />
                <Image 
                    source = {require("../assets/img/Camera_dark.png")} 
                    style = {styles.tools} 
                    resizeMode = "stretch"
                />
                <Image 
                    source = {require("../assets/img/config_1.png")} 
                    style = {styles.tools} 
                    resizeMode = "stretch"
                />
            </View> 
        );
    }
    
    // Histórico de compras
    const History = () => {
        const tableHead = ['Histórico de Compras']

        const [tableData, setTableData] = useState([
            ['Camisola', '12.000 kz'],
            ['Camisola', '12.000 kz'],
            ['Camisola', '12.000 kz']
          ]);

        return (
            <View style={tabela.container}>
                <Table>
                    <Row data={tableHead} style={tabela.head} textStyle={tabela.titulo}/>
                    <Rows data={tableData} textStyle={tabela.subTitulo}/>
                </Table>
                <TouchableOpacity style={tabela.button}>
                    <Text style={tabela.text}>Ver mais</Text>
                </TouchableOpacity>
            </View>
        );
    }

  return (
    <View style={[styles.container, styles.navigationContainer]}>
        <Text style={styles.titulo}>Perfil</Text>
        <FotoPerfil/>
        <Text style={styles.subTitulo}>Ariana José</Text>
        <ToolBox/>
        <History/>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: 40
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  },
  fotoPerfil: {
    width: 120,
    height: 120,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginTop: 5+"%",
  },
  img: {
    width: 100+'%',
    height: 100+'%',
  },
  titulo: 
  {
    color: 'rgb(30, 30, 30)',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitulo: 
  {
      color: 'black',
      textAlign: 'left',
      fontSize: 17,
      marginTop: 10,
  },
  toolBox: {
    width: 70+"%",
    height: 30,
    alignItems: "center",
    justifyContent: "space-around",
    display: "flex",
    flexDirection: "row",
    marginTop: 5+"%",
  },
  tools: {
    width: 15+'%',
    height: 100+'%',
  },
});


const tabela = StyleSheet.create({
    container: { height: 100, width: 280, paddingTop: 30,  },
    head: { height: 40 },
    text: { margin: 6, color: '#fff' , textAlign: 'center'},
    button: 
        {
            fontSize: 15,
            backgroundColor: '#1e1e1e',
            width: 100+'%',
            textAlign: 'center',
            justifyContent: 'center',
            display: 'flex',
            height: 35,
            borderRadius: 5,
            marginTop: 1+'%',
        },
        subTitulo: 
        {
            color: 'black',
            textAlign: 'left',
            fontSize: 15,
        }
        ,
        titulo: 
        {
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center'
        },
  });
export default Perfil;