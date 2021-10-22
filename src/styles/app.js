import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  box: {
    height: 100,
    width: '100%',
    borderColor: 'red',
    borderWidth: 1,
    padding: 15,
  },
});

export default styles;
