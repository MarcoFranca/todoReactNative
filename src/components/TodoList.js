import React from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import {connect} from "react-redux";
import TodoListItem from "./TodoListItem";
import {deleteTodo, setEditingTodo, toggleTodo} from "../redux/actions"

const TodoList = ({todos, dispatchToggleTodo, dispatchEditingTodo, dispatchDeleteTodo}) => (
    <ScrollView style={styles.container}>
        {todos.map(todo=>(
            <TodoListItem
                key={todo.id}
                todo = {todo}
                onPressTodo = {()=> dispatchToggleTodo(todo.id)}
                onLongPressTodo = {()=> dispatchEditingTodo(todo)}
                deleteTodo = {()=> dispatchDeleteTodo(todo)}
            />
        ))}
    </ScrollView>
)

const styles = StyleSheet.create({
    container:{
        marginBottom:40,
        backgroundColor: '#000000',

    }
});

const mapStateToProps = state =>{
    const {todos} = state;
    return {todos};
}

export default connect(
    mapStateToProps,
    {
        dispatchToggleTodo: toggleTodo,
        dispatchEditingTodo: setEditingTodo,
        dispatchDeleteTodo: deleteTodo
    }
)(TodoList)
