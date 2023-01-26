import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Input from "./Input";
import {connect} from "react-redux";
import {LinearGradient} from "expo-linear-gradient";
import {addTodo, setTodoText, updateTodo} from "../../redux/actions";
import {ButtonIcon, Container} from "./TodoFormStyle";

class TodoForm extends Component {
    onChangeText(text){
        this.props.dispatchSetTodoText(text)
    }

    onPress(){
        const {todo} = this.props;
        if (todo.text){
            if(todo.id)
                return this.props.dispatchUpdateTodo(todo)
            this.props.dispatchAddTodo(this.props.todo.text);
        }
    }

    render() {

        return (
            <Container>
                <LinearGradient
                    style={{flex:1,flexDirection:'row',
                        justifyContent:"space-between",
                        alignItems:'center',}}
                    colors={['#4740534D','#47405300']}
                    start={{x:0,y:1}}
                    end={{x:1,y:0}}
                >

                    <Container.Input>
                        <Input
                            value={this.props.todo.text}
                            onchangeText={text => this.onChangeText(text)} />
                    </Container.Input>
                    <View>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={()=> this.onPress()}
                        >
                            <ButtonIcon
                                source={!this.props.todo.id ? require('../../assets/images/Add.png')
                                    : require('../../assets/images/updated.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </Container>
        );
    }
}


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
        dispatchSetTodoText: setTodoText,
        dispatchAddTodo: addTodo,
        dispatchUpdateTodo: updateTodo,

    }
)(TodoForm);
