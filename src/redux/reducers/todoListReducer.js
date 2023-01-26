import {ADD_TODO, DELETE_TODO,TOGGLE_TODO, UPDATE_TODO} from "../actions";
let nextId = 1;
const todoListReducer = (state = [], action) =>{
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                id:nextId++,
                text: action.text,
                done: false,
                edit:false
            }
            return[...state, newTodo]
        case UPDATE_TODO:
            return  state.map(todo =>{
                if (todo.id === action.todo.id){
                    action.todo.edit = false
                    return action.todo
                }
                return todo
            })
        case TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id === action.todoId){
                    return {
                        ...todo,
                        done: !todo.done
                    };
                }
                    return todo;
            })
        case DELETE_TODO:
                return state.filter(todo => todo.id !== action.todo.id)

        default:
            return state;
    }
}
export default todoListReducer
