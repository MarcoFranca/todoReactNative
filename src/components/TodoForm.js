import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Input from "./Input";
import {connect} from "react-redux";
import {LinearGradient} from "expo-linear-gradient";
import {addTodo, setTodoText, updateTodo} from "../redux/actions";

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
            <LinearGradient
                style={styles.container}
                colors={['#4740534D','#47405300']}
                start={{x:0,y:1}}
                end={{x:1,y:0}}
            >

                <View style={styles.containerInput}>
                    <Input
                        style={styles.iputStyle}
                        value={this.props.todo.text}
                        onchangeText={text => this.onChangeText(text)} />
                </View>
                <View style={styles.containerButton}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={()=> this.onPress()}
                        title={!this.props.todo.id ? "Add" : "Update"}
                    >
                        <Image
                            source={require('../assets/images/Add.png')}
                            style={styles.buttonImageIconStyle}/>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:12,
        paddingRight:12,
        height:46,
        borderWidth: 2,
        borderRadius:10,
        marginLeft: 24,
        marginRight: 24,
        marginTop:8,
    },
    iputStyle:{
        color:"#ffffff"

    },
    containerInput:{
        alignSelf:"center",
        height:38,
        marginTop:16,
    },
    containerButton:{


    },
    buttonImageIconStyle: {
        height: 30,
        width: 30,
    },
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
        dispatchSetTodoText: setTodoText,
        dispatchAddTodo: addTodo,
        dispatchUpdateTodo: updateTodo,

    }
)(TodoForm);
