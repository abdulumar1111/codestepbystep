import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [count,setCount] = useState(0);

  useEffect(() => {

  },[])
  const handlePress = () => {
    setCount(count+1)
  }
  return(
    <View style={styles.container}>
      <Text style={styles.title}>UseEffect Hook In React Native</Text>
      <Text style={styles.title}>The count increment : {count}</Text>
      <Button title='Click Here' onPress={handlePress} />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f4f4f4',
    paddingHorizontal:8,
    paddingVertical:8
  },
  title:{
    fontSize:16,
    color:'#333',
    fontWeight:'700',
    marginBottom:8
  }
})