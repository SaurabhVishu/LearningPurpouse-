import axios from 'axios';
import {BaseURL} from '../config/apiConstant';
// import {globalStore} from '../redux/store';

const token = () => {
  const state: any = globalStore?.getState().varifyOtp;
  let tokenData = state?.data?.token;
  return `token ${tokenData}`;
};

const instance = axios.create({
  baseURL: BaseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    // 'X-CSRFToken': CSRFToken,
  },
});

export function sendGetRequest(url: string) {
  return instance
    .get(url)
    .then((response: any) => {
      return response.data;
    })
    .catch((err: any) => {
      if (err.response === undefined) {
        throw new Error('something went wrong');
      }
      return err.response.data;
    });
}

export function sendPostRequest(url: any, body: any): any {
  return instance
    .post(url, body)
    .then((response: any) => {
      return response.data;
    })
    .catch((err: any) => {
      if (err.response === undefined) {
        throw new Error('something went wrong');
      }
      return err.response.data;
    });
}

export function sendGetRequestWithToken(url: any): any {
  // instance.defaults.headers.common.Authorization = token();
  return instance
    .get(url)
    .then((response: any) => {
      return response.data;
    })
    .catch((err: any) => {
      if (err.response === undefined) {
        throw new Error('something went wrong');
      }
      return err.response.data;
    });
}

export function sendPostRequestWithToken(url: any, body: any): any {
  // instance.defaults.headers.common.Authorization = token();
  return instance
    .post(url, body)
    .then((response: any) => {
      return response.data;
    })
    .catch((err: any) => {
      if (err.response === undefined) {
        throw new Error('something went wrong');
      }
      return err.response.data;
    })
    .finally(() => {
      // hide loader
      //   dispatch(toggleLoader());
    });
}
