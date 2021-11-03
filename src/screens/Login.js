import React, {useState, useEffect} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {color, style} from '../styles/default';
import CustomButton from '../components/CustomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/login';
import CustomTextInput from '../components/CustomTextInput';

const Login = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = async () => {
    // const res = await dispatch(loginAction({email, password}));
    // if (res.token) {
    //   await AsyncStorage.setItem('token', res.token);
    //   props.navigation.navigate('MainTab');
    // } else {
    //   console.log('Login error');
    // }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/netflix_logo.png')}
        style={styles.logo}
      />
      <View style={styles.subContainer}>
        <Text style={styles.signIn}>Sign In</Text>
        <CustomTextInput label="Username" placeholder="Input your username." />
        <CustomTextInput label="Password" placeholder="Input your password." />
      </View>
      <View style={styles.buttonContainer}>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <CustomButton title="Sign In" isActive={true} />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.isNew}>
          New to Netflix ?{' '}
          <Text
            style={styles.signUp}
            onPress={() =>
              props.navigation.navigate('Register', {
                username: 'John Doe',
              })
            }>
            Sign up now.
          </Text>
        </Text>
      </View>
    </View>
  );
};
export default Login;
