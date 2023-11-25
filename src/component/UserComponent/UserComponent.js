import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UserComponent = (props) => {
    console.log(props.item)
    return(
        <View style={styles.box}>
            <Text>{props.item.id}</Text>
            <Text>{props.item.title}</Text>
        </View>
    )
}

export default UserComponent;

const styles = StyleSheet.create({
    box: {
        backgroundColor:'#335454',
        marginVertical:4,
        paddingHorizontal:4,
        paddingVertical:4,
        borderRadius:4
    }
})