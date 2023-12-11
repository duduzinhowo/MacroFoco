// AdicionarManualmente.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function AdicionarManualmente({ route, navigation }) {
  const { setSomaEspecificacoes } = route.params;
  const [quantidade, setQuantidade] = useState({
    kcal: 0,
    carboidratos: 0,
    proteinas: 0,
    gorduras: 0,
  });

  const handleAdicionarPress = () => {
    // Adicione a lógica para somar com as especificações no Menu
    setSomaEspecificacoes((prevSoma) => ({
      kcal: prevSoma.kcal + parseFloat(quantidade.kcal),
      carboidratos: prevSoma.carboidratos + parseFloat(quantidade.carboidratos),
      proteinas: prevSoma.proteinas + parseFloat(quantidade.proteinas),
      gorduras: prevSoma.gorduras + parseFloat(quantidade.gorduras),
    }));
  
    // Por exemplo, navegar de volta para a tela do Menu
    navigation.navigate('Menu');
  };

  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Menu')}>
        <Image
          source={require('./assets/Imagens/voltar.png')} // Substitua pelo caminho da sua imagem
          style={{ width: 40, height: 40 }}
        />
      </TouchableOpacity>
      <View style={styles.darkContainer}>
        <View style={styles.marromContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Macronutrientes</Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.label}>Quantidade de Kcal:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={quantidade.kcal.toString()}
              onChangeText={(text) => setQuantidade({ ...quantidade, kcal: parseFloat(text) })}
            />

            <Text style={styles.label}>Quantidade de Carboidratos:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={quantidade.carboidratos.toString()}
              onChangeText={(text) => setQuantidade({ ...quantidade, carboidratos: parseFloat(text) })}
            />

            <Text style={styles.label}>Quantidade de Proteínas:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={quantidade.proteinas.toString()}
              onChangeText={(text) => setQuantidade({ ...quantidade, proteinas: parseFloat(text) })}
            />

            <Text style={styles.label}>Quantidade de Gorduras:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={quantidade.gorduras.toString()}
              onChangeText={(text) => setQuantidade({ ...quantidade, gorduras: parseFloat(text) })}
            />
          </View>

          <TouchableOpacity style={styles.botao} onPress={handleAdicionarPress}>
            <Text style={styles.textoBotao}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#de7c5a',
  },
  menuButton: {
    position: 'absolute',
    top: 24,
    left: 18,
    zIndex: 1,
  },
  darkContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#280000', // Cor do novo contêiner escuro
    width: 450,
    height: 620,
  },
  marromContainer: {
    backgroundColor: '#DE7C5A',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 370,
    height: 620,
  },
  titleContainer: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },
  innerContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    color: '#000',
    marginBottom: 5,
  },
  input: {
    borderRadius: 10,
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 5,
    color: '#000',
  },
  botao: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',

  },
  textoBotao: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },
});
