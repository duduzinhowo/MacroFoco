
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Menu({route}) {
  const navigation = useNavigation();
  console.log("resultado", route.params)


  const [somaEspecificacoes, setSomaEspecificacoes] = useState({
    kcal: 0,
    carboidratos: 0,
    proteinas: 0,
    gorduras: 0,
  });

  const [total, setTotal] = useState({
    kcal: route.params?.kcalUsuario || 0,
    carboidratos: route.params?.carboidratosUsuario || 0,
    proteinas: route.params?.proteinasUsuario || 0,
    gorduras: route.params?.gordurasUsuario || 0,
  })
  
  // Função para carregar os valores do AsyncStorage quando o componente for montado
  const loadTotalValues = async () => {
    try {
      const storedValues = await AsyncStorage.getItem('totalValues');
      if (storedValues) {
        setSomaEspecificacoes(JSON.parse(storedValues));
      }
    } catch (error) {
      console.error('Erro ao carregar os valores do AsyncStorage:', error);
    }
  };

  // Carrega os valores ao montar o componente
  useEffect(() => {
    loadTotalValues();
  }, []);

  // Função para salvar os valores no AsyncStorage
  const saveTotalValues = async (values) => {
    try {
      await AsyncStorage.setItem('totalValues', JSON.stringify(values));
    } catch (error) {
      console.error('Erro ao salvar os valores no AsyncStorage:', error);
    }
  };

  const handlePress = (nome, info) => {
    navigation.navigate('Especificacoes', { nome, info, setSomaEspecificacoes, saveTotalValues });
  };

  const handleBotao1Press = () => {
    navigation.navigate('MacrosManual', {setSomaEspecificacoes, saveTotalValues});
  };

  const handleBotao2Press = () => {
    navigation.navigate('SobreVoce');
  };

  const handleZerarVariaveis = () => {
    const zeroValues = {
      kcal: 0,
      carboidratos: 0,
      proteinas: 0,
      gorduras: 0,
    };
    setSomaEspecificacoes(zeroValues);
    saveTotalValues(zeroValues); // Salva os valores zerados
  };

  kcal = ((total.carboidratos || 0) * 4) + ((total.proteinas || 0) * 4) + ((total.gorduras) * 9)

  const items = [
    {
      nome: 'Morango',
      imagem: require('./assets/Imagens/morango.png'),
      info: { kcal: 30, carboidratos: 6.8, proteinas: 0.90, gorduras: 0.30 },
    },
    {
      nome: 'Bife',
      imagem: require('./assets/Imagens/bife.png'),
      info: { kcal: 261, carboidratos: 23, proteinas: 22, gorduras: 9.1 },
    },
    {
        nome: 'Arroz',
        imagem: require('./assets/Imagens/arroz.png'),
        info: { kcal: 128, carboidratos: 28.1, proteinas: 2.5, gorduras: 0.2 },
    },
    {
        nome: 'Aveia',
        imagem: require('./assets/Imagens/aveia.png'),
        info: { kcal: 347, carboidratos: 57, proteinas: 14.33, gorduras: 7.33 },
    },
    {
        nome: 'Banana',
        imagem: require('./assets/Imagens/banana.png'),
        info: { kcal: 213, carboidratos: 49 , proteinas: 2.64, gorduras: 0.9 },
    },
    {
        nome: 'Coxinha',
        imagem: require('./assets/Imagens/coxinha.png'),
        info: { kcal: 285, carboidratos: 42, proteinas: 10, gorduras: 9 },
    },
    {
        nome: 'Feijão',
        imagem: require('./assets/Imagens/feijao.png'),
        info: { kcal: 76, carboidratos: 13.6, proteinas: 4.8, gorduras: 0.5 },
    },
    {
        nome: 'Feijoada',
        imagem: require('./assets/Imagens/feijoada.png'),
        info: { kcal: 117, carboidratos: 11.6, proteinas: 8.7, gorduras: 6.5 },
    },
    {
        nome: 'Frango',
        imagem: require('./assets/Imagens/frango.png'),
        info: { kcal: 159, carboidratos: 0, proteinas: 32, gorduras: 2.5 },
    },
    {
        nome: 'Laranja',
        imagem: require('./assets/Imagens/laranja.png'),
        info: { kcal: 63, carboidratos: 15.5, proteinas: 1.3, gorduras: 0.3 },
    },
    {
        nome: 'Maça',
        imagem: require('./assets/Imagens/maca.png'),
        info: { kcal: 67.6, carboidratos: 17.95, proteinas: 0.34, gorduras: 0.22 },
    },
    {
        nome: 'Tangerina',
        imagem: require('./assets/Imagens/tangerina.png'),
        info: { kcal: 50, carboidratos: 12, proteinas: 0.8, gorduras: 0.5 },
    },
];

  const renderQuadrados = () => {
    return items.map(({ nome, imagem, info }, index) => (
      <TouchableOpacity
        key={index}
        style={styles.quadrado}
        onPress={() => handlePress(nome, info)}
      >
        <Image
          source={imagem}
          style={{ width: 70, height: 60, marginBottom: 5 }}
        />
        <Text>{nome}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.fundo}></View>
      <View style={styles.retanguloSuperior}>
        <View style={styles.botoesContainerRetangulo}>
          <TouchableOpacity style={styles.botaoRetangulo} onPress={handleBotao2Press}>
              <Image
                source={require('./assets/Imagens/engrenagem.png')}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
          <TouchableOpacity style={styles.botaoRetangulo} onPress={handleBotao1Press}>
            <Image
              source={require('./assets/Imagens/adicionar.png')}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoRetangulo} onPress={handleZerarVariaveis}>
          <Image
            source={require('./assets/Imagens/trash.png')}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#000' }}>
          Total
        </Text>
        <Text style={{ fontSize: 16}}>Kcal: {somaEspecificacoes.kcal.toFixed(0)} / {kcal || 0}</Text>
        <Text style={{ fontSize: 16}}>Carboidratos: {somaEspecificacoes.carboidratos.toFixed(0)} / {total.carboidratos || 0}</Text>
        <Text style={{ fontSize: 16}}>Proteínas: {somaEspecificacoes.proteinas.toFixed(0)} /  {total.proteinas || 0}</Text>
        <Text style={{ fontSize: 16}}>Gorduras: {somaEspecificacoes.gorduras.toFixed(0)} /  {total.gorduras || 0}</Text>
        
      </View>
      <View style={styles.quadradosContainer}>{renderQuadrados()}</View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  fundo: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#de7c5a', // Cor do retângulo de fundo
  },
  quadradosContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  quadrado: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  retanguloSuperior: {
    width: 320,
    height: 150,
    margin: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 20,
    width: '100%',
  },
  botao: {
    width: 70,
    height: 70,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  botoesContainerRetangulo: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  botaoRetangulo: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

