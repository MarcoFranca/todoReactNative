import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TodoForm from "./components/todoForm";

export default class TodoApp extends Component {
    render() {
        return (
            <Text style={styles.container}>
               <TodoForm/>
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop:30,
    }
})

