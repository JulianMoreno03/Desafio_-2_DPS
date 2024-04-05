import { StyleSheet, Text, View, TextInput,TouchableOpacity, Button } from 'react-native';
import List from '../Components/list';

export default function VerListado({navigation}){
    return(
        <View style={styles.container} >
        <List></List>
        <List></List>
        <List></List>

        <View style={styles.circle}>
        <TouchableOpacity onPress={() => navigation.navigate("Agregar Personas")}>
          <Text style={styles.circle_signo}>+</Text>
        </TouchableOpacity>

        </View>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
      with:'100%',
      flex: 1,
      backgroundColor: 'white',
      alignItems: "flex-end",
    },
    circle:{
        width:60,
        height:60,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:100,
        backgroundColor:"blue",
        marginHorizontal:20,
        marginVertical:"90%",
        color:"white",
    },
    circle_signo:{
        color:"white",
        fontSize:30,
        textAlign:"center",
    }
});