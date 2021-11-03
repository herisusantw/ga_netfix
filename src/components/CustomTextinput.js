import React from 'react';
import {Text, View, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const CustomTextInput = props => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <View style={{marginVertical: 5}}>
      <Text style={{marginVertical: 10, fontSize: 18, color: 'white'}}>
        {props.label}
      </Text>
      <TextInput
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor="white"
        style={{
          width: '100%',
          borderWidth: 0.5,
          borderColor: 'grey',
          borderRadius: 5,
          padding: 5,
          height: 50,
          paddingHorizontal: 10,
        }}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
      />
      {props.label.toLowerCase().includes('password') && (
        <Feather
          onPress={() => setIsOpen(!isOpen)}
          name={isOpen ? 'eye-off' : 'eye'}
          size={20}
          color="black"
          style={{position: 'absolute', top: 60, right: 20}}
        />
      )}
    </View>
  );
};

export default CustomTextInput;
