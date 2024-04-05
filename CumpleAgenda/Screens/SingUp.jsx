import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function SingUp({navigation}) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>REGISTRATE</Text>
      <TextInput
        style={styles.input}
        placeholder='Usuario'
      />
      <TextInput
        style={styles.input}
        placeholder='Correo'
      />
       <TextInput
        style={styles.input}
        placeholder='Contraseña'
        secureTextEntry={true}
      />
      
       <TextInput
        style={styles.input}
        placeholder='Contraseña'
        secureTextEntry={true}
      />

    <TouchableOpacity>
      <Button title='CREAR CUENTA' onPress={() => navigation.goBack()} style={styles.btnCrearCuenta} ></Button>

    </TouchableOpacity>
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
    fontSize:40,
    marginBottom:50,
    color:"blue",
    fontFamily:'Cathylise',

  },input:{
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  btnCrearCuenta:{
    width:'80%'
  }
  
});
