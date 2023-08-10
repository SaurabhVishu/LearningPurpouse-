import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from '././app/redux/store';
import MyStack from './app/routes/stackNavigation';
import {Linking} from 'react-native';
import CounterApp from './app/view/DetailScreen';

const App = () => {
  useEffect(() => {
    var url = Linking.getInitialURL()
      .then(url => {
        if (url) {
          Linking.openURL(url);
        }
      })
      .catch(err => console.log('An error occurred', err));
  }, []);
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
};
export default App;
