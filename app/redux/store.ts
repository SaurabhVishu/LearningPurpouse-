import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';

import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FirstApiCallReducer from './reducers/FirstApiReducer';
import SecondApiCallReducer from './reducers/SecondApiReducer';
import ThirdApiCallReducer from './reducers/ThirdApiReducer';

const middleware = applyMiddleware(thunk);

const reducers = combineReducers({
  firstApidata: FirstApiCallReducer,
  secondApidata: SecondApiCallReducer,
  thirdApidata: ThirdApiCallReducer,
});

//* white list only those reducers which needs to be stored locally.
const persistConfig = {
  key: '@successive',
  storage: AsyncStorage,
  whitelist: ['userAccount'],
};

const presistedReducer = persistReducer(persistConfig, reducers);
const globalStore = createStore(presistedReducer, middleware);
const persistor = persistStore(globalStore);
export type RootState = ReturnType<typeof reducers>;
export type GlobalRootState = ReturnType<typeof reducers>;

export {persistor, globalStore};
