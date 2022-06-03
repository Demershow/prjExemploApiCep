import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Touchable } from 'react-native';


export default function Cep(props) {
  return (
  <>
    <Text style={styles.butao}>Cidade: {props.data.localidade}</Text>
    <Text style={styles.butao}>Bairro:  {props.data.bairro}</Text>
    <Text style={styles.butao}>Logradouro: {props.data.logradouro}</Text>
    <Text style={styles.butao}>Complemento: {props.data.complemento}</Text>
  </>
  );
}

const styles = StyleSheet.create({
    butao: {
        fontsize:15,
        marginTop:10,
        color: "#fff",
        backgroundColor: "#000",
    }
})