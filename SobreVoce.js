import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SobreVoce() {
  const navigation = useNavigation();

  const handlePressComMacros = () => {
    navigation.navigate('ComMacros');
  };

  const handlePressSemMacros = () => {
    navigation.navigate('SemMacros');
  };

  return (
    <View style={styles.container}>
      <View style={styles.retangulo}>
        <View style={styles.retangulo2}>
          <Text style={styles.textoSobreVoce}>SOBRE VOCÊ</Text>
          </View>
        <View style={styles.faixa}></View>
        <View style={styles.circulo}>
          <Text style={styles.textoOu}>OU</Text>
        </View>
        {/* Adicionando o retângulo branco pressionável */}
        <TouchableOpacity style={styles.botao} onPress={handlePressComMacros}>
          <Text style={styles.textoBotao}>Já sei a divisão dos meus macronutrientes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao2} onPress={handlePressSemMacros}>
          <Text style={styles.textoBotao}>Não sei a divisão dos meus macronutrientes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#280000', // Cor do novo contêiner escuro
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  retangulo: {
    backgroundColor: '#DE7C5A',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '87%',
    height: '95%',

    position: 'relative',
  },
  retangulo2: {
    backgroundColor: '#520000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '82%',
    height: '13%',
    top: -240,

  },
  faixa: {
    backgroundColor: '#B10F2E',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '110%',
    height: '4%',
    top: -220,
  },
  circulo: {
    backgroundColor: '#520000',
    borderRadius: 50, // Um valor grande para tornar o retângulo um círculo
    width: 100, // Ajuste o diâmetro do círculo conforme necessário
    height: 100,
    position: 'absolute',
    top: '55%', // Posiciona o círculo no centro verticalmente
    transform: [{ translateY: -50 }], // Corrige a posição vertical
    
  },
  botao: {
    backgroundColor: '#FDFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',  // Ajustado para 80% do retângulo principal
    height: '15%', // Ajustado para 10% do retângulo principal
    position: 'absolute', // Posicionamento absoluto em relação ao retângulo principal
    bottom: '55%',  // Ajustado para 5% do retângulo principal
    
  },
  textoBotao: {
    color: '#280000',
    fontWeight: 'bold',
    fontSize: 21, // Removido 'em' e ajustado para um valor absoluto
    textAlign: 'center'
  },
    botao2: {
    backgroundColor: '#FDFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',  // Ajustado para 80% do retângulo principal
    height: '15%', // Ajustado para 10% do retângulo principal
    position: 'absolute', // Posicionamento absoluto em relação ao retângulo principal
    bottom: '19.5%',  // Ajustado para 5% do retângulo principal
    textAlign: 'center'

  },
    textoSobreVoce: {
    color: '#FDFFFF',
    fontWeight: 'bold',
    fontSize: 30, // Removido 'em' e ajustado para um valor absoluto

  },

    textoOu: {
    color: '#FDFFFF',
    fontWeight: 'bold',
    fontSize: 30, // Removido 'em' e ajustado para um valor absoluto
    bottom: '-30%',
    left: '26%', 
  },
});