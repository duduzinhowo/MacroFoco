import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Especificacoes({ route, navigation }) {
  const { nome, info, setSomaEspecificacoes } = route.params;
  const [quantidade, setQuantidade] = useState(100);

  const handleConfirmarPress = () => {
    setSomaEspecificacoes((prevSoma) => ({
      kcal: prevSoma.kcal + info.kcal * (quantidade / 100),
      carboidratos: prevSoma.carboidratos + info.carboidratos * (quantidade / 100),
      proteinas: prevSoma.proteinas + info.proteinas * (quantidade / 100),
      gorduras: prevSoma.gorduras + info.gorduras * (quantidade / 100),
    }));
    navigation.navigate('Menu', {...route.params});
  };

  const handleAumentarQuantidade = () => {
    setQuantidade(quantidade + 5);
  };

  const handleDiminuirQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 5);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Menu')}>
        <Image
          source={require('./assets/Imagens/voltar.png')} // Substitua pelo caminho da sua imagem
          style={{ width: 40, height: 40 }}
        />
      </TouchableOpacity>
      <View style={styles.marromContainer}>
        <View style={styles.topContainer}>
          <View style={styles.retanguloNomeItem}>
            <Text style={styles.nomeItem}>{nome}</Text>
          </View>
        </View>
        <View style={styles.brancoContainer}>
          <Text style={styles.textoEspecificacoes}>Kcal: {info.kcal}</Text>
          <Text style={styles.textoEspecificacoes}>Carboidratos: {info.carboidratos}</Text>
          <Text style={styles.textoEspecificacoes}>Proteínas: {info.proteinas}</Text>
          <Text style={styles.textoEspecificacoes}>Gorduras: {info.gorduras}</Text>
          <View style={styles.containerQuantidade}>
            <TouchableOpacity
              style={styles.botaoQuantidade}
              onPress={handleDiminuirQuantidade}
            >
              <Text style={styles.textoBotaoQuantidade}>-</Text>
            </TouchableOpacity>
            <Text style={styles.textoQuantidade}>{quantidade}</Text>
            <TouchableOpacity
              style={styles.botaoQuantidade}
              onPress={handleAumentarQuantidade}
            >
              <Text style={styles.textoBotaoQuantidade}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.retanguloConfirmar} onPress={handleConfirmarPress}>
          <Text style={styles.textoConfirmar}>Confirmar</Text>
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
    backgroundColor: '#280000',
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
    height: 300,
  },
  retanguloConfirmar: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginTop: 20,
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButton: {
    position: 'absolute',
    top: 24,
    left: 18,
    zIndex: 1,
  },
  textoConfirmar: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  nomeItem: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5, // Ajuste para o espaçamento do nomeItem
  },
  textoEspecificacoes: {
    fontSize: 21,
    color: '#000',
    marginBottom: 5,
  },
  containerQuantidade: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  botaoQuantidade: {
    backgroundColor: '#DE7C5A',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
  textoBotaoQuantidade: {
    fontSize: 30,
    color: '#000',
  },
  textoQuantidade: {
    fontSize: 25,
    marginHorizontal: 10,
  },
  retanguloNomeItem: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    marginBottom: 10,
  }
});