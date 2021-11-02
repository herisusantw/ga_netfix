import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './Login';
import Register from './Register';
import MainTab from './MainTab';

const Stack = createNativeStackNavigator();

const RootStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="MainTab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootStack;
