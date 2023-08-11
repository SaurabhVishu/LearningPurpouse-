import {SET_FIRST_API_DATA} from '../actionConstant';

const INITIAL_STATE = {
  firstapidata: {},
};

const FirstApiCallReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_FIRST_API_DATA: {
      return {
        ...state,
        firstapidata: action.payload,
      };
    }

    default:
      return state;
  }
};
export default FirstApiCallReducer;
