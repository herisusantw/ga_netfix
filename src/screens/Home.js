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
import {IMAGE_URL, API_URL, API_KEY} from '../constant/general';
import axios from 'axios';
import {useNavigation} from '@react-navigation/core';
import CardMovie from '../components/CardMovie';

const Home = props => {
  const navigation = useNavigation();
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    getPopularMovie();
    getTopRatedMovie();
  }, []);

  const getPopularMovie = async () => {
    let url = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    try {
      const response = await axios.get(url);
      setPopular(response.data.results);
    } catch (e) {
      console.log('error while get popular movie', e);
    }
  };

  const getTopRatedMovie = async () => {
    let url = `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    try {
      const response = await axios.get(url);
      setTopRated(response.data.results);
    } catch (e) {
      console.log('error while get top_rated movie', e);
    }
  };

  const renderMovie = ({item}) => {
    return (
      <CardMovie
        movie={item}
        handleNavigation={() =>
          navigation.navigate('Detail Movie', {movie: item})
        }
      />
    );
  };

  const data = [
    {
      section: 'Popular',
      movie: popular,
    },
    {
      section: 'Top Rated',
      movie: topRated,
    },
  ];

  const renderSectionMovie = sectionList => {
    data.map(datum => (
      <View>
        <Text>{datum.section}Movie</Text>
        <FlatList
          horizontal={true}
          data={datum.movie}
          renderItem={renderMovie}
          keyExtractor={(item, index) => index}
        />
      </View>
    ));
  };

  return (
    <View style={styles.container} horizontal={true}>
      <View>
        <Text>Popular Movie</Text>
        <FlatList
          horizontal={true}
          data={popular}
          renderItem={renderMovie}
          keyExtractor={(item, index) => index}
        />
      </View>
      <View>
        <Text>Top Rated Movie</Text>
        <FlatList
          horizontal={true}
          data={topRated}
          renderItem={renderMovie}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
    backgroundColor: 'white',
    // flexDirection: 'row',
    // marginHorizontal: 5,
    // flexWrap: 'wrap',
  },
});

export default Home;
