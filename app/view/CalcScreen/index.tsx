import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../../redux/actions/action';
import styles from './style';

interface homeProps {
  navigation: any;
}

const Home = (props: homeProps) => {
  const {navigation} = props;

  const dispatch = useDispatch();

  const count = useSelector((store: any) => store.count.count);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title_text}>Redux Demo</Text>
        <Text style={styles.counter_text}>{count}</Text>

        <TouchableOpacity onPress={handleIncrement} style={styles.btn}>
          <Text style={styles.btn_text}> Increment </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleDecrement}
          style={{...styles.btn, backgroundColor: '#6e3b3b'}}>
          <Text style={styles.btn_text}> Decrement </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Home;
