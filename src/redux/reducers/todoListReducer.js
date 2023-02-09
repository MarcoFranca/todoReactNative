import {ADD_STORE_TODO, ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO} from "../actions";
import AsyncStorageNative from "@react-native-async-storage/async-storage/src/AsyncStorage.native";
const todoListReducer = (state = [], action) => {
    let nextId = Math.floor(Date.now() * Math.random()).toString(36)

    switch (action.type) {
        case ADD_TODO:
            try {
            const newTodo = {
                id:nextId,
                text: action.text,
                done: false,
                edit:false
            }
            AsyncStorageNative.setItem('todos', JSON.stringify([...state, newTodo]))
            return[...state, newTodo]

            }catch (e){console.log(e)}
            break

        case ADD_STORE_TODO:

            return action.todos
        case UPDATE_TODO:
            try {
            const editTodo = state.map(todo =>{
                if (todo.id === action.todo.id){
                    action.todo.edit = false
                    return action.todo
                }
                return todo
            })
                    AsyncStorageNative.setItem('todos', JSON.stringify(editTodo))
                return editTodo
            }catch (e) {console.log(e)}
            break

        case TOGGLE_TODO:
            try {
            const togle = state.map(todo => {
                if (todo.id === action.todoId){
                    return {
                        ...todo,
                        done: !todo.done
                    };
                }
                return todo;
            })
                AsyncStorageNative.setItem('todos', JSON.stringify(togle))
            return togle
            }catch (e) { console.log(e)}
            break

        case DELETE_TODO:
            try {
            const delTodo = state.filter(todo => todo.id !== action.todo.id)
                AsyncStorageNative.setItem('todos', JSON.stringify(delTodo))
                return delTodo
            }catch (e) {console.log(e)}
            break

        default:
            return state;
    }
}
export default todoListReducer
