import {SET_THIRD_API_DATA} from '../actionConstant';

export const saveThirdApiData = (data: any) => {
  return {
    type: SET_THIRD_API_DATA,
    payload: data,
  };
};
