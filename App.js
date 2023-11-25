import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showData, setShowData] = useState(false);

  const handleChange = () => {
    setShowData(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPassword('');
    setShowData(false);
  };
  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 12, marginVertical: 12}}>
        <Text style={styles.title}>Text Input In React Native</Text>
        {showData ? (
          <Text style={styles.title}>
            Hello {name} and Email {email} and password {password}
          </Text>
        ) : null}
        <TextInput
          placeholder="Enter Name"
          style={styles.input}
          value={name}
          onChangeText={e => setName(e)}
        />
        <TextInput
          placeholder="Enter Email"
          style={styles.input}
          value={email}
          onChangeText={e => setEmail(e)}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Enter Password"
          style={styles.input}
          value={password}
          onChangeText={e => setPassword(e)}
          secureTextEntry
        />
        <Button title="Click Here" onPress={handleChange} />
        <View style={{marginBottom: 10}} />
        <Button title="Reset" color={'red'} onPress={handleReset} />
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
    marginBottom: 8,
  },
});
