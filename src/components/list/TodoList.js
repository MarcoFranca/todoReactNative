import React, {useEffect} from 'react';
import {connect} from "react-redux";
import TodoListItem from "./TodoListItem";
import {addStoreTodo, deleteTodo, setEditingTodo, toggleTodo} from "../../redux/actions"
import {ListContainer} from "./TodoListStyle";
import AsyncStorageNative from "@react-native-async-storage/async-storage/src/AsyncStorage.native";

const TodoList = ({todos, dispatchToggleTodo, dispatchEditingTodo, dispatchDeleteTodo,dispatchAddTodo}) => {


    useEffect( async ()=>{
        const totalParse = await AsyncStorageNative.getItem("todos")
        const total = JSON.parse(totalParse)
        if (total){
            dispatchAddTodo(total);
            console.log(total)
        }
    },[])
    return (
    <ListContainer>
        {todos.map(todo=>(
            <TodoListItem
                key={todo.id}
                todo = {todo}
                onPressTodo = {()=> dispatchToggleTodo(todo.id)}
                editTodo = {() => dispatchEditingTodo(todo)}
                deleteTodo = {()=> dispatchDeleteTodo(todo)}
            />
        ))}
    </ListContainer>
)}
const mapStateToProps = state =>{
    const {todos} = state;
    return {todos};
}
export default connect(
    mapStateToProps,
    {
        dispatchToggleTodo: toggleTodo,
        dispatchEditingTodo: setEditingTodo,
        dispatchAddTodo: addStoreTodo,
        dispatchDeleteTodo: deleteTodo

    }
)(TodoList)
