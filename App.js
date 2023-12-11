import React from 'react';
import { Text, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Aviso from './Aviso';
import ComMacros from './ComMacros';
import Especificacoes from './Especificacoes';
import MacrosManual from './MacrosManual';
import Menu from './Menu';
import SemMacros from './SemMacros';
import SobreVoce from './SobreVoce';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Aviso">
        <Stack.Screen name="Aviso" component={Aviso} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="ComMacros" component={ComMacros} />
        <Stack.Screen name="Especificacoes" component={Especificacoes} />
        <Stack.Screen name="MacrosManual" component={MacrosManual} />
        <Stack.Screen name="SemMacros" component={SemMacros} />
        <Stack.Screen name="SobreVoce" component={SobreVoce} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
