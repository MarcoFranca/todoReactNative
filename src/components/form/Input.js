import React from 'react';
import {InputForm} from "./TodoFormStyle";

const Input = ({ onchangeText, value}) => (
        <InputForm
            onChangeText={onchangeText}
            value={value}
            placeholder='Digite a sua tarefa'
        />
    );

export default Input;
