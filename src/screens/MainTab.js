import * as React from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from './Home';
import Download from './Download';
import Reviews from './Reviews';
import ComingSoon from './ComingSoon';
import DetailMovie from './DetailMovie';

const HomeStack = createNativeStackNavigator();
const DownloadStack = createNativeStackNavigator();
const ReviewsStack = createNativeStackNavigator();
const ComingSoonStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{headerShown: false}}>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Detail Movie" component={DetailMovie} />
  </HomeStack.Navigator>
);

const DownloadStackScreen = () => (
  <DownloadStack.Navigator screenOptions={{headerShown: false}}>
    <DownloadStack.Screen name="Download" component={Download} />
  </DownloadStack.Navigator>
);

const ReviewsStackScreen = () => (
  <ReviewsStack.Navigator screenOptions={{headerShown: false}}>
    <ReviewsStack.Screen name="Reviews" component={Reviews} />
  </ReviewsStack.Navigator>
);

const ComingSoonStackScreen = () => (
  <ComingSoonStack.Navigator screenOptions={{headerShown: false}}>
    <ComingSoonStack.Screen name="ComingSoon" component={ComingSoon} />
  </ComingSoonStack.Navigator>
);

const MainTab = () => (
  <Tab.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="Home"
    activeColor="#fff"
    inactiveColor="grey">
    <Tab.Screen
      name="Home Stack"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: 'black',
        tabBarIcon: ({color}) => (
          <MaterialIcons name="home-filled" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Download Stack"
      component={DownloadStackScreen}
      options={{
        tabBarLabel: 'Download',
        tabBarColor: 'black',
        tabBarIcon: ({color}) => (
          <MaterialIcons name="backup" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Reviews Stack"
      component={ReviewsStackScreen}
      options={{
        tabBarLabel: 'Review',
        tabBarColor: 'black',
        tabBarIcon: ({color}) => (
          <MaterialIcons name="comment" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="ComingSoon Stack"
      component={ComingSoonStackScreen}
      options={{
        tabBarLabel: 'Coming Soon',
        tabBarColor: 'black',
        tabBarIcon: ({color}) => (
          <MaterialIcons name="file-upload" color={color} size={25} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTab;
