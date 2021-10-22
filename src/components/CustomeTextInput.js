import React from 'react';
import {Text, View, TextInput} from 'react-native';

const CustomTextInput = props => {
  return (
    <View style={{marginVertical: 10}}>
      <Text style={{marginVertical: 5}}>{props.title}</Text>
      {/* <Text style={{marginVertical:5}}>{props.description}</Text> */}
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: '100%',
        }}
        onChangeText={text => onChangeText(text)}
        value={'value'}
      />
    </View>
  );
};

export default CustomTextInput;
