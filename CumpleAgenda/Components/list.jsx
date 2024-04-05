import { StyleSheet, Text, View, TextInput,TouchableOpacity, Button } from 'react-native';

export default function list(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Julian Moreno</Text>
            <Text style={styles.text}> faltan 130 dias</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      width:"80%",
      height:"10%",
      textAlign:'center',
      justifyContent:"center",
      borderRadius:10,
      alignItems:"center",
      flexDirection:'row',
      marginHorizontal:"10%",
      marginTop:20,
    backgroundColor:'green'
    },
    text:{
        color:"white",
        paddingHorizontal:30
    }

});