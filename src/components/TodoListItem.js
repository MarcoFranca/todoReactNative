import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const TodoListItem = ({todo, onPressTodo}) => (
        <TouchableOpacity
            onPress={onPressTodo}
        >
            <View style={styles.line}>
                <Text style={[
                    styles.lineText,
                    todo.done? styles.lineThrough : null
                ]}>
                    {todo.text}
                </Text>
            </View>
        </TouchableOpacity>
    )

export default TodoListItem;

const styles = StyleSheet.create({
    line:{
        flexDirection: "row",
        height:60,
        elevation:4,
        backgroundColor: '#e2f9ff',
        alignItems: 'center',
        // marginTop:15,
        marginBottom:10,
    },
    lineText:{
        flex: 7,
        fontSize:20,
        paddingLeft:15,
    },
    avatar:{
        flex:1,
        borderRadius:50,
        aspectRatio:1,
        marginLeft:15,
    },
    lineThrough:{
        textDecorationLine:"line-through",
    }
})
