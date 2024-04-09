import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Pressable } from 'react-native';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

//asynStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

//Id
import { v1 as uuidv1 } from 'uuid';
export default function AgregarPersonas() {
  //para manejar el modal
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  //para manejar las fechass
  const [selectedDate, setSelectedDate] = useState('');

  //para manejar los datos que agrege el usuario 
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');

  const navigation = useNavigation();
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (Date) => {
    const formattedDate = Date.toISOString().split('T')[0];
    setSelectedDate([formattedDate]);
    hideDatePicker();
  };

  const guardarDatos = async () => {
    try {
      // Verificar si los campos obligatorios están vacíos
      if (!nombres || !apellidos || !correo || !telefono || !selectedDate) {
        alert('Por favor complete todos los campos');
        return;
    }

    // Validar el formato del correo electrónico
    const correoRegex = /\S+@\S+\.\S+/;
    if (!correoRegex.test(correo)) {
        alert('Ingrese un correo electrónico válido');
        return;
    }
        // Obtener la lista actual de usuarios de AsyncStorage
        const existingData = await AsyncStorage.getItem('listaUsuarios');
        let listaUsuarios = [];

        if (existingData !== null) {
            // Si hay datos existentes, convertirlos a un array
            listaUsuarios = JSON.parse(existingData);
        }

        // Crear un objeto con los datos del nuevo usuario
        const nuevoUsuario = {
            nombre: nombres,
            apellido: apellidos,
            correo: correo,
            telefono: telefono,
            fecha: selectedDate
        };

        // Agregar el nuevo usuario al objeto de usuarios
        listaUsuarios.push(nuevoUsuario);

        // Guardar la lista actualizada en AsyncStorage
        await AsyncStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));

        alert('Usuario agregado correctamente');
        
        navigation.navigate('ver Listado');
    } catch (error) {
        console.error('Error al guardar los datos:', error);
    }
};

// Función para eliminar los datos de una clave específica en AsyncStorage
/*
const limpiarDatosClaveEspecifica = async (clave) => {
    try {
        await AsyncStorage.removeItem(clave);
        console.log(`Datos eliminados de la clave "${clave}" en AsyncStorage correctamente`);
    } catch (error) {
        console.error(`Error al eliminar los datos de la clave "${clave}" en AsyncStorage:`, error);
    }
};

  // Llamada para limpiar los datos de una clave específica en AsyncStorage
limpiarDatosClaveEspecifica('listaUsuarios');

//para empezar de cero con los datos nomas
*/

  return (
    <View style={styles.container}>
    <Text style = {styles.title}>COMPLETA LA INFORMACION</Text>
      <TextInput
        style={styles.input}
        placeholder='Nombres'
        value={nombres}
        onChangeText={setNombres}
      />
      <TextInput
        style={styles.input}
        placeholder='Apellidos'
        value={apellidos}
        onChangeText={setApellidos}
      />
      <TextInput
        style={styles.input}
        placeholder='Correo'
        value={correo}
        onChangeText={setCorreo}
      />
      <TextInput
        style={styles.input}
        placeholder='Telefono'
        value={telefono}
        //para que no pueda agregar ningun caracter que no sea numeros
        onChangeText={(text) => setTelefono(text.replace(/[^0-9]/g, ''))}
        keyboardType='numeric'
      />

      <View style={styles.boxDate}>
        <Button title="Seleccionar fecha de cumpleaños" onPress={showDatePicker}  />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <TextInput
          style={styles.input}
          placeholder="Fecha de cumpleaños"
          value={setSelectedDate}
          editable={false}
        />
      </View>

      <Button title='Agregar Contacto' onPress={guardarDatos}></Button>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical:20,
  },
  title:{
    fontSize:20,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  }
});