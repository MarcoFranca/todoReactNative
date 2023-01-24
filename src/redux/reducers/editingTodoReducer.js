import {ADD_TODO, SET_EDITING_TODO, SET_TODO_TEXT, UPDATE_TODO} from "../actions";

const INITIAL_STATE = {
    id: null,
    text: '',
    done:false
};
const editingTodoReducer = (state = INITIAL_STATE ,action)=>{
    switch (action.type) {
        case SET_TODO_TEXT:
            return {
                ...state,
                text:action.text
            };
        case ADD_TODO:
        case UPDATE_TODO:
            return INITIAL_STATE
        default:
            return state;

        case SET_EDITING_TODO:
            return action.todo;
    }
}
export default editingTodoReducer;
