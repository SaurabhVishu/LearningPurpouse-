import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

// import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../../redux/actions/action';
import styles from './style';

import FirstApiCall from '../../redux/reducers/FirstApiReducer';
import {RootState} from '../../redux/store';

interface homeProps {
  navigation: any;
  firstApiClick: any;
  secondApiClick: any;
}

const Home = (props: homeProps) => {
  const {navigation} = props;

  // const Data: any = useSelector((state: RootState) => state.firstApidata);

  // console.log('data is =====>', Data);

  // const count = useSelector((store: any) => store.count.count);

  // const handleIncrement = () => {};

  // const handleDecrement = () => {
  //   dispatch(decrement());
  // };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title_text}>offline Api call </Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => props.firstApiClick()}>
          <Text style={styles.btn_text}> First Api </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => props.secondApiClick()}>
          <Text style={styles.btn_text}> Second Api</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btn_text}>Third Api</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(Home)}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: '900',
              marginVertical: 15,
            }}>
            Move to home page
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Home;
