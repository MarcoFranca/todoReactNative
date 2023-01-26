import React from 'react';
import {InputForm} from "./TodoFormStyle";

const Input = ({ onchangeText, value}) => (
        <InputForm
            onChangeText={onchangeText}
            value={value}
            placeholder='Digite a sua tarefa'
            placeholderTextColor="rgba(255, 255, 255, 0.65)"
        />
    );

export default Input;
