import React from 'react';

import {StyleSheet, TextInput} from 'react-native';

const Input = ({ onchangeText, value}) => (
        <TextInput
            onChangeText={onchangeText}
            value={value}
            style={styles.input}
            underlineColorAndroid="#000"
        />
    );

const styles = StyleSheet.create({
    input:{
        paddingLeft:15,
        paddingBottom:15,

    }
});

export default Input;
