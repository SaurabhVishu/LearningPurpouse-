import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './style';

class CounterApp extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
      num: 1,
    };
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };
  increaseNum = () => {
    this.setState(prevState => ({
      num: prevState.num + 5,
    }));
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        {/* <Text>Count: {this.state.count}</Text> */}
        {/* <Button title="Increment" onPress={this.incrementCount} />
        <Button title="Increment" onPress={this.increaseNum} /> */}
        <View>
          <View style={styles.container}>
            <View style={styles.petal} />
            <View style={[styles.petal, {transform: [{rotate: '45deg'}]}]} />
            <View style={[styles.petal, {transform: [{rotate: '90deg'}]}]} />
            <View style={[styles.petal, {transform: [{rotate: '135deg'}]}]} />
            <View style={styles.center} />
          </View>
        </View>
      </View>
    );
  }
}

export default CounterApp;
