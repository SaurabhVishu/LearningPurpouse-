import React from 'react';
import {Provider} from 'react-redux';
import {store} from '././app/redux/store';
import MyStack from './app/routes/stackNavigation';
// import Home from './app/view/CalcScreen';
// import HomeScreen from './app/view/HomeScreen';
// import LanguageSupport from './app/view/LocalizationDemo';
// import RandomScreen from './app/view/RandomScreen';

const App = () => {
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
};
export default App;
