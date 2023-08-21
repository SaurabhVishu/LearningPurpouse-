import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';

import styles from './style';

interface HomeScreenProps {
  navigation: any;
  Homedata: any;
}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.mainContainer} />
    </SafeAreaView>
  );
};
export default HomeScreen;

// return (
//   <View>
//     <Text>{item.id}</Text>
//   </View>
// );
