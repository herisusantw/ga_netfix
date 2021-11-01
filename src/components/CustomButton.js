import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const CustomButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPressButton}
      style={{
        height: 50,
        width:
          props.size == 'small'
            ? '30%'
            : props.size == 'medium'
            ? '60%'
            : '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: props.isActive ? 'red' : 'gray',
      }}>
      <Text
        style={{
          fontSize: 16,
          color: '#fff',
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
