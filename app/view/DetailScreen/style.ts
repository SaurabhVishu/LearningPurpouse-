import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'powderblue',
    padding: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  container: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    borderRadius: 300,
    padding: 10,
    width: 75,
    height: 75,
    backgroundColor: 'pink',
    borderWidth: 1,
    marginVertical: 10,
  },
  petal: {
    width: 40,
    height: 80,
    backgroundColor: 'pink',
    borderRadius: 20,
    position: 'absolute',
    borderColor: 'black',
    borderWidth: 0.5,
  },
  center: {
    width: 40,
    height: 40,
    backgroundColor: 'yellow',
    borderRadius: 20,
    position: 'absolute',
  },
});
export default styles;
