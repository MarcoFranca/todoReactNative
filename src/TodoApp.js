import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import TodoForm from "./components/form/TodoForm";
import {Provider} from "react-redux";
import TodoList from "./components/TodoList";
import {store} from "./redux/store/store";
import {LinearGradient} from "expo-linear-gradient";
import {Container, FinalBar} from "./TodoAppStyle";


const {width} = Dimensions.get('window')
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
                        colors={["transparent","#000000"]}
                        start={{x: 0.5, y: 0}}
                        end={{x:0.5, y:1}}
                        // locations={[.5,0.7]}
                    />
                </FinalBar>
            </Provider>
        );
    }
}

