import React, { useState, useEffect }from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Camera } from 'expo-Camera';

export default function Camera () {
 
  const [type, setType] = useState(Camera.Constants.Type.black);
  const [hasPermission, setHaspermission] = useState(null);
 
useEffect(()=> {
  (async () => {
      const { status } = await Camera.requstPermissionAsync();
      setHaspermission(status === 'granted');

  })();
}, []);

if (hasPermission === null) {
  return <View/>;

}

if (hasPermission === false ) {
  return <Text> Acesso negado!! </Text>

}
  
  return (
    <SafeAreaView style = {styles.container}>
    <Camera
    style={{flex: 1}}
    type = {type}
    />
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
  },

});



