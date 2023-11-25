import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Home from './src/Home';

const App = () => {
  const [name, setName] = useState('Zeeshan Ansari');
  const handlePress = () => {
    setName('Asba Ansari');
  };
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Props in React Native </Text>
      <Button title='Click Here' onPress={handlePress} />
      <Home name={name} />
    </View>
  );
};

export default App;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  title: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
});
