import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TextInput, Button} from 'react-native';
import {color, style} from '../styles/default';
import CustomButton from '../components/CustomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../styles/register';
import CustomTextInput from '../components/CustomTextInput';

const Register = props => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/netflix_logo.png')}
        style={styles.logo}
      />
      {/* <Text style={styles.signIn}>Sign Up</Text> */}
      <View style={styles.subContainer}>
        <CustomTextInput label="Username" placeholder="Input your username." />
        <CustomTextInput label="Password" placeholder="Input your password." />
        <CustomTextInput
          label="Confirm Password"
          placeholder="Confirm your password."
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton title="Register" isActive={true} />
        <View style={styles.underBtnContainer}>
          <View
            onPress={() => props.navigation.navigate('Login')}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <AntDesign
              name="left"
              size={20}
              color={color.white}
              style={{marginRight: 5}}
            />
            <Text style={styles.underBtnText}>Back</Text>
          </View>

          <Text style={styles.underBtnText}>Need help ?</Text>
        </View>
      </View>
    </View>
  );
};
export default Register;
