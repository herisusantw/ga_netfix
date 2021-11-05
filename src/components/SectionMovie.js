import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {color} from '../styles/default';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IMAGE_URL} from '../constant/general';

const SectionMovie = props => {
  const renderPoster = ({item}) => {
    return (
      <TouchableOpacity
        onPress={props.navigation}
        style={{
          // justifyContent: 'center',
          height: 180,
          width: 115,
        }}>
        <Image
          source={{
            uri: `${IMAGE_URL}${item.poster_path}`,
          }}
          style={styles.poster}
          horizontal
        />
        {/* <Text style={{color: '#FFF', fontSize: 16, position: 'absolute'}}>
          {item.title}
        </Text> */}
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={styles.title}>{props.title}</Text>
        <TouchableOpacity onPress={() => props.navigation()}>
          <AntDesign name="right" size={15} color={color.white} />
        </TouchableOpacity>
      </View>

      {props.data.length > 0 ? (
        <FlatList
          data={props.data}
          renderItem={renderPoster}
          keyExtractor={(item, index) => index}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: color.white, fontSize: 16}}>
            Opps...{props.title} not found!
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    justifyContent: 'flex-start',
    marginVertical: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: color.white,
    marginVertical: 5,
    textAlign: 'left',
  },
  poster: {
    width: 115,
    height: 150,
    marginVertical: 5,
    marginRight: 10,
    borderRadius: 5,
    resizeMode: 'cover',
  },
});

export default SectionMovie;
