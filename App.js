import React from 'react';
import RootStack from './src/screens/RootStack';
import Config from 'react-native-config';
import axios from 'axios';

axios.defaults.baseURL = Config.API_URL;

const App = () => {
  return <RootStack />;
};

export default App;
