import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ComMacros() {
  const navigation = useNavigation();

  const [carboidratosUsuario, setCarboidratosUsuario] = useState('');
  const [proteinasUsuario, setProteinasUsuario] = useState('');
  const [gordurasUsuario, setGordurasUsuario] = useState('');
  const [kcalUsuario, setKcalUsuario] = useState(0);

  const handleNumericInput = (text, setStateFunction) => {
    // Remove caracteres não numéricos
    const numericValue = text.replace(/[^0-9]/g, '');
    setStateFunction(numericValue);
  };

  const confirmar = () => {
    navigation.navigate('Menu', { kcalUsuario, carboidratosUsuario, proteinasUsuario, gordurasUsuario });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.rectangle}>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('SobreVoce')}>
          <Image
            source={require('./assets/Imagens/voltar.png')}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
        <View style={styles.rectangleButton1}>
          <Text style={styles.titleText}>INSIRA A QUANTIDADE DE MACRONUTRIENTES</Text>
        </View>
        <View style={styles.rectangleText}>
          <Text style={styles.label}>Carboidratos:</Text>
          <TextInput
            style={styles.input}
            value={carboidratosUsuario}
            onChangeText={(text) => handleNumericInput(text, setCarboidratosUsuario)}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Proteínas:</Text>
          <TextInput
            style={styles.input}
            value={proteinasUsuario}
            onChangeText={(text) => handleNumericInput(text, setProteinasUsuario)}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Gorduras:</Text>
          <TextInput
            style={styles.input}
            value={gordurasUsuario}
            onChangeText={(text) => handleNumericInput(text, setGordurasUsuario)}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity style={styles.confirmarButton} onPress={confirmar}>
          <Text style={styles.confirmarButtonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#250000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  rectangle: {
    backgroundColor: '#DE7C5A',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    height: '95%',
  },

  titleText: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: '0%',
    textAlign: 'center',
  },

  rectangleButton1: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '15%',
    marginBottom: '4%',
  },

  rectangleText: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '60%',
    marginBottom: '4%',
  },

  label: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
  },

  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  confirmarButton: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '10%',
    marginBottom: '4%',
  },

  confirmarButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  menuButton: {
    position: 'absolute',
    top: 10,
    left: 8,
    zIndex: 1,
  },
});
