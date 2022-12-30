import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Input from "./Input";


class TodoForm extends Component {

    constructor(props) {
        super(props);
        this.state={
            text:''
        }
    }

    onChangeText(text){
        this.setState({
            text
        })
    }

    onPress(){
        console.log(this.state.text)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerInput}>
                    <Input
                        value={this.state.value}
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

export default TodoForm;

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
})
