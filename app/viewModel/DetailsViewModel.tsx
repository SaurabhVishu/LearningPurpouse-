import React from 'react';
import CounterApp from '../view/DetailScreen';

interface DetailsViewModelprops {
  navigation: any;
}

const DetailViewModel = (props: DetailsViewModelprops) => {
  const {navigation} = props;
  return <CounterApp />;
};

export default DetailViewModel;
