import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      />
      <Text style={styles.total}>O total é:</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#74b816',
    fontSize: '5em',
    alignItems: 'center',
    justifyContent: 'center',
  },

  total: {
    fontSize: 30,
  },

  input: {
    height: 30,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
