import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Input from "./Input";
import {connect} from "react-redux";
import {addTodo, setTodoText} from "../redux/actions";
class TodoForm extends Component {
    onChangeText(text){
        this.props.dispatchSetTodoText(text)
    }

    onPress(){
        this.props.dispatchAddTodo(this.props.todo.text);
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.containerInput}>
                    <Input
                        value={this.props.todo.text}
                        onchangeText={text => this.onChangeText(text)} />
                </View>
                <View style={styles.containerButton}>
                    <Button
                        onPress={()=> this.onPress()}
                        title="Add"
                    />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    containerInput:{
        flex:4,
    },
    containerButton:{
        flex:1,
    }
});

// const mapDispatchToProps = dispatch =>{
//     return {
//         dispatchAddTodo: text => dispatch(addTodo(text))
//     }
// }
const mapStateToProps = (state)=>{
    return {
        todo: state.editingTodo
    }
}
export default connect(
    mapStateToProps,
    {
    dispatchAddTodo: addTodo,
    dispatchSetTodoText: setTodoText
}
)(TodoForm);
