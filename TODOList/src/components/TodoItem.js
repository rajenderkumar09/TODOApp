import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
//import Icon from 'react-native-vector-icons/Feather';


export default function ToDoItem (props) {
    return (
        <View style={styles.listContainer}>
            {/*<Icon name='square' size={30} color={'black'} style={{marginLeft:15}} />*/}
            <TouchableOpacity onPress={props.onCheck}>
                <Text> {props.checked ? `UNCHECK` : `CHECK`} </Text>
            </TouchableOpacity>
            <Text>
                <Text numberOfLines={3} style={styles.listItem} > {props.text} </Text>
            </Text>
            <TouchableOpacity onPress={props.onDelete} style={{ marginLeft:'auto' }}>
                <Text> {`DELETE`} </Text>
            </TouchableOpacity>
            {/*<Icon name='trash-2' color={'red'} size={30} style={{marginLeft:'auto'}} onPress={ props.onDelete } />*/}
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer:{
        flexDirection:'row',
        marginTop:'5%',
        borderColor:'#aaaaaa',
        alignItems:'stretch',
        borderBottomWidth:1.5,
        minHeight:40,
    },
    listItem:{
        paddingBottom:20,
        paddingLeft:10,
        marginTop:6,
        borderColor:'green',
        borderBottomWidth:1,
        fontSize:17,
        fontWeight:'bold',
    }
})