import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
//tipografia
import * as Font from 'expo-font' 
import SingUp from './SingUp';

export default function Login({navigation}) {


  return(
    <View style={styles.container}>
      <Text style={styles.title} >AGENDA</Text>
      <TextInput
        style={styles.input}
        placeholder='Usuario'
      />
      <TextInput
        style={styles.input}
        placeholder='Contraseña'
        secureTextEntry={true}
      />
      <TouchableOpacity>
      <Button style={styles.btnLogin} title='INGRESAR' onPress={()=>navigation.navigate("Salir")} ></Button>

      </TouchableOpacity>


      <View style={styles.container_CrearCuenta}>
        <Text>¿Todavía no tiene una cuenta? </Text>
        
        <TouchableOpacity >
        <Button title='Registrate aquí' onPress={() => navigation.navigate("Crear Cuenta")} />
        </TouchableOpacity>
      </View>

    </View>
  );  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:45,
    marginBottom:50,
    color:"blue",
    fontFamily:'Cathylise',

  },
  input:{
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  container_CrearCuenta:{
    marginTop: '50%',
    borderRadius:20,
  }
});
