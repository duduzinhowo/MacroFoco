import React, { useState } from 'react';
import {View, StyleSheet, TouchableOpacity, Text, TextInput, Keyboard, Platform, KeyboardAvoidingView, Image} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function SemMacros( ) {

  const navigation = useNavigation();
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [idade, setIdade] = useState('');
  const [atividadeFisica, setAtividadeFisica] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [checkbox1, setCheckbox1] = useState();
  const [checkbox2, setCheckbox2] = useState();
  const [usuarioFator, setUsuarioFator] = useState(null);
  const [kcalUsuario, setkcalUsuario] = useState(false);
  const [carboidratosUsuario, setcarboidratosUsuario] = useState(false);
  const [proteinasUsuario, setproteinasUsuario] = useState(false);
  const [gordurasUsuario, setgordurasUsuario] = useState(false);

  const handleCheckboxPress = (checkboxValue, checkboxNumber) => {
    if (checkboxNumber === 1) {
      setCheckbox1(checkboxValue);
    } else {
      setCheckbox2(checkboxValue);
    }
  };

  const calcularResultado = () => {
    const pesoEmKg = parseFloat(peso);

    let usuarioBasal=0;
    
    if (idade <= 3 && idade >= 0.1) {
      usuarioBasal=(59.512 * pesoEmKg) - 30.4;
    } else if (idade <= 10) {
      usuarioBasal=(22.706 * pesoEmKg) + 504.3;
    } else if (idade <= 18) {
      usuarioBasal=(17.686 * pesoEmKg) + 658.2;
    } else if (idade <= 30 ) {
      usuarioBasal=(15.057 * pesoEmKg) + 692.2;
    } else if (idade <= 60) {
      usuarioBasal=(11.472 * pesoEmKg) + 873.1;
    } else if (idade >=61) {
      usuarioBasal=(11.711 * pesoEmKg) + 587.7;
    }

     // Aplica fator multiplicativo com base nas checkboxes de atividade física
    let multiplicador = 1.0;

    if (checkbox1=="Intensa") {
      multiplicador = 2.2;
    } else if (checkbox1=="Moderada") {
      multiplicador = 1.84;
    } else if (checkbox1=="N/a") {
      multiplicador = 1.55;
    }

    let fator=usuarioBasal * multiplicador;
    setUsuarioFator(fator);

    let multiplicadorCarbo = 1.0;
    let multiplicadorProteina = 1.0;
    let multiplicadorGordura = 1.0;

    if (checkbox2=="Dieta") {
      fator -= 500
      multiplicadorCarbo = 0.4;
      multiplicadorProteina = 0.3;
      multiplicadorGordura = 0.3;
    } else if (checkbox2=="Ganho") {
      fator += 500
      multiplicadorCarbo = 0.55;
      multiplicadorProteina = 0.3;
      multiplicadorGordura = 0.15;
    } else if (checkbox2=="N/a") {
      multiplicadorCarbo = 0.55;
      multiplicadorProteina = 0.25;
      multiplicadorGordura = 0.2;
    }

    setgordurasUsuario(fator * multiplicadorGordura);
    setproteinasUsuario(fator * multiplicadorProteina);
    setcarboidratosUsuario(fator * multiplicadorCarbo);

    const resultado = {
      kcalUsuario: fator,
      carboidratosUsuario: fator * multiplicadorCarbo / 4,
      proteinasUsuario: fator * multiplicadorProteina / 4,
      gordurasUsuario: fator * multiplicadorGordura / 9,
    };

    navigation.navigate('Menu', { resultado });

  };

  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  >
    <View style={styles.container}>
      <View style={styles.retangulo}>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('SobreVoce')}>
            <Image
              source={require('./assets/Imagens/voltar.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
        <View style={styles.retangulo2}>
          <Text style={styles.textoSobreVoce}>
            INSIRA SUAS INFORMAÇÕES PARA O CÁLCULO
          </Text>
        </View>
        <View style={styles.faixa}>
          <Text style={styles.textoAltura}>Altura</Text>
          <TextInput
            style={styles.inputAltura}
            keyboardType="numeric"
            value={altura}
            onChangeText={(text) => setAltura(text, setAltura)}
          />
          <Text style={styles.textoPeso}>Peso</Text>
          <TextInput
            style={styles.inputPeso}
            keyboardType="numeric"
            value={peso}
            onChangeText={(text) => setPeso(text, setPeso)}
          />

          <Text style={styles.textoIdade}>Idade</Text>
          <TextInput
            style={styles.inputIdade}
            keyboardType="numeric"
            value={idade}
            onChangeText={(text) => setIdade(text, setIdade)}
          />

          <Text style={styles.textoAtividadeFisica}>Atividade física</Text>
          <CheckBox
            title="Intensa"
            checked={checkbox1 == 'Intensa'}
            onPress={() => handleCheckboxPress('Intensa', 1)}
            containerStyle={styles.checkboxContainer1}
          />
            <CheckBox
              title="Moderada"
              checked={checkbox1=="Moderada"}
              onPress={() => handleCheckboxPress("Moderada",1)}
              containerStyle={styles.checkboxContainer2}
            />
            <CheckBox
              title="N/a"
              checked={checkbox1=="N/a"}
              onPress={() => handleCheckboxPress("N/a",1)}
              containerStyle={styles.checkboxContainer3}
            />

            <Text style={styles.textoObjetivo}>Objetivo</Text>
            <CheckBox
              title="Dieta"
              checked={checkbox2=="Dieta"}
              onPress={() => handleCheckboxPress("Dieta",2)}
              containerStyle={styles.checkboxContainer4}
            />
            <CheckBox
              title="Ganho"
              checked={checkbox2=="Ganho"}
              onPress={() => handleCheckboxPress("Ganho",2)}
              containerStyle={styles.checkboxContainer5}
            />
            <CheckBox
              title="N/a"
              checked={checkbox2=="N/a"}
              onPress={() => handleCheckboxPress("N/a",2)}
              containerStyle={styles.checkboxContainer6}
            />
            <TouchableOpacity style={styles.botao2} onPress={calcularResultado}>
              <Text style={styles.textoBotao}>CONFIRMAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

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

  checkboxContainer1: {
    backgroundColor: '#D8C6CA',
    borderRadius: 5,
    justifyContent: 'center',
    width: '31%',  // Ajustado para 80% do retângulo principal
    height: '5%', // Ajustado para 10% do retângulo principal
    position: 'absolute', // Posicionamento absoluto em relação ao retângulo principal
    bottom: '39%',  // Ajustado para 5% do retângulo principal
    left: '-1%',
    borderWidth: 0,
    margin: 0,
    padding: 0,
  },

  checkboxContainer2: {
    backgroundColor: '#D8C6CA',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '35%',  // Ajustado para 80% do retângulo principal
    height: '5%', // Ajustado para 10% do retângulo principal
    position: 'absolute', // Posicionamento absoluto em relação ao retângulo principal
    bottom: '39%',  // Ajustado para 5% do retângulo principal
    left: '30.5%',
    borderWidth: 0,
    margin: 0,
    padding: 0,
  },
  checkboxContainer3: {
    backgroundColor: '#D8C6CA',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',  // Ajustado para 80% do retângulo principal
    height: '5%', // Ajustado para 10% do retângulo principal
    position: 'absolute', // Posicionamento absoluto em relação ao retângulo principal
    bottom: '39%',  // Ajustado para 5% do retângulo principal
    left: '66%',
    borderWidth: 0,
    margin: 0,
    padding: 0,
  },
  checkboxContainer4: {
    backgroundColor: '#D8C6CA',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '31%',  // Ajustado para 80% do retângulo principal
    height: '5%', // Ajustado para 10% do retângulo principal
    position: 'absolute', // Posicionamento absoluto em relação ao retângulo principal
    bottom: '23%',  // Ajustado para 5% do retângulo principal
    left: '-1%',
    borderWidth: 0,
    margin: 0,
    padding: 0,
  },
  checkboxContainer5: {
    backgroundColor: '#D8C6CA',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '35%',  // Ajustado para 80% do retângulo principal
    height: '5%', // Ajustado para 10% do retângulo principal
    position: 'absolute', // Posicionamento absoluto em relação ao retângulo principal
    bottom: '23%',  // Ajustado para 5% do retângulo principal
    left: '30.5%',
    borderWidth: 0,
    margin: 0,
    padding: 0,
  },
  checkboxContainer6: {
    backgroundColor: '#D8C6CA',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',  // Ajustado para 80% do retângulo principal
    height: '5%', // Ajustado para 10% do retângulo principal
    position: 'absolute', // Posicionamento absoluto em relação ao retângulo principal
    bottom: '23%',  // Ajustado para 5% do retângulo principal
    left: '66%',
    borderWidth: 0,
    margin: 0,
    padding: 0,
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
    backgroundColor: '#FDFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '82%',
    height: '13%',
    top: '-200',

  },
    inputAltura: {
    backgroundColor: '#D8C6CA',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',  // Ajustado para 80% do retângulo principal
    height: '5%', // Ajustado para 10% do retângulo principal
    position: 'absolute', // Posicionamento absoluto em relação ao retângulo principal
    bottom: '85%',  // Ajustado para 5% do retângulo principal
  },
    inputPeso: {
    backgroundColor: '#D8C6CA',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',  // Ajustado para 80% do retângulo principal
    height: '5%', // Ajustado para 10% do retângulo principal
    position: 'absolute', // Posicionamento absoluto em relação ao retângulo principal
    bottom: '70%',  // Ajustado para 5% do retângulo principal
  },
    inputIdade: {
    backgroundColor: '#D8C6CA',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',  // Ajustado para 80% do retângulo principal
    height: '5%', // Ajustado para 10% do retângulo principal
    position: 'absolute', // Posicionamento absoluto em relação ao retângulo principal
    bottom: '55%',  // Ajustado para 5% do retângulo principal
  },


  faixa: {
    backgroundColor: '#FDFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '70%',
    top: '2%',
  },
  textoBotao: {
    color: '#FDFFFF',
    fontWeight: 'bold',
    fontSize: 18, // Removido 'em' e ajustado para um valor absoluto
  },
    botao2: {
    backgroundColor: '#570000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',  // Ajustado para 80% do retângulo principal
    height: '12%', // Ajustado para 10% do retângulo principal
    position: 'absolute', // Posicionamento absoluto em relação ao retângulo principal
    bottom: '6.3%',  // Ajustado para 5% do retângulo principal
  },
    textoSobreVoce: {
    color: '#280000',
    fontWeight: 'bold',
    fontSize: 20, // Removido 'em' e ajustado para um valor absoluto

    textAlign:'center',
  },
    textoAltura: {
    color: '#280000',
    fontWeight: 'bold',
    fontSize: 20, // Removido 'em' e ajustado para um valor absoluto

    bottom: '35%',
    left: '0%', 
  },
    textoPeso: {
    color: '#280000',
    fontWeight: 'bold',
    fontSize: 20, // Removido 'em' e ajustado para um valor absoluto

    bottom: '25%',
    left: '0%', 
  },
    textoIdade: {
    color: '#280000',
    fontWeight: 'bold',
    fontSize: 20, // Removido 'em' e ajustado para um valor absoluto

    bottom: '15%',
    left: '0%', 
  },
    textoAtividadeFisica: {
    color: '#280000',
    fontWeight: 'bold',
    fontSize: 20, // Removido 'em' e ajustado para um valor absoluto

    bottom: '5%',
    left: '0%', 
  },
    textoObjetivo: {
    color: '#280000',
    fontWeight: 'bold',
    fontSize: 20, // Removido 'em' e ajustado para um valor absoluto

    bottom: '-5%',
    left: '0%', 
  },
  menuButton: {
    position: 'absolute',
    top: 10,
    left: 8,
    zIndex: 1,
  },
});