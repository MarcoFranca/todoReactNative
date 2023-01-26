import React from 'react';
import {connect} from "react-redux";
import TodoListItem from "./TodoListItem";
import {deleteTodo, setEditingTodo, toggleTodo} from "../../redux/actions"
import {ListContainer} from "./TodoListStyle";

const TodoList = ({todos, dispatchToggleTodo, dispatchEditingTodo, dispatchDeleteTodo}) => (
    <ListContainer>
        {todos.map(todo=>(
            <TodoListItem
                key={todo.id}
                todo = {todo}
                onPressTodo = {()=> dispatchToggleTodo(todo.id)}
                editTodo = {()=> dispatchEditingTodo(todo)}
                deleteTodo = {()=> dispatchDeleteTodo(todo)}
            />
        ))}
    </ListContainer>
)

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
