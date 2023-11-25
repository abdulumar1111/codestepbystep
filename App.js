import React,{ useState } from 'react';
import {StyleSheet, Text, TextInput, View,Button} from 'react-native';

const App = () => {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 12, marginVertical: 12}}>
        <Text style={styles.title}>Text Input In React Native</Text>
        <Text style={styles.title}>Hello {name}</Text>
        <TextInput placeholder="Enter Name" style={styles.input} value={name} onChangeText={(e) => setName(e)} />
        <Button title="Click Here" onPress={() => setName('')}  />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  title: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    height: 45,
    borderRadius: 4,
    fontSize: 16,
    paddingHorizontal: 8,
    marginBottom:8
  },
});
