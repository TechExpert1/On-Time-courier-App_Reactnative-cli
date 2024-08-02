import axios from 'axios';
import Qs from 'qs';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ROOT_URL = __DEV__
  ? 'https://ontimecourier-production.up.railway.app'
  : 'https://ontimecourier-production.up.railway.app';

const BASE_URL = `${ROOT_URL}/api/`;

const client1 = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
});
const getUserToken = async () => {
  const token = await AsyncStorage.getItem('userToken');
  const userToken = JSON.parse(token);
  return userToken;
};

client1.interceptors.request.use(
  async config => {
    const requestConfig = config;
    let authToken = getUserToken();
    if (authToken) {
      let token = authToken;
      let myToken = `Bearer ${token}`;
      if (myToken) {
        requestConfig.headers = {
          Authorization: myToken,
        };
      }
    }
    console.log(
      'API request data and the URL ========>',
      `${config?.baseURL}${config.url}`,
      config?.params ? config?.params : config?.data,
    );
    requestConfig.paramsSerializer = params => {
      return Qs.stringify(params, {
        arrayFormat: 'brackets',
        encode: false,
      });
    };

    return requestConfig;
  },
  err => {
    return Promise.reject(err);
  },
);

export {ROOT_URL, BASE_URL, client1};
