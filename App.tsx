import React from 'react';
import {Provider} from 'react-redux';

import MyStack from './app/routes/stackNavigation';
import {globalStore} from './app/redux/store';

// import MyStack from './app/routes/stackNavigation';
// import { globalStore } from './app/redux/store';

// import Home from './app/view/CalcScreen';
// import HomeScreen from './app/view/HomeScreen';
// import LanguageSupport from './app/view/LocalizationDemo';
// import RandomScreen from './app/view/RandomScreen';

const App = () => {
  return (
    <Provider store={globalStore}>
      <MyStack />
    </Provider>
  );
};
export default App;
