import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Touchable } from 'react-native';
import Cep from './Components/Cep';
import API from './Components/API';

export default function App() {
  const [cep, setCep] = useState("");
  const [inputCep, setInputCep] = useState(0);

  async function buscaCep(){
    const response = await API.get('ws/'+inputCep+'/json/');
    setCep(response.data);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Digite seu Cep!</Text>

      <TextInput style={styles.Textinput}
        placeholder='  Ex: 11730-000  '
        keyboardType='numeric'
        onChangeText={(data)=>setInputCep(data)}
      />
      
      <TouchableOpacity
        onPress={buscaCep}      
        style={styles.bloco}>
          <Text style={styles.Text}>
            Buscar
          </Text>
        </TouchableOpacity>

        <Cep data={cep} />

    </View>
  );
}

const styles = StyleSheet.create({
  Textinput:{
    color:"#000",
    borderWidth: 3,
    borderColor: "gray",
    borderRadius: 6,
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold"
  },
  bloco:{
    marginTop: "2.5%",
  },
  Text:{
    color: "#FFF",
    marginBottom: "3%",
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
