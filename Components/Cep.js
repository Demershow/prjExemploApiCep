import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Touchable } from 'react-native';


export default function Cep() {
  return (
  <>
    <Text style={styles.butao}>Cidade:</Text>
    <Text style={styles.butao}>Estado:</Text>
    <Text style={styles.butao}>LOgradouro:</Text>
    <Text style={styles.butao}>Complemento:</Text>
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