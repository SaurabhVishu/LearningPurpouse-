import React, {useState} from 'react';
import RandomScreen from '../view/RandomScreen';
import {useDispatch, useSelector} from 'react-redux';
import {sendGetRequest} from '../network/network';
import {saveMasterData} from '../redux/actions/FirseApiCallaction';
import {saveSecondApiData} from '../redux/actions/SecondApiCallAction';
import {saveThirdApiData} from '../redux/actions/ThirdApiCallAction';
import {APIConstants} from '../config/apiConstant';
import NetInfo from '@react-native-community/netinfo';

interface RandomViewModelProps {
  navigation: any;
}

const RandomScreenViewModel = (props: RandomViewModelProps) => {
  const {navigation} = props;
  const [error, setError] = useState(null);
  console.log('Error msg is ======>', error);
  const dispatch = useDispatch();
  const FirstApiData = useSelector(state => state.firstApidata);
  const SecondApiData = useSelector(state => state.secondApidata);
  const ThirdApiData = useSelector(state => state.thirdApidata);

  console.log('First Api clickData=====>', FirstApiData);
  console.log('Second Api clickData=====>', SecondApiData);
  console.log('Third Api clickData=====>', ThirdApiData);

  const getFirstApiData = async (data: string) => {
    const netInfoState = await NetInfo.fetch();

    if (!netInfoState.isConnected) {
      setError('No internet connection');
      return;
    }
    try {
      setError('Yes,internet connection');
      const res = await sendGetRequest(data);
      dispatch(saveMasterData(res));
      return res;
    } catch (err) {
      setError(err);
    }
  };
  const getSecondApiData = async (data: string) => {
    const res = await sendGetRequest(data);
    dispatch(saveSecondApiData(res));
    return res;
  };
  const getThirdApiData = async (data: string) => {
    const res = await sendGetRequest(data);
    dispatch(saveThirdApiData(res));
    return res;
  };

  const handleFirstApiCall = () => {
    console.log('1 buttoncliked');
    getFirstApiData(APIConstants.album);
  };

  const handleSecondApiCall = () => {
    console.log('2 buttoncliked');
    getSecondApiData(APIConstants.todos);
  };
  const handleThirdApiCall = () => {
    console.log('3 buttoncliked');
    getThirdApiData(APIConstants.posts);
  };

  return (
    <RandomScreen
      {...{
        navigation,
        handleFirstApiCall,
        handleSecondApiCall,
        handleThirdApiCall,
      }}
    />
  );
};
export default RandomScreenViewModel;
