// Aviso.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Aviso() {
  const navigation = useNavigation();

  const handleConfirmarPress = () => {
    navigation.navigate('SobreVoce');
  };

  return (
    <View style={styles.container}>
        <View style={styles.brancoContainer}>
          <Text style={styles.textoAviso}>Aviso</Text>
          <Text style={styles.textoConteudo}>O uso deste aplicativo não dispensa a consulta de um profissional</Text>
        </View>
        <View style={styles.botoesContainer}>
          <TouchableOpacity style={styles.botaoConfirmar} onPress={handleConfirmarPress}>
            <Text style={styles.textoBotaoConfirmar}>Confirmar</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#570000',
  },
  marromContainer: {
    backgroundColor: '#DE7C5A',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 370,
    height: 620,
  },
  brancoContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 350,
  },
  textoAviso: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
  },
  textoConteudo: {
    fontSize: 24,
    color: '#000',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  botoesContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  botaoConfirmar: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotaoConfirmar: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
