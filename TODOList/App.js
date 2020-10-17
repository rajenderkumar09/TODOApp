/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

import TodoItem from './src/components/TodoItem';
import HookDemo from './HooksDemo';

export default function App() {
  
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  addToDo = () => {
    if (value.length > 0 ) {
      setTodos([...todos, {text:value, key:Date.now(), checked:false}]);
      setValue('');
    }
  }

  onCheck = (key) => {
    setTodos (
      todos.map(todo => {
        if (todo.key == key) {
          todo.checked = !todo.checked
        }
        return  todo
      })
    )
  }

  onDelete = (key) => {
    setTodos(
      todos.filter(todo => {
        return todo.key != key
      })
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <HookDemo />
      <Text style={styles.header}> {`TODO List`} </Text>
      <View style={styles.textInputContainer}>
        <TextInput multiline placeholder={`What do you want to do Today?`} placeholderTextColor={`#abbabb`} style={styles.textInput} value={value} onChangeText={text => setValue(text)} />
        <TouchableOpacity onPress={addToDo}>
          <Text> {`ADD`} </Text>
          {/*<Icon name="plus" size={30} style={{marginLeft: 15}} />*/}
        </TouchableOpacity>
      </View>


      <ScrollView style={{width:'100%'}}>
        {
          todos.map(todo => {
            return <TodoItem 
              text={todo.text} 
              checked={todo.checked} key={todo.key} 
              onDelete={() => {onDelete(todo.key)}} 
              onCheck={() => {onCheck(todo.key)}}
            />
          })
        }
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'flex-start',
    backgroundColor:'#F5FCFF',
  },
  header:{
    marginTop:'15%',
    fontSize:20,
    color:'red',
    paddingBottom:10,
  },
  textInputContainer:{
    flexDirection:'row',
    alignItems:'baseline',
    borderColor:'black',
    borderBottomWidth:1,
    paddingBottom:10,
    paddingRight:10,
  },
  textInput:{
    flex:1,
    height:20,
    fontSize:18,
    fontWeight:'bold',
    color:'black',
    paddingLeft:10,
    minHeight:'3%',
  }
})