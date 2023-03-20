import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CalcScreenViewModel,
  HomeScreenViewModel,
  RandomScreenViewModel,
} from '../viewModel';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Calculate"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreenViewModel} />
        <Stack.Screen name="RandomScreen" component={RandomScreenViewModel} />
        <Stack.Screen name="Calculate" component={CalcScreenViewModel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack;
