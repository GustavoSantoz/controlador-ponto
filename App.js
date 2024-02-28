import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const App = () => {
  const [hora, setHora] = useState('00:00');
  const [intervalo, setIntervalo] = useState('00:00');
  const [result, setResult] = useState('00:00');

  const somarHoras = (hora1, hora2) => {
    const [h1, m1] = hora1.split(':').map(Number);
    const [h2, m2] = hora2.split(':').map(Number);

    let minutosTotais = m1 + m2;
    let horasTotais = h1 + h2;

    if (minutosTotais >= 60) {
      minutosTotais -= 60;
      horasTotais += 1;
    }

    return `${String(horasTotais).padStart(2, '0')}:${String(minutosTotais).padStart(2, '0')}`;
  };

  return (
    <View>
      <View>
        <Text>Coloque seu horário.</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          keyboardType="numeric"
          placeholder="Horário A"
          value={hora}
          onChangeText={(text) => setHora(text)}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          keyboardType="numeric"
          placeholder="Horário B"
          value={intervalo}
          onChangeText={(text) => setIntervalo(text)}
        />
        <Button
          title="Submit"
          onPress={() => setResult(somarHoras(hora, intervalo))}
        />
      </View>
      <View>
        <Text>Resultado:</Text>
        <Text>{result}</Text>
      </View>
    </View>
  );
};

export default App;
