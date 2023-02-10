# Bem vindo! 👋

Essa é a solução para o desafio [Todo](endereço do desafio).
Nesse desafio eu criei um design no figma de um app de todo list para ser desenvolvido com o framework react-native, 
em que o usuário deve ser capaz de adicionar editar e excluir as suas atividades levando em conta o 
mais próximo do design possível. 
 .

---

## Sumário


- [Desafio](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#screenshot)
- [Tecnologias utilizadas](#my-process)
- [Aprendizados](#what-i-learned)
  - [Styled-Components](#styled)
  - [Async storage](#storage)
  - [Redux](#redux)
- [Author](#author)



<div style="display: flex; justify-content: center; align-items: center" id="the-challenge">
<img style="height:35px ; margin-top:25px; filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(60deg) brightness(98%) contrast(107%);" src="./assets/social_leaderboard_FILL0_wght400_GRAD0_opsz48.svg"> 
<h2 style="color: azure;">Desafio</h2>
</div>

<div>
<h3 style="color: burlywood">O usuario deve ser capaz de:</h3>
<ul style="color: azure">
<li>Adicionar itens de suas atividades.</li>
<li>Marcar a atividade como concluida.</li>
<li>Editar a atividade casa necessário.</li>
<li>Deletar a atividade caso deseje.</li>
<li>Persistir os dados.</li>
</ul>

---

<div style="display: flex; justify-content: center; align-items: center" id="screenshot">
<img style="height:35px ; margin-top:25px; filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(60deg) brightness(98%) contrast(107%);" src="./assets/video_library_FILL0_wght400_GRAD0_opsz48.svg"> 
<h2 style="color: azure;"> Video & links</h2>
<img style="height:35px ; margin-top:25px; filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(60deg) brightness(98%) contrast(107%);" src="./assets/link_FILL0_wght400_GRAD0_opsz48.svg"> 
</div>

[![Little red riding hood](./assets/telaVideoTodo.png)](http://sc.com.ly/show/11aad59b-c94f-48b7-ba7c-03a9448939f1 " Click to Watch!")
- [Live site]()
---


<div style="display: flex; justify-content: center; align-items: center" id="my-process">
<img style="height:35px ; margin-top:25px; filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(60deg) brightness(98%) contrast(107%);" src="./assets/military_tech_FILL0_wght400_GRAD0_opsz48.svg"> 
<h2 style="color: azure;">Tecnologias utilizadas</h2>
</div>

<div>
<ul style="color: azure">
<li>React-Native</li>
<li>Lib Expo linear gradient</li>
<li>Lib react native async storageExpo</li>
<li>Semantic HTML5 markup</li>
<li>Styled-Components</li>
<li>Redux</li>
</ul>
</div>
<div style="display: flex; justify-content: center; align-items: center" id="what-i-learned">
<img style="height:35px ; margin-top:25px; filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(60deg) brightness(98%) contrast(107%);" src="./assets/school_FILL0_wght400_GRAD0_opsz48.svg"> 
<h2 style="color: azure;">Aprendizados</h2>
</div>
<h3 style="color: burlywood; text-align: justify">
Neste projeto, além de colocar em prática os conceitos de React-native tive a oportunidade de usar o <span style="font-size: 20px; color: cornflowerblue">styled-component</span>,<span style="font-size: 20px; color: cornflowerblue"> Async-storage</span>,  assim como o <span style="font-size: 20px; color: cornflowerblue">redux</span>
</h3>

<h3 style="color: azure; line-height: 28px" id="styled">
Coloquei em prática conceitos do <code>Styled-Component</code>.
</h3>

<p style="color: aliceblue">
1- Usar props atravez do <code>Styled-components</code>. 
</p>

```js
export const FinalBar = styled.View`
  position: absolute;
  bottom: 0;
  ${props => props.width? (`width:${props.width}px`) : null };
  border-radius: 50px;
  height: 105px;
  touch-action: none;
`
```
```jsx
<FinalBar width={width}>

```
---
<p style="color: aliceblue">
2- Usar a lib <code>expo-linear-gradient</code> para criar efeitos de gradiente. 
</p>

```js
import {LinearGradient} from "expo-linear-gradient";
<LinearGradient
                    style={{flex:1,flexDirection:'row',
                        justifyContent:"space-between",
                        alignItems:'center',}}
                    colors={['#4740534D','#47405300']}
                    start={{x:0,y:1}}
                    end={{x:1,y:0}}
                >
```
___
<p style="color: aliceblue">
3- Usar o <code>TouchableOpacity</code> para poder estilizar o botão. 
</p>

```js
<TouchableOpacity
                            activeOpacity={0.5}
                            onPress={()=> this.onPress()}
                        >
```
---
<p style="color: aliceblue">
4- Usar o <code>ScrollView</code> para que seja possivel fazer o scroll caso os itens ultrapassem a div. 
</p>

```js
export const ListContainer = styled.ScrollView`
  margin-bottom: 40px;
`
```
```js
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
```
---
<h3 style="color: azure; line-height: 28px" id="storage">
Implementei o <code>Async-Storage</code> para persistir os dados.
</h3>

<p style="color: aliceblue">
1- usei o <code>setItem</code> do <code>AsyncStorage</code> dentro de um try catch usando o <code>JSON.stringfy</code>
para converter o objeto em json e assim criar ou atualizar os dados 
</p>

```jsx
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

```
---

<p style="color: aliceblue">
2- usei o useEffect com uma função capturando as informações do <code>AsyncStorage</code> atravez do <code>getItem</code>
para capturar as informaçoes do <code>AsyncStorage</code> e converti o json em objeto atravez do <code>JSON.stringfy</code>
para poder ser usado no código e passei para o <code>Redux</code> para assim se existir uma todo gravada ele identificar 
e mostrar para o usuario 
</p>

```jsx
useEffect( async ()=>{
const totalParse = await AsyncStorageNative.getItem("todos")
const total = JSON.parse(totalParse)
if (total){
dispatchAddTodo(total);
console.log(total)
}
},[])

```


___

<h3 style="color: azure; line-height: 28px" id="redux">
Coloquei em prática conceitos do <span style="color: cornflowerblue">Redux</span> como 
implementação de <span style="color: cornflowerblue">States</span>,<span style="color: cornflowerblue">Reducer</span> e <span style="color: cornflowerblue">Actions</span>.
</h3>

<p style="color: aliceblue">
1- Implementação do <code>Reducer</code> para poder capturar e manipular atravez das <code>actions</code> os <code>states</code>.
</p>

> ⚠️ É importante passar sempre um estado inicial.

```jsx
import {ADD_TODO, SET_EDITING_TODO, SET_TODO_TEXT, UPDATE_TODO} from "../actions";

const INITIAL_STATE = {
    id: null,
    text: '',
    done:false,
    edit:false
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
            action.todo.edit = true
            return action.todo;
    }
}
export default editingTodoReducer;
```
---
<p style="color: aliceblue">
2- Implementação das <code>Actions</code> que vão ser responsaveis por manipular os states atravez dos reducers.
</p>

```jsx
export const ADD_TODO = 'ADD_TODO';
export  const addTodo = text => ({
    type: ADD_TODO,
    text
});

export const TOGGLE_TODO = 'TOGGLE_TODO';
export  const toggleTodo = todoId => ({
    type: TOGGLE_TODO,
    todoId
})
```
---
<p style="color: aliceblue">
3- Implementação do <code>combineReducers</code> para ter um roteamento entre os <code>reducers</code> de forma individual. 
</p>

```jsx
import {combineReducers} from 'redux'
import todoListReducer from "./todoListReducer";
import editingTodoReducer from "./editingTodoReducer";

const rootReducer = combineReducers({
    todos: todoListReducer,
    editingTodo:editingTodoReducer
});

export default rootReducer;

```
---
<p style="color: aliceblue">
4- Implementação da <code>Store</code> onde ficam todas as informações armazenadas, assim como as funções. 
</p>

```jsx
import {createStore} from "redux";
import rootReducer from "../reducers";
import {devToolsEnhancer} from "redux-devtools-extension";

export const store = createStore(rootReducer, devToolsEnhancer());
```
---
<p style="color: aliceblue">
5- Usar o <code>Provider</code> para ter acesso a os states do Redux. 
</p>

```jsx
export default class TodoApp extends Component {
 render() {
  return (
          <Provider store={store} >
           <Container>
            <Container.Title >To Do List</Container.Title>
            <Container.Subtitle >Organize a sua vida</Container.Subtitle>
            <TodoForm />
            <TodoList />
           </Container>
           <FinalBar width={width}>
            <LinearGradient
                    style={{flex:1}}
                    colors={["transparent","rgba(0,0,0,0.83)","#000000"]}
            />
           </FinalBar>
          </Provider>
```
---

<p style="color: aliceblue">
6- Usar o  mapStateToProps através do <code>connect()</code> para receber o state. 
</p>

```jsx
const mapStateToProps = (state)=>{
    return {
        todo:state.editingTodo
    }
}

export default connect(
mapStateToProps, 
{
    dispatchAddTodo: addTodo,
   
})(TodoForm);
```
---
<p style="color: aliceblue">
7- Usar o dispatch através do <code>connect()</code> modificar o state. 
</p>

```jsx
export default connect(null, {
 dispatchAddTodo: addTodo
})(TodoForm);
```
---

<div style="display: flex; justify-content: center; align-items: center" id="author">
<img style="height:35px ; margin-top:25px; filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(60deg) brightness(98%) contrast(107%);" src="./assets/workspace_premium_FILL0_wght400_GRAD0_opsz48.svg"> 
<h2 style="color: azure;">Autor</h2>
</div>

- Linkdin - [Marco Tullio Franca](https://www.linkedin.com/in/marco-franca/)
- Frontend Mentor - [@MarcoFranca](https://www.frontendmentor.io/profile/MarcoFranca)
