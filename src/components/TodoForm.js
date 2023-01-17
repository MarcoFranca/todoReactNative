import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Input from "./Input";
import {connect} from "react-redux";
import {addTodo} from "../redux/actions";

class TodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onChangeText(text){
        this.setState({
            text
        })
    }

    onPress(){
        this.props.dispatchAddTodo(this.state.text);
        this.setState({ text:''})
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.containerInput}>
                    <Input
                        value={this.state.text}
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

export default connect(null, {
    dispatchAddTodo: addTodo
})(TodoForm);
