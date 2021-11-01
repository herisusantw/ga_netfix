import {useNavigation} from '@react-navigation/core';
import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextinput';

const Login = props => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = React.useState('');
  const [confirmedPassword, setConfirmedPassword] = React.useState('');
  const getMovie = () => {
    console.log('test');
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <View
      style={{justifyContent: 'center', flex: 1, width: '100%', padding: 15}}>
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
      <CustomButton
        title="Register"
        isActive={true}
        onPressButton={() =>
          navigation.navigate('Register', {
            greeting: `Hello, ${userName}`,
          })
        }
      />
    </View>
  );
};

export default Login;
