import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Home = (props) => {
  return (
    <View style={Styles.container}>
      <Text>Hello {props.name}</Text>
    </View>
  );
};

export default Home;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
});
