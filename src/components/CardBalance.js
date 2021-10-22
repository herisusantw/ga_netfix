import React from 'react';
import {Text, View, Image} from 'react-native';
import {IMAGES} from '../constant';

const CardBalance = props => (
  <View style={{padding: 5}}>
    <Text>Your balance</Text>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 36, fontWeight: 'bold'}}>{props.title}</Text>
      <Image
        source={IMAGES.image1}
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          borderWidth: 1,
          borderColor: 'white',
        }}
      />
    </View>
  </View>
);

export default CardBalance;
