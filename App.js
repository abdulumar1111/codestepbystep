import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

const App = () => {

  const handlePress = (name) => {
    Alert.alert(`Hello ${name}`)
  }
  return(
    <View style={Styles.container}>
      <Text style={Styles.title}>Event in React Native </Text>
      <Button title='Click Here' onPress={() => handlePress('Zeeshan Ansari')} />
    </View>
  )
}

export default App;

const Styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f4f4f4',
    paddingVertical:12,
    paddingHorizontal:12
  },
  title:{
    color:'#333',
    fontSize:16,
    fontWeight:'600',
    marginBottom:8
  }
})