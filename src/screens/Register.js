import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Text, View} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextinput';

const Register = props => {
  const navigation = useNavigation();
  console.log('props:', props);
  const {greeting} = props.route.params;
  const [userName, setUserName] = useState('');
  const [password, setPassword] = React.useState('');
  const [confirmedPassword, setConfirmedPassword] = React.useState('');

  return (
    <View
      style={{justifyContent: 'center', flex: 1, width: '100%', padding: 15}}>
      <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
        {greeting}
      </Text>
      <CustomTextInput
        label="Username"
        placeholder="Please input your username!"
        value={userName}
        onChangeText={text => setUserName(text)}
        secureTextEntry={false}
      />
      <CustomTextInput
        label="Password"
        placeholder="Please input your password!"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      <CustomTextInput
        label="Confirm Password"
        placeholder="Please input your password!"
        value={confirmedPassword}
        onChangeText={text => setConfirmedPassword(text)}
        secureTextEntry={true}
      />
      <CustomButton
        title="Sign Up"
        isActive={false}
        onPressButton={() => navigation.goBack()}
      />
    </View>
  );
};

export default Register;
