import React from 'react';
import { SectionList, StyleSheet, Text, View} from 'react-native';

const data = [
  {
    id:1,
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    id:2,
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    id:3,
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    id:4,
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const App = () => {

  const renderSection = ({item}) => {
    return(
      <View>
        <Text>{item}</Text>
      </View>
    )
  }

  const renderHeader = ({section : {title}}) => {
    return(
      <View style={{backgroundColor:'#777777',paddingHorizontal:4,paddingVertical:4,marginVertical:4,borderRadius:4}}>
        <Text style={{color:'#fff',fontSize:16,fontWeight:'600',textTransform:'capitalize'}}>{title}</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 8}}>
       <SectionList 
       sections={data}
      //  keyExtractor={(item, index) => item + index}
       renderItem={renderSection}
       renderSectionHeader={renderHeader}
       />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  }
});
