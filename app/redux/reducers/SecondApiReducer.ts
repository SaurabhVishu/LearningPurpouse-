import {SET_SECOND_API_DATA} from '../actionConstant';

const INITIAL_STATE = {
  secondapidata: {},
};

const SecondApiCallReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_SECOND_API_DATA: {
      return {
        ...state,
        secondApidata: action.payload,
      };
    }

    default:
      return state;
  }
};
export default SecondApiCallReducer;
