import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const TodoListItem = ({todo, onPressTodo, onLongPressTodo, deleteTodo}) => (
        <TouchableOpacity
            onPress ={onPressTodo}
            onLongPress = {onLongPressTodo}
        >
            <View style={styles.line}>
                <Text style={[
                    styles.lineText,
                    todo.done? styles.lineThrough : null
                ]}>
                    {todo.text}
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={deleteTodo}
                >
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )

export default TodoListItem;

const styles = StyleSheet.create({
    line:{
        flexDirection: "row",
        height:60,
        elevation:4,
        backgroundColor: '#490bbd',
        alignItems: 'center',
        marginLeft: 5,
        marginRight:5,
        marginBottom:5,
        marginTop:5,
        paddingRight:5,
    },
    lineText:{
        flex: 7,
        fontSize:20,
        fontWeight:"bold",
        paddingLeft:15,
        color:'#ffffff'
    },
    lineThrough:{
        textDecorationLine:"line-through",
        textDecorationStyle: "solid",
        color: "rgba(255,255,255,0.47)"
    },
    button:{
        paddingTop: 10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        borderRadius: 20,
        backgroundColor: '#cc2f3f',
    },
    buttonText:{
        fontSize:20,
        fontWeight:"bold",
        color:'#ffffff'
    }
})
