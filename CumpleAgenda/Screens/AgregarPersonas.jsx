import { StyleSheet, Text, View, TextInput,TouchableOpacity, Button } from 'react-native';

export default function AgregarPersonas(){
    return(
        <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Nombres'
        />
        <TextInput
          style={styles.input}
          placeholder='Apellidos'
        />
         <TextInput
          style={styles.input}
          placeholder='Correo'
        />
          <TextInput
          style={styles.input}
          placeholder='Telefono'
        />
          <TextInput
          style={styles.input}
          placeholder='Fecha De Cumpleaños'
        />

        <Button title='Agregar Contacto'></Button>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
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

});