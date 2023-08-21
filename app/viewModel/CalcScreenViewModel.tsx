import React from 'react';
import Home from '../view/CalcScreen';
import {useDispatch, useSelector} from 'react-redux';
import {globalStore} from '../redux/store';
import {State} from 'react-native-gesture-handler';
import {sendGetRequest} from '../network/network';
import {APIConstants} from '../config/apiConstant';
import {saveMasterData} from '../redux/actions/FirseApiCallaction';
import {saveSecondApiData} from '../redux/actions/SecondApiCallAction';
import {saveThirdApiData} from '../redux/actions/ThirdApiCallAction';
interface HomeViewModelprops {
  navigation: any;
}

const CalcScreenViewModel = (props: HomeViewModelprops) => {
  const dispatch = useDispatch();

  const SecondApiData = useSelector(state => state.secondApidata);

  const getMasterData = async (data: string) => {
    const res = await sendGetRequest(data);
    dispatch(saveMasterData(res));
    return res;
  };
  const getSecondApiData = async (data: string) => {
    const res = await sendGetRequest(data);
    dispatch(saveSecondApiData(res));
    return res;
  };

  // const getThirddApiData = async (data: string) => {
  //   const res = await sendGetRequest(data);
  //   dispatch(saveThirdApiData(res));
  //   return res;
  // };

  const firstApiClick = () => {
    getMasterData('/albums');
  };

  const secondApiClick = () => {
    getSecondApiData('/todos');
  };

  const {navigation} = props;
  return (
    <Home
      {...{
        navigation,
        firstApiClick,
        secondApiClick,
      }}
    />
  );
};

export default CalcScreenViewModel;
