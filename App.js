import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import styles from './src/styles/app';
import CardBalance from './src/components/CardBalance';
import {WORDS} from './src/constant';

const App = () => {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  return (
    <View style={{padding: 5}}>
      <TextInput
        style={{borderWidth: 1, borderColor: 'grey'}}
        value={email}
        placeholder="Input your email..."
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={{borderWidth: 1, borderColor: 'grey'}}
        value={password}
        placeholder="Input your password..."
        onChangeText={text => setPassword(text)}
      />
    </View>
  );
};

export default App;
