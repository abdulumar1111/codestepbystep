import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text>Contact</Text>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange'
  }
});
