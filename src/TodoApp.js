import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import TodoForm from "./components/TodoForm";

export default class TodoApp extends Component {
    render() {
        return (
            <View style={styles.container}>
               <TodoForm/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop:30,
    }
})

