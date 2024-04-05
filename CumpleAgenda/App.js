
import { StyleSheet, Text, View } from 'react-native';
//Redireccionamiento con Stack
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import { useEffect, useState } from 'react';

//TIPOGRAFIA
import * as Font from 'expo-font' 
//PANTALLAS
import Login from "./Screens/Login"
import SingUp from './Screens/SingUp';
import DashBoard from "./Screens/DashBoard";
import AgregarPersonas from './Screens/AgregarPersonas';

//El stack para el navigator
const Stack = createNativeStackNavigator();

export default function App() {

  //Nos servira para exportar nuestra fuente
  const [fontsLoaded, setFontsload] = useState(false);

  useEffect(()=>{
    if(!fontsLoaded){
      loadFonts()
    }
  });
  const loadFonts= async()=>{
    await Font.loadAsync({
      'Cathylise': require('./assets/tipografia/Cathylise Janetson.otf')
    })
    
  setFontsload(true);
  }

  //DIRECIONES TIPO STACK
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName ="Inicio de sesion">
        <Stack.Screen name="Inicio de sesion" component={Login} />
        <Stack.Screen name="Crear Cuenta" component={SingUp} />
        <Stack.Screen name="Salir" component={DashBoard} />
        <Stack.Screen name="Agregar Personas" component={AgregarPersonas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
