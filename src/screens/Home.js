import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  ActivityIndicator,
  ImageBackground,
  SectionList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/core';
import CardMovie from '../components/CardMovie';
import SectionMovie from '../components/SectionMovie';
import {color} from '../styles/default';
import Config from 'react-native-config';

const Home = props => {
  const navigation = useNavigation();
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getMovie('top_rated');
    getMovie('popular');
    getMovie('upcoming');
  }, []);

  const getMovie = async section => {
    let url = `/movie/${section}?api_key=${Config.API_KEY}&language=en-US&page=1`;
    try {
      const response = await axios.get(url);
      if (section == 'popular') {
        setPopular(response.data.results);
      } else if (section == 'top_rated') {
        setTopRated(response.data.results);
      } else if (section == 'upcoming') {
        setUpcoming(response.data.results);
      }
    } catch (e) {
      console.log('error while get popular movie', e);
    }
  };

  const movies = [
    {
      section: 'Upcoming Movie',
      data: upcoming,
    },
    {
      section: 'Popular Movie',
      data: popular,
    },
    {
      section: 'Top Rated Movie',
      data: topRated,
    },
  ];

  const renderMapPerSection = movies.map((movie, i) => {
    return (
      <SectionMovie
        key={i}
        title={movie.section}
        data={
          searchText == 0
            ? movie.data
            : movie.data.filter(mov =>
                mov.title.toLowerCase().includes(searchText),
              )
        }
        navigation={() => navigation.navigate('Detail Movie')}
      />
    );
  });
  return (
    <View
      style={{
        justifyContent: 'flex-start',
        width: '100%',
        backgroundColor: color.black,
        flex: 1,
        padding: 15,
        paddingHorizontal: 20,
        height: 180,
      }}>
      <TextInput
        placeholder="Search movie by title"
        value={searchText}
        onChangeText={text => setSearchText(text)}
        style={{
          height: 50,
          backgroundColor: '#FFF',
          borderRadius: 5,
          padding: 5,
        }}
      />
      {renderMapPerSection}
    </View>
  );
};

export default Home;
