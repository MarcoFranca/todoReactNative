import React from "react";
import { TouchableOpacity} from "react-native";
import {BtnContainer, ListItem, TextContainer} from "./TodoListStyle";
import {LinearGradient} from "expo-linear-gradient";
import {ButtonIcon} from "../form/TodoFormStyle";

const TodoListItem = ({todo, onPressTodo, editTodo, deleteTodo}) => (
    <LinearGradient
        style={{flex:1, borderRadius:22,marginLeft: 24,marginRight: 24, marginBottom:14}}
        colors={todo.edit?['#9A4DFF','#F600DD']:todo.done?['#00578C','#00578C']:['#9A4DFF','#5EEBFF']}
    >
        <ListItem
            onPress ={onPressTodo}
        >
            <TextContainer >
                <LinearGradient
                    style={{flex:1, height:46, borderRadius:22,flexDirection:'row',
                        justifyContent:"space-between",
                        alignItems:'center',}}
                    colors={['#4740534D','#47405300']}
                    start={{x:0,y:1}}
                    end={{x:1,y:0}}
                >
                    <TextContainer.text  done={todo.done}>
                        {todo.text}
                    </TextContainer.text>
                    <BtnContainer>
                        <TouchableOpacity
                            onPress={editTodo}
                        >
                            <ButtonIcon source={todo.edit?require('../../assets/images/editPurple.png'):todo.done?require('../../assets/images/editBlue.png'):require('../../assets/images/edit.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={deleteTodo}
                        >
                            <ButtonIcon source={todo.edit?require('../../assets/images/DeletPurple.png'):todo.done?require('../../assets/images/DeletBlue.png'):require('../../assets/images/Delet.png')}/>
                        </TouchableOpacity>
                    </BtnContainer>
                </LinearGradient>
            </TextContainer>
        </ListItem>
    </LinearGradient>
)

export default TodoListItem;

