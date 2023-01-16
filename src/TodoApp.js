import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import TodoForm from "./components/TodoForm";
import {Provider} from "react-redux";
import TodoList from "./components/TodoList";
import {store} from "./redux/store/store";

export default class TodoApp extends Component {
    render() {
        return (
            <Provider store={store} >
                <View style={styles.container}>
                    <TodoForm />
                    <TodoList />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop:30,
    }
})

