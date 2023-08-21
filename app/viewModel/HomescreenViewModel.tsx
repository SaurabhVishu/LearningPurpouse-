import React from 'react';
import HomeScreen from '../view/HomeScreen';
import {useSelector} from 'react-redux';
interface HomeViewModelprops {
  navigation: any;
}

const HomeScreenViewModel = (props: HomeViewModelprops) => {
  const Homedata = useSelector(state => state.secondApidata);
  console.log('Homedata======>', Homedata);
  const {navigation} = props;
  return (
    <HomeScreen
      {...{
        navigation,
        Homedata,
      }}
    />
  );
};

export default HomeScreenViewModel;
