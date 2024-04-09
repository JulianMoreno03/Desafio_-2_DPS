import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, FlatList, ScrollView, Alert } from 'react-native';

import { useState, useEffect } from 'react';
import AgregarPersonas from '../Screens/AgregarPersonas';

//asynStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function list() {
  const [personas, setPersonas] = useState([]);

  //obtenemos datos 
  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const userData = await AsyncStorage.getItem('listaUsuarios');

        if (userData !== null) {
          const datosParseados = JSON.parse(userData);
          setPersonas(datosParseados);
          console.log('Datos de AsyncStorage:', [datosParseados]);
        } else {
          setPersonas([]);
        }
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    obtenerDatos();

  }, []);

  //para calcular los dias restantes
  const calcularDiasHastaCumpleanos = (fechaCumpleanos) => {
    // Obtener la fecha de hoy
    const hoy = new Date();

    // Convertir la fecha de cumpleaños a un objeto Date
    const fecha = new Date(fechaCumpleanos);

    // Establecer el año del cumpleaños al año actual
    fecha.setFullYear(hoy.getFullYear());

    // Si la fecha de cumpleaños ya pasó este año, establecerla en el próximo año
    if (fecha < hoy) {
      fecha.setFullYear(hoy.getFullYear() + 1);
    }

    // Calcular la diferencia en milisegundos entre las dos fechas
    const diferencia = fecha.getTime() - hoy.getTime();

    // Convertir la diferencia de milisegundos a días y redondear hacia arriba
    const diasFaltantes = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

   
    return diasFaltantes ;
  };

  //para ver el color del fondo segun los dias faltante a cumpleaños
  const diasFaltantes = calcularDiasHastaCumpleanos(personas.fecha);
  let backgroundColor;

  if(diasFaltantes === 1){
    backgroundColor = 'red'
  }
  else if((diasFaltantes > 1) && (diasFaltantes < 100)){
    backgroundColor ='green';
  }else{
    backgroundColor= 'blue';
  }
  


  //funcion para eliminar card
  const eliminarContacto = async (index) => {
    try {
      Alert.alert(
        'Confirmación',
        '¿Estás seguro de que quieres eliminar este contacto?',
        [
          {
            text: 'Cancelar',
            onPress: () => console.log('Eliminación cancelada por el usuario'),
            style: 'cancel',
          },
          {
            text: 'Eliminar',
            onPress: async () => {
              const nuevaLista = personas.filter((_, i) => i !== index);
              await AsyncStorage.setItem('listaUsuarios', JSON.stringify(nuevaLista));
              setPersonas(nuevaLista);
              console.log('Contacto eliminado correctamente');
            },
            style: 'destructive',
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error('Error al eliminar el contacto:', error);
    }
  };


  return (
    <View style={styles.container}>
      {personas.length === 0 ? (
        <Text style={styles.message}>No hay ningun contacto guardado aun :( </Text>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>

          {personas.map((persona, index) => (
            <View key={index} style={styles.box}>
              <TouchableOpacity
                style={[styles.itemContainer,
                  {backgroundColor: backgroundColor}
                ]}
                key={index}
                onLongPress={() => eliminarContacto(index)}>
                <Text style={styles.text}>{persona.nombre}</Text>
                <Text style={styles.text}>
                  Faltan {calcularDiasHastaCumpleanos(persona.fecha)} días para su cumpleaños
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  box: {
    width: '70%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  itemContainer: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  message: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 20,
    color: "lightcoral"

  }
});