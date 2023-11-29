import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.subBox1}>
          <Text>Sub Box 1</Text>
        </View>
        <View style={styles.subBox2}>
          <Text>Sub Box 2</Text>
        </View>
        <View style={styles.subBox3}>
          <Text>Sub Box 3</Text>
        </View>
      </View>

      <View style={styles.box2}>
        <Text>Box 2</Text>
      </View>

      <View style={styles.box3}>
        <Text>Box 3</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  box1: {
    flex: 2,
    backgroundColor: '#ff6b6b',
    flexDirection: 'row',
  },
  box2: {
    flex: 1,
    backgroundColor: '#1dd1a1',
  },
  box3: {
    flex: 1,
    backgroundColor: '#ff9f43',
  },
  subBox1: {
    flex: 1,
    backgroundColor: '#feca57',
  },
  subBox2: {
    flex: 1,
    backgroundColor: '#5f27cd',
  },
  subBox3: {
    flex: 1,
    backgroundColor: '#576574',
  },
});
