import {SET_THIRD_API_DATA} from '../actionConstant';

const INITIAL_STATE = {
  thirdApidata: {},
};

const ThirdApiCallReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_THIRD_API_DATA: {
      return {
        ...state,
        thirdApidata: action.payload,
      };
    }

    default:
      return state;
  }
};
export default ThirdApiCallReducer;
