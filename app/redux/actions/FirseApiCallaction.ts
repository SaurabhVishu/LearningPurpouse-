import {SET_FIRST_API_DATA} from '../actionConstant';

export const saveMasterData = (data: any) => {
  return {
    type: SET_FIRST_API_DATA,
    payload: data,
  };
};
