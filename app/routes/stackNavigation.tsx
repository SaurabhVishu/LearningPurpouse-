import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CalcScreenViewModel,
  HomeScreenViewModel,
  RandomScreenViewModel,
} from '../viewModel';
import {ActivityIndicator} from 'react-native';
import DetailViewModel from '../viewModel/DetailsViewModel';
const linking = {
  prefixes: ['https://'],
  config: {
    initialRouteName: 'Calculate',
    screens: {
      Home: {
        path: 'home',
      },
      RandomScreen: {
        path: 'RandomScreen',
      },
      Calculate: {
        path: 'Calculate',
      },
    },
  },
};

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Details"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreenViewModel} />
        <Stack.Screen name="RandomScreen" component={RandomScreenViewModel} />
        <Stack.Screen name="Calculate" component={CalcScreenViewModel} />
        <Stack.Screen name="Details" component={DetailViewModel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack;
