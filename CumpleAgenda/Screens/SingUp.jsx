import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function SingUp({navigation}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Usuario'
      />
      <TextInput
        style={styles.input}
        placeholder='Correo'
        secureTextEntry={true}
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

      <Button title='INGRESAR'></Button>
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
});
