import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {IMAGE_URL} from '../constant/general';

const CardMovie = props => (
  <TouchableOpacity
    onPress={props.handleNavigation}
    style={{
      // backgroundColor: 'skyblue',
      marginVertical: 5,
      borderRadius: 5,
      padding: 5,
      width: 150,
      height: 200,
      marginHorizontal: 10,
    }}>
    <Image
      source={{uri: `${IMAGE_URL}${props.movie.backdrop_path}`}}
      style={{width: 150, height: 200, borderRadius: 5}}
    />
    {/* <Text style={{fontWeight: 'bold', fontSize: 18, marginVertical: 5}}>
      {props.movie.title}
    </Text>
    <Text>{props.movie.overview}</Text> */}
  </TouchableOpacity>
);

export default CardMovie;
