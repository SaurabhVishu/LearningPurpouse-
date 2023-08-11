import {SET_SECOND_API_DATA} from '../actionConstant';

export const saveSecondApiData = (data: any) => {
  return {
    type: SET_SECOND_API_DATA,
    payload: data,
  };
};
