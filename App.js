import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const App = () => {
  var name = 'Zeeshan Ansari';
  let age = 25;
  const email = 'abc123@gmail.com';
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello {name} and your age {age} year old
      </Text>
      <Text style={styles.subTitle}>Email {email}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 12,
    color: '#999999',
    fontWeight: '600',
  },
});
