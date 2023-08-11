import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

interface RandomScreenProps {
  navigation: any;
  handleFirstApiCall: any;
  handleSecondApiCall: any;
  handleThirdApiCall: any;
}

const RandomScreen = (props: RandomScreenProps) => {
  const {navigation} = props;
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => props.handleFirstApiCall()}>
        <Text style={styles.title}>First Api Data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => props.handleSecondApiCall()}>
        <Text style={styles.title}>Second Api Data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => props.handleThirdApiCall()}>
        <Text style={styles.title}>Third Api Data</Text>
      </TouchableOpacity>
    </View>
  );
};
export default RandomScreen;
